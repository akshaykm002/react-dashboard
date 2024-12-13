import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Filters = ({ filterOptions, filters, onFilterChange }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newFilters = { ...filters, [name]: value };
        onFilterChange(newFilters); 
    };

    return (
        <div className="filters my-4 p-4 shadow-sm rounded">
            <h3 className="mb-4">Apply Filters</h3>
            <Form>
                <Row>
                    {Object.entries(filterOptions).map(([filterKey, options]) => (
                        <Col key={filterKey} sm={6} md={4} lg={3} className="mb-3">
                            <Form.Group controlId={filterKey}>
                                <Form.Label>
                                    {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
                                </Form.Label>
                                <Form.Control
                                    as="select"
                                    name={filterKey}
                                    value={filters[filterKey]}
                                    onChange={handleChange}
                                    className="form-select"
                                >
                                    <option value="">All</option>
                                    {options.length > 0 ? (
                                        options.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>No options available</option>
                                    )}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    ))}
                </Row>
            </Form>
        </div>
    );
};

export default Filters;
