import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000/api' });

export const fetchInsights = async (filters = {}) => {
    try {
        const response = await API.get('/insights', { params: filters }); 
        return response.data; 
    } catch (error) {
        console.error('Error fetching insights:', error);
        throw error;
    }
};

