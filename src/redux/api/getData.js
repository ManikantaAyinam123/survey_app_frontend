import axios from 'axios';

const all_voters = "http://localhost:3000/voters";
const search_by_name = "http://localhost:3000/voters/search_by_name";
const filter_casted_status = "http://localhost:3000/voters/filter_casted_status";
const baseURL = 'http://localhost:3000/voters';
const consistency_names_url = "http://localhost:3000/voters/search_by_constituency";

export const fetchAllVotersData = async (page) => {
  try {
    const response = await axios.get(`${all_voters}?page=${page}`);
    const data = response.data;
    console.log("thisis api data",data);
    return data;
  } catch (error) {
    console.error('Error fetching all voters data:', error);
    throw error;
  }
};

export const searchByNameData = async (name) => {
  try {
    console.log("fromapi", name);
    const response = await axios.get(`${search_by_name}?voter_name=${name}`);
    console.log(response.data);
    const data = response.data;
    console.log("Search by Name Data from API", data);
    return data;
  } catch (error) {
    console.error('Error searching by name:', error);
    throw error;
  }
};

export const filterByCastedStatusData = async (casted, page) => {
  try {
    console.log("Filter by Casted Status Data from API", page);
    const response = await axios.get(`${filter_casted_status}?casted=${casted}&page=${page}`);
    const data = response.data;
    console.log("Filter by Casted Status Data from API", response);
    return data;
  } catch (error) {
    console.error('Error filtering by casted status:', error);
    throw error;
  }
};

export const updateVoter = async (id, updatedFields) => {

try {
    const response = await axios.put(`http://localhost:3000/voters/${id}`, updatedFields);
    console.log('Update voter response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating voter:', error);
    throw error;
  }
};

export const fetchConsistencyNamesData = async () => {
  try {
    const response = await axios.get(consistency_names_url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching consistency names data:', error);
    throw error;
  }
};


