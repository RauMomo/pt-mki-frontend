// src/config/api.js

export const apiConfig = {
  baseUrl: import.meta.env?.PUBLIC_BASE_URL,
  reactBaseUrl: import.meta.env.PUBLIC_REACT_APP_API_URL,
  reactApiToken: import.meta.env.PUBLIC_REACT_APP_TOKEN,
  fileBaseUrl: import.meta?.env?.PUBLIC_BASE_FILE_URL,
  lifetimeToken: import.meta?.env?.PUBLIC_TOKEN,
};
