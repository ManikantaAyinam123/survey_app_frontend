import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import VoterService from './VoterService';
import VoterTable from './VoterTable';

const VolunteerData = () => {
  const [voters, setVoters] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    fetchNotCastedVotes();
  }, [voters]);

  const fetchNotCastedVotes = () => {
    VoterService.filterByCastedStatus(false)
      .then(response => {
        setVoters(response.data);
      })
      .catch(error => console.error('Error fetching not casted voters:', error));
  };

const handleSearch = () => {
  if (searchName.trim() === '') {
    fetchNotCastedVotes();
  } else {
    VoterService.searchByName(searchName)
      .then(response => {
        const filteredData = response.data.filter(item => !item.casted);
        setVoters(filteredData);
      })
      .catch(error => console.error('Error searching voters:', error));
  }
};


  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Voters Data
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
        Search Voter by Name
      </Typography>
      <Box sx={{ display: 'flex', mb: 3 }}>
       <TextField
  label="Name"
  variant="outlined"
  value={searchName}
  onChange={(e) => {
    setSearchName(e.target.value);
    if (e.target.value.trim() === '') {
      fetchNotCastedVotes();
    }
  }}
  sx={{ mr: 2 }}
/>
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: 'black',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          Search
        </Button>
      </Box>
      <VoterTable voters={voters} />
    </Box>
  );
};

export default VolunteerData;
