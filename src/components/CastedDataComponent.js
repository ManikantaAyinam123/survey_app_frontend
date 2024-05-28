// CastedDataComponent.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCastedStatusAction } from '../redux/actions/action';
import VoterTable from './VoterTable';
const CastedDataComponent = ({ section }) => { // Receive section as prop
  const dispatch = useDispatch();
  const castedData  = useSelector((state) => state.filterByCastedStatusReducer?.data);
  console.log('this is castedData --->', castedData)

  useEffect(() => {
      dispatch(filterByCastedStatusAction(true));
  }, [dispatch, section]); 

  return (
    <>
    </>

   
  );
};

export default CastedDataComponent;
