import React from 'react';
import pic from "../assets/img/profile-img.jpg";

const Prof = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Profile</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active">Profile</li>
          </ol>
        </nav>
      </div>
      {/* End Page Title */}

      <section className="section profile">
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img src={pic} alt="Profile" className="rounded-circle" />
                <h2>Kevin Anderson</h2>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="card">
              <div className="card-body pt-3">
                {/* Bordered Tabs */}
                <ul className="nav nav-tabs nav-tabs-bordered">
                  <li className="nav-item">
                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</p>

                      <h5 className="card-title">Profile Details</h5>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Full Name</div>
                        <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Company</div>
                        <div className="col-lg-9 col-md-8">Lueilwitz, Wisoky and Leuschke</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Job</div>
                        <div className="col-lg-9 col-md-8">Web Designer</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Country</div>
                        <div className="col-lg-9 col-md-8">USA</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Address</div>
                        <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Phone</div>
                        <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
                      </div>
                    </div>
                    <div className="tab-pane fade profile-edit pt-3" id="profile-edit"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Prof;
