
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByNameAction } from '../redux/actions/action';
import { Box, TextField, Button, Typography } from '@mui/material';
import VoterTable from './VoterTable';

const SearchByNameComponent = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const searchData = useSelector((state) => state.searchByNameReducer?.data || []) 

  console.log('this is legth of search data --->', searchData);
  const handleSearch = () => {
    dispatch(searchByNameAction(searchName));
  };

   let nodataimg = searchData.length > 0 ? false : true ; 

  return (
    <Box >
      <TextField
        label="Name"
        variant="outlined"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button sx={{padding:'15px',marginBottom:'25px'}}variant="contained" onClick={handleSearch}>
        Search
      </Button>
      { nodataimg ? (
      <>
      <Typography>No Data found</Typography>
      </>
      ):(
      <>
      <VoterTable voters={searchData} />
      </>
      )}
    </Box>
  );
};

export default SearchByNameComponent;
