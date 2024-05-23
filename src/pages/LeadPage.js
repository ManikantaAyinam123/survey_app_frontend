import React from 'react';
import LeadData from '../components/LeadData';
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import { TextField, Button, Typography, Box, Grid } from '@mui/material';

const LeadPage = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <LeadData/>
    
    </>
  );
};

export default LeadPage;
