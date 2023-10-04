import React from 'react';
import Event from './components/Event'; 
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function Events() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Event/>
    </div>
  );
}

export default Events;
