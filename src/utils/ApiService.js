import axios from "axios";


 const BASE_URL = import.meta.env.VITE_API_BASE_URL;


const ApiService = {
  // GET Request
  get: async (endpoint, params = {}, token = null) => {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios.get(`${BASE_URL}/${endpoint}`, { params, headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  // POST Request (Handles both Authenticated & Non-Authenticated)
  post: async (endpoint, data, authRequired = true) => {
    try {
    
      const headers = {};
      if (authRequired) {
        const token = localStorage.getItem("token");
        if (token) headers.Authorization = `Bearer ${token}`;
      }

      const response = await axios.post(`${BASE_URL}/${endpoint}`, data, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  // PUT Request
  put: async (endpoint, data, token = null) => {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios.put(`${BASE_URL}/${endpoint}`, data, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },

  // DELETE Request
  delete: async (endpoint, token = null) => {
    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios.delete(`${BASE_URL}/${endpoint}`, { headers });
      return response.data;
    } catch (error) {
      return handleError(error);
    }
  },
};

// Error Handling Function
const handleError = (error) => {
  if (error.response) {
    console.error("API Error:", error.response.data.message || error.message);
    return { success: false, message: error.response.data.message || "Something went wrong!" };
  } else if (error.request) {
    console.error("No response received:", error.request);
    return { success: false, message: "No response from server" };
  } else {
    console.error("Request error:", error.message);
    return { success: false, message: error.message };
  }
};

export default ApiService;
