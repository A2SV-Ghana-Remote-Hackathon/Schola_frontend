import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
      <BrowserRouter>
        <Routes>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/login' element = {<Login/>}/>

        </Routes>
      </BrowserRouter>
      {/* <Register />
      <Login/> */}
    </div>
  );
};

export default App;
