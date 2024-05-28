
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCastedStatusAction } from '../redux/actions/action';
import VoterTable from './VoterTable';

const CastedDataComponent = () => {
  const dispatch = useDispatch();
  const  castedData = useSelector((state) => state.data); // Assuming you have separate state for casted data

  useEffect(() => {
    dispatch(filterByCastedStatusAction(false)); 
  }, [dispatch]);

  return (
    <VoterTable voters={castedData} />
  );
};

export default CastedDataComponent;
