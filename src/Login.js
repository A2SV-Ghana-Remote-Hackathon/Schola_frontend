import React, { useState } from 'react';
import logoImage from './assets/img/logo.png';
//  <img src="assets/img/smeagol.jpg" alt="" class="w-100 pt-4">
import './assets/style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit =  (e) => {
    e.preventDefault();
    const data = {
      'username':email,
      "password": password
    };
    
    const formData = new FormData();
    
    for (let key in data) {
      formData.append(key, data[key]);
    }
    console.log(data)
    axios.post(`https://a2svschola.onrender.com/login/`, formData)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userAuthToken", response.data?.access_token);
        navigate("/home")
      })
      .catch((err) => {
        console.log(err);
      })

  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src={logoImage} alt="" />
                    <span className="d-none d-lg-block">Schola</span>
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                      <p className="text-center small">Enter your email & password to login</p>
                    </div>
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-12">
                        <label htmlFor="you email" className="form-label">
                          Email
                        </label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input
                            type="text"
                            name= 'email'
                            className="form-control"
                            id="you email"
                            value= {email}
                            onChange={handleEmailChange}
                            required
                          />
                          <div className="invalid-feedback">Please enter your email.</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                        <div className="invalid-feedback">Please enter your password!</div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" onClick={handleSubmit}>
                          Login
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Don't have an account? <Link to="/register">Create an account</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </main>
  );
};

export default Login;
