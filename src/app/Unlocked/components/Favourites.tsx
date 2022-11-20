import React from 'react';
import BottomNavBar from '../common/BottomNav';
import TopNav from '../common/TopNav';

export default function Favourite() {
  return (
    <div className=''>
    <TopNav />
    <div className="flex pt-20 items-center justify-center">
     <p className='text-xl'> Favourites Page </p>
    </div>
    <BottomNavBar name="favourites" />
  </div>
  );
}
