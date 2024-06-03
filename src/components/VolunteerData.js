import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';
import VoterTable from './VoterTable';
import { searchByNameAction } from '../redux/actions/action';
import { Icon } from "@iconify/react";

const VolunteerData = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [searched, setSearched] = useState(false); 
  const [filteredVoters, setFilteredVoters] = useState([]);
  const [loading, setLoading] = useState(false); 
  const voters = useSelector((state) => state.searchByNameReducer?.data);

  
  useEffect(() => {
    if (voters) {
      setFilteredVoters(voters.filter(item => !item.casted));
     
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer); 
    }
  }, [voters]);

  const handleSearch = () => {
    setLoading(true); 
    dispatch(searchByNameAction(searchName));
    setSearched(true); 
  };

  const handleClear = () => {
    setSearchName('');
    setFilteredVoters([]);
    setSearched(false); 
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: 'flex', mb: 3, justifyContent: 'end' }}>
        <TextField
          size="small"
          placeholder="Search by entering a name"
          variant="outlined"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          InputProps={{
        endAdornment: <Icon icon="material-symbols-light:search" width="25" height="25" style={{ color: 'black' }} />,
      }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#3e4241",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#3e4241",
              },
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "#3e4241", }
            },
            mr: 2
          }}
        />

        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: '#EE8832',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#EE8832',
              color: 'white',
            },
          }}
        >
          Search
        </Button>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {loading ? ( 
          <CircularProgress sx={{color:'#EE8832'}}/>
        ) : searched && filteredVoters.length === 0 ? (
          <img src="https://t4.ftcdn.net/jpg/05/86/21/03/360_F_586210337_WOGOw0l7raEB8F61Muc4hWbvVcyQdk9Z.jpg" alt="No Data" style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }} />
        ) : searched && filteredVoters.length > 0 ? (
          <VoterTable voters={filteredVoters} handleClear={handleClear} />
        ) : (
          <Typography sx={{lettetSpacing:'1.2px',fontWeight:'bold',fontSize:'20px'}}>Enter input to search</Typography>
        )}
      </Box>
    </Box>
  );
};

export default VolunteerData;
