import React from 'react';
import { Modal, Box, Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ModalForm = ({ open, handleClose, formData, handleChange, handleSubmit }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 8,
      }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
          Edit Voter
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="voter_name"
              label="Name"
              value={formData.voter_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="age"
              label="Age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="gender"
              label="Gender"
              value={formData.gender}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="house_number"
              label="House Number"
              value={formData.house_number}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="mobile_No"
              label="Mobile Number"
              value={formData.mobile_No}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
           <Grid item xs={12} sm={6}>
            <TextField
              name="booth_name"
              label="Booth Name"
              value={formData.booth_name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
         
          <Grid item xs={12} sm={6} sx={{ marginBottom: '10px' }}>
            <FormControl fullWidth>
              <InputLabel id="casted-label">Casted</InputLabel>
              <Select
                labelId="casted-label"
                id="casted"
                name="casted"
                value={formData.casted}
                label="Casted"
                onChange={handleChange}
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: 'end' }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#EE8832',
              color: 'white',
              fontSize: '16px',
              textTransform: 'none',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#EE8832',
                color: 'white'
              }
            }}
          >
            Save
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalForm;
