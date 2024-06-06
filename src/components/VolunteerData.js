import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';

import { searchByNameAction,fetchBoothNamesAction } from '../redux/actions/action';
import { Icon } from "@iconify/react";
import {   FormControl, Select, MenuItem, Grid } from '@mui/material';
import VoterTable from './VoterTable';
import AllDataComponent from './AllDataComponent';
import CastedDataComponent from './CastedDataComponent';
import NotCastedDataComponent from './NotCastedDataComponent';

import Autocomplete from '@mui/material/Autocomplete';

const VolunteerData = () => {
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [searched, setSearched] = useState(false); 
  const [filteredVoters, setFilteredVoters] = useState([]);
  const [loading, setLoading] = useState(false); 
    const [selectedBoothInAutocomplete,setSelectedBoothInAutocomplete] =useState('');
    const boothNames = useSelector((state) => state.boothNameReducer?.names || []);

  const [booth, setBooth]=  useState('');
  const voters = useSelector((state) => state.searchByNameReducer?.data);

  

   useEffect(() => {
    if (booth.trim() !== '') {
      dispatch(fetchBoothNamesAction(booth));
    }
  }, [booth, dispatch]);


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
    dispatch(searchByNameAction(searchName,selectedBoothInAutocomplete));
    setSearched(true); 
  };

  const handleClear = () => {
    setSearchName('');
    setFilteredVoters([]);
    setSearched(false); 
  };
  const handleInputBoothChange=(event) =>{
    setBooth(event.target.value);
    console.log("boothname",booth);
   }

  return (
    <Box sx={{ padding: 3 }}>
        <Grid container sx={{ padding: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Grid item>
            <Box sx={{  borderRadius: '7px', backgroundColor: "white", padding: '2px 5px' }}>
               <Autocomplete
                disablePortal
                size="small"
                id="combo-box-demo"
                options={boothNames}
                sx={{ width: 300 }}
                renderInput={(params) => {
                console.log("params", params);
                setSelectedBoothInAutocomplete(params.inputProps.value);
                console.log("setSelectedboothInAutocomplete usestate",selectedBoothInAutocomplete);
                console.log("params from booth", params.inputProps.value);
                return (
                  <TextField 
                  onChange={handleInputBoothChange}
                   sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#888888", 
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#888888", 
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#888888", 
                  }
                }
              }}{...params} placeholder="Booth name"/>);
                }}
              />
            </Box> 
          </Grid>
            <Grid item>
                    <TextField
                      size="small"
                      placeholder="Search by entering a name"
                      variant="outlined"
                      autoComplete="off" 
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
            </Grid>
           
          </Grid>
         
          
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
