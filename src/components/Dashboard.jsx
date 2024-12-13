import React, { useEffect, useState, useMemo } from 'react';
import Filters from './Filters';
import Sidebar from './Sidebar';
import Graph from './Graph';
import { fetchInsights } from '../services/api';
import { Row, Col, Container } from 'react-bootstrap';

const Dashboard = () => {
    const [insights, setInsights] = useState([]); 
    const [filteredInsights, setFilteredInsights] = useState([]); 
    const [filters, setFilters] = useState({
        region: '',
        start_year: '',
        end_year: '',
        topic: '',
        sector: '',
        pestle: '',
        source: '',
        country: ''
    }); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchInsights(); 
                setInsights(data); 
                setFilteredInsights(data); 
            } catch (error) {
                console.error('Error loading insights:', error);
                setError('Failed to load insights data.');
            }
        };
        getData();
    }, []);

    const getFilterOptions = useMemo(() => {
        const options = {};
        if (insights.length) {
            [
                'region',
                'start_year',
                'end_year',
                'topic',
                'sector',
                'pestle',
                'source',
                'country'
            ].forEach((filterKey) => {
                options[filterKey] = [
                    ...new Set(insights.map((item) => item[filterKey]).filter(Boolean))
                ];
            });
        }
        return options;
    }, [insights]);

    // Filter insights based on selected filters
    const filterInsights = (newFilters) => {
        setFilters(newFilters); 

        let filteredData = [...insights];

        // Apply filters to the insights
        for (const filterKey in newFilters) {
            const filterValue = newFilters[filterKey];

            if (!filterValue) continue;

            filteredData = filteredData.filter((item) => {
                const value = item[filterKey];
                return value && value.toString().toLowerCase().includes(filterValue.toLowerCase());
            });
        }

        setFilteredInsights(filteredData);
    };

    return (
        <Container fluid className="dashboard">
            <Row>
                {/* Sidebar */}
                <Col md={2} className="p-0">
                    <Sidebar />
                </Col>

                {/* Main Content */}
                <Col md={10} className="p-3">
                    {error ? (
                        <div className="error-message text-center">
                            <h2>Something went wrong!</h2>
                            <p>{error}</p>
                        </div>
                    ) : (
                        <div className="main-component">
                            <Filters
                                filterOptions={getFilterOptions}
                                filters={filters}
                                onFilterChange={filterInsights}
                            />
                            <Graph data={filteredInsights} />
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
