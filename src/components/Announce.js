// AnnouncementsPage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import axiosWithTokenHook from "../api/useAxios.js";
const axiosWithToken = axiosWithTokenHook();

function getTimeAgo(announcementDate) {
  const currentDate = new Date();
  const announcementDateObj = new Date(announcementDate);
  const timeDifferenceInSeconds = Math.floor((currentDate - announcementDateObj) / 1000);

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds} seconds ago`;
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else if (timeDifferenceInSeconds < 86400) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
}

const Announce = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [data, setData] = useState({});

  const handleAddAnnouncement = () => {
    axiosWithToken.post("https://a2svschola.onrender.com/announcements/", data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    })
  }

  useEffect(() => {
    axios.get("https://a2svschola.onrender.com/announcements/")
    .then((response) => {
      setAnnouncements(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <main id="main" className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="pagetitle">
              <h1>Announcements</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
              Add Announcement
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
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add an announcement
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {/* POST description */}
                    <div className="input-group mb-3">
                      <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                      >
                        Announcement
                      </span>
                      <input
                        onChange={(event) => {
                          setData({...data, content: event.target.value});
                        }}
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                      />
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
                    <button 
                    onClick={() => {
                      handleAddAnnouncement();
                    }}
                    type="button" className="btn btn-primary">
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
            {/* Recent Activity */}
            <div className="card">
              <div className="filter">
                <a
                  className="icon"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  Announcements <span>| Today</span>
                </h5>

                <div className="activity">
                  {announcements.map((announcement, index) => {
                    return (
                      <div className="activity-item d-flex" key={index}>
                        <div className="activite-label">{getTimeAgo(announcement.created_at)}</div>
                        <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                        <div className="activity-content">
                          {announcement.content}
                        </div>
                      </div>
                    )
                  }
                  )}
                </div>
              </div>
            </div>
            {/* End Recent Activity */}
          </div>
          {/* End Right side columns */}
        </div>
      </section>
    </main>
  );
};

export default Announce;
