
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByNameAction } from '../redux/actions/action';
import { Box, TextField, Button } from '@mui/material';
import VoterTable from './VoterTable';

const SearchByNameComponent = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const searchData = useSelector((state) => state.data || []) 

  console.log('this is legth of search data --->', searchData);
  const handleSearch = () => {
    dispatch(searchByNameAction(searchName));
  };

  return (
    <Box>
      <TextField
        label="Name"
        variant="outlined"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      <VoterTable voters={searchData} />
    </Box>
  );
};

export default SearchByNameComponent;
