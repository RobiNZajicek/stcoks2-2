import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const getUserDetails = async () => {
    const response = await axios.get(`${API_URL}/user`, { withCredentials: true });
    return response.data;
};

const getAllUsers = async () => {
    const response = await axios.get(`${API_URL}/users`, { withCredentials: true });
    return response.data;
};

export default {
    getUserDetails,
    getAllUsers,
};
