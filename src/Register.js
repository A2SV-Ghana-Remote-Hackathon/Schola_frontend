import React, { useState } from 'react';
import logoImage from './assets/img/logo.png'; // Import your logo image here
import './assets/style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from "./api/axios.js"

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    bio: '',
    termsAccepted: false,
  });

  const navigate = useNavigate();
  // const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [user, pwd])


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    axios.post(`https://a2svschola.onrender.com/users/`, formData)
      .then((response) => {
        console.log(response.data);
        navigate('/login')
      })
      .catch((err) => {
        console.log(err);
      })

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  return (
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
                    <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p className="text-center small">Enter your personal details to create an account</p>
                  </div>
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                      <label htmlFor="yourName" className="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="yourName"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="invalid-feedback">Please, enter your name!</div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="bio" className="form-label">
                        Bio
                      </label>
                      <input
                        type="text"
                        name="bio"
                        className="form-control"
                        id="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="invalid-feedback">Please, enter your bio!</div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourEmail" className="form-label">
                        Student Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="yourEmail"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="invalid-feedback">Please enter a valid Email address!</div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">
                        Username
                      </label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">
                          @
                        </span>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="yourUsername"
                          value={formData.username}
                          onChange={handleInputChange}
                          required
                        />
                        <div className="invalid-feedback">Please choose a username.</div>
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
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="invalid-feedback">Please enter your password!</div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="terms"
                          type="checkbox"
                          value=""
                          id="acceptTerms"
                          checked={formData.termsAccepted}
                          onChange={handleCheckboxChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="acceptTerms">
                          I agree and accept the <a href="#">terms and conditions</a>
                        </label>
                        <div className="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" onClick={handleSubmit}>
                        Create Account
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Already have an account? <Link to='/login'>Log in</Link>
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
  );
}


export default Register;
