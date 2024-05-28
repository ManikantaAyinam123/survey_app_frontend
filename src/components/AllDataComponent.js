import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVotersAction } from '../redux/actions/action';
import VoterTable from './VoterTable';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';

const AllDataComponent = () => {
  const dispatch = useDispatch();
  const { data: allVotersdata, currentPage, totalPages } = useSelector((state) => state.fetchAllVoters);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllVotersAction(page));
  }, [dispatch, page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <> 
      <VoterTable voters={allVotersdata} />
      <Box sx={{  display: 'flex', justifyContent: 'center',mt:'5px' }}>
     <Stack spacing={2} direction="row">
    <Pagination 
      count={totalPages} 
      page={page} 
      onChange={handleChangePage} 
      color="primary"
    />
  </Stack>
</Box>
    </>
  );
};

export default AllDataComponent;
