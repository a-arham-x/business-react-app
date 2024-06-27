import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './components/Homepage';
import About from './components/About';
import Services from './components/Services';
import AuthPage from './components/AuthPage';
import Investor from './components/Investor';
import Entrepreneur from "./components/Entrepreneur"
import SkilledPerson from "./components/SkilledPerson"
import Admin from "./components/Admin"
import Chat from './components/Chat';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/auth/*" element={<AuthPage/>}/>
          <Route path="/investor/*" element={<Investor/>}/>
          <Route path="/entrepreneur/*" element={<Entrepreneur/>}/>
          <Route path="/skilled-person/*" element={<SkilledPerson/>}/>
          <Route path="/admin/*" element={<Admin/>}/>
          <Route path="/chat" element={<Chat/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
