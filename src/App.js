import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Events from './Events';
import Comments from './Comments.js';
import Announcements from './Announcements.js';
import Profile from './Profile.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCommunity from './Create_community.js'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events/>} />
          <Route path='/community' element={<CreateCommunity/>}/>
          <Route path="/announcements" element={<Announcements />} /> 
          <Route path="/comments" element={<Comments />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
