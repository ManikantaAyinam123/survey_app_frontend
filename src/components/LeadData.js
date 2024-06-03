import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByNameAction } from '../redux/actions/action';
import { TextField } from '@mui/material';
import VoterTable from './VoterTable';
import { Box, Typography, FormControl, Select, MenuItem, Grid } from '@mui/material';
import AllDataComponent from './AllDataComponent';
import CastedDataComponent from './CastedDataComponent';
import NotCastedDataComponent from './NotCastedDataComponent';
import {Icon} from "@iconify/react";

const LeadData = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const searchData = useSelector((state) => state.searchByNameReducer?.data || []);
  const [section, setSection] = useState('all');
  const [filteredSearchData, setFilteredSearchData] = useState([]);

  useEffect(() => {
   
    if (section === 'all') {
      setFilteredSearchData(searchData);
    } else if (section === 'casted') {
      setFilteredSearchData(searchData.filter(voter => voter.casted));
    } else if (section === 'not-casted') {
      setFilteredSearchData(searchData.filter(voter => !voter.casted));
    }
  }, [section, searchData]);

  const handleSearch = () => {
    dispatch(searchByNameAction(searchName));
  };

  const handleSectionChange = (event) => {
    const value = event.target.value;
    setSection(value);
  };

  const handleInputChange = (event) => {
    setSearchName(event.target.value);
    dispatch(searchByNameAction(event.target.value));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container sx={{padding: 3 , display: 'flex', justifyContent: 'space-between' }}>
        <Grid item>
          <FormControl size="small" sx={{ boxShadow: '0px 0px 3px #888888', borderRadius: '7px', backgroundColor: "white", padding: '2px 5px',"& .MuiOutlinedInput-root": {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", 
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", 
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", 
          }
        } }}>
            <Select value={section} onChange={handleSectionChange}>
              <MenuItem value="all">All Voters</MenuItem>
              <MenuItem value="casted">Casted Votes</MenuItem>
              <MenuItem value="not-casted">Not Casted Votes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
<Grid item>
  <Box sx={{ boxShadow: '0px 0px 3px #888888', borderRadius: '7px', backgroundColor: "white", padding: '2px 5px' }}>
    <TextField
      size="small"
      placeholder="Search by entering a name"
      value={searchName}
      onChange={handleInputChange}
      InputProps={{
        endAdornment: <Icon icon="material-symbols-light:search" width="25" height="25" style={{ color: 'black' }} />,
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", 
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", 
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent", 
          }
        }
      }}
    />
  </Box>
</Grid>






      </Grid>
      {searchName.trim() !== '' ? (
        filteredSearchData.length === 0 ? (
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            No data available
          </Typography>
        ) : (
          <VoterTable voters={filteredSearchData} />
        )
      ) : (
        <>
          {section === 'all' && <AllDataComponent />}
          {section === 'casted' && <CastedDataComponent />}
          {section === 'not-casted' && <NotCastedDataComponent />}
        </>
      )}
    </Box>
  );
};

export default LeadData;
