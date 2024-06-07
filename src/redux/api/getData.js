import axios from 'axios';

const all_voters = "http://localhost:3000/voters";
const search_by_name = "http://localhost:3000/voters/search_by_name";
const filter_casted_status = "http://localhost:3000/voters/filter_casted_status";
const baseURL = 'http://localhost:3000/voters';
const consistency_names_url = "http://localhost:3000/voters/search_by_constituency";
const booth_names_url = "http://localhost:3000/voters/search_by_booth_name";

export const fetchAllVotersData = async (page,boothName) => {

   console.log("apinames in allvoters",boothName)
  try {
    const response = await axios.get(`${all_voters}?booth_name=${boothName}&page=${page}`);
    const data = response.data;
    console.log("thisis api data",data);
    return data;
  } catch (error) {
    console.error('Error fetching all voters data:', error);
    throw error;
  }
};

export const searchByNameData = async (name,boothName) => {
  try {
    console.log("from search api ============>", name,boothName);
    const response = await axios.get(`${search_by_name}?voter_name=${name}&booth_name=${boothName}`);
    console.log(response.data);
    const data = response.data;
    console.log("Search by Name Data from API ===================>", data);
    return data;
  } catch (error) {
    console.error('Error searching by name:', error);
    throw error;
  }
};

export const filterByCastedStatusData = async (casted, page, boothName) => {
  try {
    console.log("Filter by Casted Status Data from API +++++>",casted, page, boothName );
    const response = await axios.get(`${filter_casted_status}?casted=${casted}&booth_name=${boothName}&page=${page}`);
    const data = response.data;
    console.log("Filter by Casted Status Data from API ////////////", data);
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

export const fetchConsistencyNamesData = async (name) => {
  console.log("in api",name);
  try {
    const response = await axios.get(`${consistency_names_url}?constituency=${name}`);
    const data = response.data;
    console.log("api constituency",data)
    return data;
  } catch (error) {
    console.error('Error fetching consistency names data:', error);
    throw error;
  }
};

export const fetchBoothNamesData = async (name) => {
  try {
    console.log("Fetching booth names for:", name);
    const response = await axios.get(`${booth_names_url}?booth_name=${name}`);
    const data = response.data;
    console.log("Booth Names Data from API", data);
    return data;
  } catch (error) {
    console.error('Error fetching booth names data:', error);
    throw error;
  }
};


