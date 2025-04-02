import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000', 
    timeout: 1000,
});

instance.interceptors.request.use(
    async (config) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token is not found');
            }
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        } catch (error) {
            console.error(error);
            return Promise.reject(error); 
        }
    }
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.log('Token is expired');
            console.log('Unauthorized error. Redirecting to login...');
            // Handle redirection to login page here
        }
        return Promise.reject(error); // Ensure errors are not swallowed
    }
);

export default instance;
