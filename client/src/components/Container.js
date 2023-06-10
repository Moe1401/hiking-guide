import React, { useState } from 'react';
import '../App.css';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Trails from './pages/Trails';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import GuestNavTabs from './GuestNavTabs';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [ userId, setUserId ] = useState(null);
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Signup') {
      return <Signup setCurrentPage={setCurrentPage}/>;
    }
    if (currentPage === 'Login') {
      return <Login setCurrentPage={setCurrentPage} setUserId={setUserId}/>;
    }
    if (currentPage === 'Profile') {
      return <Profile userId={userId}/>;
    }
    if (currentPage === 'Trails') {
      return <Trails />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      {userId === null ? (<GuestNavTabs currentPage={currentPage} handlePageChange={handlePageChange} />):  (<NavTabs currentPage={currentPage} setUserId={setUserId} handlePageChange={handlePageChange} />) }
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
