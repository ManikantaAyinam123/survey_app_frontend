import React, { useState } from 'react';
import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';
import AllDataComponent from './AllDataComponent';
import SearchByNameComponent from './SearchByNameComponent';
import CastedDataComponent from './CastedDataComponent';
import NotCastedDataComponent from './NotCastedDataComponent';


const LeadData = () => {
  const [section, setSection] = useState('all');

  const handleSectionChange = (event) => {
    const value = event.target.value;
    setSection(value);
    // console.log('this is selected one --->', value)
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBotto m>
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
      {section === 'search' && <SearchByNameComponent />}
      {section === 'all' && <AllDataComponent />}
      {section === 'casted' && <CastedDataComponent />}
      {section === 'not-casted' && <NotCastedDataComponent />}
      
    </Box>
  );
};

export default LeadData;
