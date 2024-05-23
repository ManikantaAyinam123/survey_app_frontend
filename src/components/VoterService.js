import axios from 'axios';

const URL = 'http://localhost:3000';

const VoterService = {
  getAllVoters: () => axios.get(`${URL}/voters`),
  searchByName: (name) => axios.get(`${URL}/search/${name}`), 
  filterByCastedStatus: (casted) => axios.get(`${URL}/filter_casted_status`, { params: { casted } }),
  updateVoter: (id, updatedFields) => {
    const params = new URLSearchParams();
    for (const key in updatedFields) {
      params.append(`voter[${key}]`, updatedFields[key]);
    }
    return axios.put(`${URL}/voters/${id}?${params.toString()}`);
  },
};

export default VoterService;