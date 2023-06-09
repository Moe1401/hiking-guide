import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/Container';
import Home from './components/pages/Home';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Container />} />
      </Routes>
    </Router>
  );
};

export default App;