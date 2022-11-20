import React from 'react';
import BottomNavBar from '../common/BottomNav';
import TopNav from '../common/TopNav';

export default function Account() {
  return (
    <div className=''>
    <TopNav />
    <div className="flex pt-20 items-center justify-center">
     <p className='text-xl'> Account Page </p>
    </div>
    <BottomNavBar name="account" />
  </div>
  );
}
