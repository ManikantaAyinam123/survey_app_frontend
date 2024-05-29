
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCastedStatusAction } from '../redux/actions/action';
import VoterTable from './VoterTable';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const CastedDataComponent = () => {
  const dispatch = useDispatch();
    const { data: nonCastedData, currentPage, totalPages } = useSelector((state) => state.filterByCastedStatusReducer);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(filterByCastedStatusAction(false,page)); 
  }, [dispatch,page]);
   const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
  <>
  <VoterTable voters={nonCastedData} />
  <Box sx={{ display: 'flex', justifyContent: 'center', mt: '5px' }}>
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

export default CastedDataComponent;
