
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllVotersAction } from '../redux/actions/action';
import VoterTable from './VoterTable';

const AllDataComponent = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAllVotersAction());
  }, [dispatch]);

  return (
    <VoterTable voters={data} />
  );
};

export default AllDataComponent;
