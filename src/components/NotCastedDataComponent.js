import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCastedStatusAction } from '../redux/actions/action';
import VoterTable from './VoterTable';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

const NotCastedDataComponent = ({ boothName}) => {
  
  console.log("not casted component props check --->  2",boothName);
  const dispatch = useDispatch();
    const { data: nonCastedData, currentPage, totalPages } = useSelector((state) => state.filterByCastedStatusReducer);
    console.log("non casted",nonCastedData);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(filterByCastedStatusAction(false,page, boothName)); 
    console.log("useeffect in non casted data ---------------------------->",false,page, boothName);
  }, [dispatch,page, boothName]);
   const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
  <>
  <VoterTable voters={nonCastedData} />
  <Box sx={{ display: 'flex', justifyContent: 'center', mt: '10px' }}>
        <Stack spacing={2} direction="row">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
                   sx={{ '& .MuiPaginationItem-page.Mui-selected': { backgroundColor: '#EE8832',color:'#ffffff' },  '& .MuiPaginationItem-page:hover': {backgroundColor: '#FFAA55',color: '#ffffff', }, }}
          />
        </Stack>
      </Box>
  </>
    );
};

export default NotCastedDataComponent;
