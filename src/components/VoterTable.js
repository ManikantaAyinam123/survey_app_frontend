import React, { useState } from 'react';
import {Icon} from "@iconify/react";
import { Table, Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, Typography, TextField } from '@mui/material';
import VoterService from './VoterService';
import ModalForm from './ModalForm';
import { updateVoterAction } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';

const VoterTable = ({ voters }) => {
  const dispatch = useDispatch();
  console.log('this is table component ----> ', voters)
  const [userType, setUserType] = useState(localStorage.getItem('userType')); 
  const [selectedVoter, setSelectedVoter] = useState(null);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    voter_name: '',
    age: '',
    sex: '',
    state: '',
    constituency: '',
    party: '',
    casted: false,
    figured_by: ''
  });

    const updateData = useSelector((state) => state); 
    console.log("this is updated data",updateData);

  const handleOpen = (voter) => {
    setSelectedVoter(voter);
    setFormData({ ...voter });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    
    const figuredBy = localStorage.getItem('name');
    const { voter_name, age, sex, state,constituency, party, casted, figured_by } = formData;
    const updatedFields = { voter_name, age, sex, state,constituency , party, casted, figured_by: figuredBy };
    console.log(updatedFields);

     dispatch(updateVoterAction(selectedVoter.id, { voter: updatedFields }));
      setOpen(false);
      

  };

  return (
    <>
      <TableContainer >
        <Table sx={{ minWidth: 650 , border:'1px solid black'}} aria-label="simple table">
          <TableHead sx={{backgroundColor:'black',}}>
            <TableRow>
              <TableCell sx={{fontWeight:'bold',color:'white'}}>ID</TableCell>
              <TableCell sx={{fontWeight:'bold',color:'white'}}>Name</TableCell>
              <TableCell sx={{fontWeight:'bold',color:'white'}}>Age</TableCell>
              <TableCell sx={{fontWeight:'bold',color:'white'}}>Sex</TableCell>
              <TableCell sx={{fontWeight:'bold',color:'white'}}>State</TableCell>
              <TableCell sx={{fontWeight:'bold',color:'white'}}>Party</TableCell>
              <TableCell sx={{fontWeight:'bold',color:'white'}}>Casted</TableCell>
              <TableCell sx={{fontWeight:'bold',color:'white'}}>Figured By</TableCell>
              {userType === 'volunteer' && <TableCell sx={{fontWeight:'bold',color:'white'}}>Action </TableCell>} 
            </TableRow>
          </TableHead>
          <TableBody sx={{backgroundColor:'white'}}>
            {voters.map((voter) => (
              <TableRow key={voter.id} sx={{
               '&:last-child td, &:last-child th': { border: 0 },
               '& td, & th': { borderBottom: `1px solid black` },
                                  }}>
                <TableCell>{voter.id}</TableCell>
                <TableCell>{voter.voter_name}</TableCell>
                <TableCell>{voter.age}</TableCell>
                <TableCell>{voter.sex}</TableCell>
                <TableCell>{voter.state}</TableCell>
                <TableCell>{voter.party}</TableCell>
                <TableCell>{voter.casted ? "Yes" : "No"}</TableCell>
                <TableCell>{voter.figured_by}</TableCell>
                {userType === 'volunteer' && (
                  <TableCell>
                    <Button   onClick={() => handleOpen(voter)}>
                     <Icon icon="clarity:edit-solid" width="18" height="18"  style={{color: 'black'}} />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       <ModalForm 
        open={open} 
        handleClose={handleClose} 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
      
    </>
  );
};

export default VoterTable;
