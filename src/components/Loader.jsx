import React from 'react';
import { Html } from '@react-three/drei';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <CircularProgress size={60} color='primary' />
      </div>
    </Html>
  );
};

export default Loader;
