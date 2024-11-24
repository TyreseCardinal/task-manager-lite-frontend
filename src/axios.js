import axios from 'axios'

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your actual backend URL
  timeout: 10000, // Set a timeout limit for requests
  headers: {
    'Content-Type': 'application/json',
  },
})

// Export the Axios instance for use in components
export default axiosInstance
