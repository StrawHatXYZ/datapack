import React from 'react';
import BottomNavBar from '../common/BottomNav';
import TopNav from '../common/TopNav';

export default function Search() {
  return (
    <div className=''>
    <TopNav />
    <div className="flex pt-20 items-center justify-center">
     <p className='text-xl'> Search Page </p>
    </div>
    <BottomNavBar name="search" />
  </div>
  );
}
