
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  const returnToHomePage = () => {
    router.push('/home');
  };

  return (
    <div className='w-screen flex h-screen gap-4 bg-black items-center flex-col justify-center text-white'>
      <h1 className='tracking-widest text-4xl'>PAGE NOT FOUND</h1>
      <button onClick={returnToHomePage}>Return to the home page</button>
    </div>
  );
};

export default NotFound; 
