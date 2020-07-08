import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => (
  <Loader
    type="ThreeDots"
    color="#00A799"
    height={60}
    width={60}
    timeout={0}
  />
);

export default LoadingSpinner;
