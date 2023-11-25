import React from 'react';

// components
import UpperHome from './components/UpperHome/UpperHome';
import MiddleHome from './components/MiddleHome/MiddleHome';
import Dropdown from './components/Dropdown/Dropdown';

const Home = () => {
  
  return (
    <div className='relative'>
      <UpperHome />
      <MiddleHome />
      <Dropdown />
    </div>
  );
};

export default Home;