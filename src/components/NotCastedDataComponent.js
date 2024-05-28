
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCastedStatusAction } from '../redux/actions/action';
import VoterTable from './VoterTable';

const CastedDataComponent = () => {
  const dispatch = useDispatch();
  const  nonCastedData = useSelector((state) => state.filterByCastedStatusReducer?.data);

  useEffect(() => {
    dispatch(filterByCastedStatusAction(false)); 
  }, [dispatch]);

  return (
  <>
  <VoterTable voters={nonCastedData} />
  </>
    );
};

export default CastedDataComponent;
