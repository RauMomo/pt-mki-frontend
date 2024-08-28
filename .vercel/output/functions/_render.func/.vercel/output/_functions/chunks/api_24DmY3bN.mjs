// src/config/api.js

const apiConfig = {
  baseUrl: process.env.BASE_URL,
  fileBaseUrl: process.env.BASE_FILE_URL,
  lifetimeToken: process.env.TOKEN,
  // Add other API-related configurations here if needed
};

// Example usage:
// import { apiConfig } from '../config/api';
// fetch(`${apiConfig.baseUrl}/endpoint`)

export { apiConfig as a };
