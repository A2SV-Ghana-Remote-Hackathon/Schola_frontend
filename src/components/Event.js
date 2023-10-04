// EventsAndUpdatesPage.js
import React, {useState, useEffect} from 'react';
import image1 from '../assets/img/news-1.jpg';
import { Link } from 'react-router-dom';
import axios from "axios";


const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("https://a2svschola.onrender.com/events/")
    .then((response) => {
      setEvents(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  })
  return (
    <main id="main" className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="pagetitle">
              <h1>Events &amp; Updates</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Button trigger modal */}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Event
            </button>
            
            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add an Event</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* Event title */}
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        Title
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    {/* Event description */}
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        Description
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </div>
                    {/* Event image upload */}
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile02"
                      />
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupFile02"
                      >
                        Upload
                      </label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section Home">
        <div className="row">
          {/* Right side columns */}
          <div className="col-lg-12">
            {/* News & Updates Traffic */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li><a className="dropdown-item" href="#">Today</a></li>
                  <li><a className="dropdown-item" href="#">This Month</a></li>
                  <li><a className="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div className="card-body pb-0">
                <h5 className="card-title">Events &amp; Updates <span>| Today</span></h5>

                <div className="news">
                  {/* Event items */}
                  {
                    events.map((event) => {
                      return (
                        <div className="post-item clearfix">
                          <img src={image1} alt="" />
                          <h4><a href="#">{event.title}</a></h4>
                          <p>{event.description}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Event;
