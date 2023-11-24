import React from 'react';

// components
import Navbar from '@/components/navigation/Navbar';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-h-screen flex flex-col'>
      <Navbar />
      <div className='overflow-y-auto'>
        { children }
      </div>
    </div>
  );
};

export default layout;