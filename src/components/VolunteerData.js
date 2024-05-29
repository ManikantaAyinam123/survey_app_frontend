import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button } from '@mui/material';
import VoterTable from './VoterTable';
import { searchByNameAction } from '../redux/actions/action';

const VolunteerData = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [filteredVoters, setFilteredVoters] = useState([]);
  const voters = useSelector((state) => state.searchByNameReducer?.data );

  // Update filteredVoters whenever voters state changes
  useEffect(() => {
    if (voters) {
      setFilteredVoters(voters.filter(item => !item.casted));
    }
  }, [voters]);

  const handleSearch = () => {
    dispatch(searchByNameAction(searchName));
      setSearchName(''); 
    setFilteredVoters([]); 
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
          onChange={(e) => setSearchName(e.target.value)}
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
      {filteredVoters.length === 0 ? (
        <Typography>No Data </Typography>
      ) : (
        <VoterTable voters={filteredVoters} />
      )}
    </Box>
  );
};

export default VolunteerData;
