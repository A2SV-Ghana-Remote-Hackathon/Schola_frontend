import React from 'react';
import './App.css';
import Register from './Register'; 
import Login from './Login';

const App = () => {
  // const [message, setMessage] = useState('');

  // const getWelcomeMessage = async () => {
  //   const requestOptions = {
  //     method: 'GET', // Corrected the assignment operator from '=' to ':'
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   };
  // };

  return (
    <div>
      <Register />
      <Login/>
    </div>
  );
};

export default App;
