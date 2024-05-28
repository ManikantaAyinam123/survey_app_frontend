// fetchData.js
import axios from 'axios';

const all_voters = "http://localhost:3000/voters"; // Assuming this is your API endpoint
const search_by_name = "http://localhost:3000/voters/search_by_name"; // Assuming this is your search API endpoint
const filter_casted_status = "http://localhost:3000/voters/filter_casted_status"; // Assuming this is your filter by casted status API endpoint

export const fetchAllVotersData = async () => {
  try {
    const response = await axios.get(all_voters);
    const data = response.data;
    console.log("All Voters Data from API", data);
    if (data) {
      return Object.keys(data).map((key) => ({ id: key, ...data[key] }));
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching all voters data:', error);
    throw error;
  }
};

export const searchByNameData = async (name) => {
  try {
    console.log("fromapi",name);
    const response = await axios.get(`${search_by_name}?voter_name=${name}`);
    console.log(response.data);
    const data = response.data;
    console.log("Search by Name Data from API", data);
    return data; // Assuming search API returns data directly
  } catch (error) {
    console.error('Error searching by name:', error);
    throw error;
  }
};

export const filterByCastedStatusData = async (casted) => {
  try {
    console.log("api",casted);
    const response = await axios.get(`${filter_casted_status}?casted=${casted}`);
    const data = response.data;
    console.log("Filter by Casted Status Data from API", data);
    return data; // Assuming filter API returns data directly
  } catch (error) {
    console.error('Error filtering by casted status:', error);
    throw error;
  }
};
