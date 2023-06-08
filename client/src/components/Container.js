import React, { useState } from 'react';
import '../App.css';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Trails from './pages/Trails';


export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'Trails') {
      return <Trails />;
    }
    
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <form class="hikeSearch">
        <div class="form-group">
          <div class="row">
            <div class="col-md-4"></div>

              <div class="col-md-4 text-center">

                <div class="invalid-feedback">
                  Please enter a......</div>

                <input type="text" class="form-control mb-3 mt-10" name="locations" id="locations" placeholder="Something about hiking "
                  autofocus />
                <button type="button" class="btn btn-primary" id="searchLocation2" role="button"
                  aria-pressed="true">Search</button>
              </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </form>
    </div>
  );
}
