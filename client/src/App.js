import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Container from './components/Container';

const App = () => {
  return (
    <Router>
      {/* <Container /> */}
      <Routes>
        <Route path='/*' element= {<Container/>} />
      </Routes>
    </Router>
  );
};

export default App;