import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
// import {
//   RiHomeSmile2Line,
//   RiHomeSmile2Fill,
//   RiSearchEyeFill,
// } from 'react-icons/ri';
// import { BiSearchAlt } from 'react-icons/bi';
// import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoAnalytics } from 'react-icons/io5';
import { RiUser5Line } from 'react-icons/ri';
import {
  AiOutlineAppstore,
  AiFillAppstore,
  AiOutlineDatabase,
  AiFillDatabase,
} from 'react-icons/ai';

const BottomNavBar = (props) => {
  const navigate = useNavigate();

  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
      case 'home':
        navigate('/');
        break;
      case 'search':
        navigate('/search');
        break;
      case 'favourites':
        navigate('/favourites');
        break;
      case 'account':
        navigate('/account');
        break;
      default:
        navigate('/');
        break;
    }
  }, [activeTabs, navigate]);

  return (
    <div className="bottom-navblock fixed bottom-0 px-10 py-5 inset-x-0 z-50 shadow-lg bg-gray-700 y-200 text-gray-800/10 flex justify-between">
      <div className="bn-tab ">
        {activeTabs === 'home' ? (
          <AiFillAppstore
            className=" cursor-pointer"
            size="27"
            color="#fff"
            onClick={() => setActiveTabs('home')}
          />
        ) : (
          <AiOutlineAppstore
            size="27"
            className=" cursor-pointer"
            color="#bbb"
            onClick={() => setActiveTabs('home')}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === 'search' ? (
          <IoAnalytics
            className=" cursor-pointer"
            size="27"
            color="#fff"
            onClick={() => setActiveTabs('search')}
          />
        ) : (
          <IoAnalytics
            className=" cursor-pointer"
            size="27"
            color="#bbb"
            onClick={() => setActiveTabs('search')}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === 'favourites' ? (
          <AiFillDatabase
            className=" cursor-pointer"
            size="27"
            color="#fff"
            onClick={() => setActiveTabs('favourites')}
          />
        ) : (
          <AiOutlineDatabase
            className=" cursor-pointer"
            size="27"
            color="#bbb"
            onClick={() => setActiveTabs('favourites')}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === 'account' ? (
          <RiUser5Line
            className=" cursor-pointer"
            size="27"
            color="#fff"
            onClick={() => setActiveTabs('account')}
          />
        ) : (
          <RiUser5Line
            className=" cursor-pointer"
            size="27"
            color="#bbb"
            onClick={() => setActiveTabs('account')}
          />
        )}
      </div>
    </div>
  );
};

export default BottomNavBar;
