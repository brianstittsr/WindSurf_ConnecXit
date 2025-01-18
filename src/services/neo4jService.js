import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const uploadCSV = async (csvData) => {
  try {
    const response = await axios.post(`${API_URL}/upload-csv`, csvData, {
      headers: {
        'Content-Type': 'text/csv'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading CSV:', error);
    throw error;
  }
};

export const searchCompanies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { query }
    });
    return response.data.companies;
  } catch (error) {
    console.error('Error searching companies:', error);
    throw error;
  }
};
