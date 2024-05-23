import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import VoterService from './VoterService';
import VoterTable from './VoterTable';

const LeadData = () => {
  const [section, setSection] = useState('all');
  const [searchName, setSearchName] = useState('');
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    fetchAllVoters();
  }, []);

  const fetchAllVoters = () => {
    console.log('Fetching all voters...');
    VoterService.getAllVoters()
      .then(response => {
        console.log("All voters data", response.data);
        setVoters(response.data);
      })
      .catch(error => console.error('Error fetching voters:', error));
  };

  const handleSearch = () => {
    setVoters([]);
    console.log("name", searchName);

    VoterService.searchByName(searchName)
      .then(response => {
        console.log("Search data", response.data);
        setVoters(response.data);
      })
      .catch(error => console.error('Error searching voters:', error));
  };

  const handleFilterByCastedStatus = (casted) => {
    setVoters([]);
    console.log("Filter by casted status:", casted);

    VoterService.filterByCastedStatus(casted)
      .then(response => {
        console.log("Filtered data", response.data);
        setVoters(response.data);
      })
      .catch(error => console.error('Error filtering voters:', error));
  };

  const handleSectionChange = (event) => {
    const value = event.target.value;
    console.log('Section changed to:', value);
    setSection(value);
    setVoters([]);

    if (value === 'all') {
      fetchAllVoters();
    } else if (value === 'casted') {
      handleFilterByCastedStatus(true);
    } else if (value === 'not-casted') {
      handleFilterByCastedStatus(false);
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Voters Data
      </Typography>
      <FormControl sx={{ minWidth: 120, marginBottom: 3 }}>
       
        <Select value={section} onChange={handleSectionChange}>
          <MenuItem value="all">All Voters</MenuItem>
          <MenuItem value="search">Search Voter by Name</MenuItem>
          <MenuItem value="casted">Casted Votes</MenuItem>
          <MenuItem value="not-casted">Not Casted Votes</MenuItem>
        </Select>
      </FormControl>
      {section === 'all' && <VoterTable voters={voters} />}
      {section === 'search' && (
        <Box>
          <Typography variant="h4" gutterBottom>
            Search Voter by Name
          </Typography>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <TextField
              label="Name"
              variant="outlined"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              sx={{ mr: 2 }}
            />
            <Button variant="contained" onClick={handleSearch} sx={{backgroundColor:'black',color:'white',fontWeight:'bold','&:hover': {
    backgroundColor: 'black',
    color: 'white'
  }}}>
              Search

            </Button>
          </Box>
          <VoterTable voters={voters} />
        </Box>
      )}
      {(section === 'casted' || section === 'not-casted') && <VoterTable voters={voters} />}
    </Box>
  );
};

export default LeadData;