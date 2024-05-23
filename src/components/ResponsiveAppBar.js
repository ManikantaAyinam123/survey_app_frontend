
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Box, FormControl, InputLabel, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
 
 
const ResponsiveAppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [section, setSection] = useState('all');
     const navigate = useNavigate();
 
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
 
    const handleClose = () => {
        setAnchorEl(null);
    };
 
     const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');
        console.log('Logout');

       
        navigate('/');

       
    };
 
    const handleSectionChange = (event) => {
        console.log('Section changed to:', event.target.value);
        setSection(event.target.value);
    };
 
    return (
        <Box sx={{ backgroundColor: '#EE8832' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'white' }}>
                    Voter Data
                </Typography>
                <FormControl sx={{ minWidth: 200, marginRight: 2 }}>
                    <Select
                        labelId="section-label"
                        id="section-select"
                        value={section}
                        onChange={handleSectionChange}
                        size='small'
                     
                        sx={{
                            '& .MuiSelect-select': { color: 'white', minWidth:'250px' }, 
                            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }, // Set border color to white
                            '& .MuiList-root .MuiMenuItem-root': { color: 'white' }, 
                            '& .MuiSelect-icon': { color: 'white' } // Change color of the dropdown icon to white
                        }}
                    >
                        
                        <MenuItem value="all">All Voters</MenuItem>
                        <MenuItem value="search">Search Voter by Name</MenuItem>
                        <MenuItem value="filter">Filter Voters by Casted Status</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    color="inherit"
                    onClick={handleLogout}
                    variant="outlined"
                    sx={{ borderColor: 'white', marginLeft: 2, color: 'white' }}
                >
                    Logout
                </Button>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    {/* Add icon here */}
                </IconButton>
            </Toolbar>
        </Box>
    );
};
 
export default ResponsiveAppBar;
 