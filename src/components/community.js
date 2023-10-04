import React from 'react';

function Community() {
  return (
    <main id="main" className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="pagetitle">
              <h1>Create Community</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="section Home">
        <div className="row">
          {/* Left side columns */}
          <div className="col-lg-8">
            <div className="row">
              {/* Reports */}
              <div className="col-12">
                <div className="card">
                  <div className="card-title mx-2">Create community</div>
                  <div className="card-body">
                    {/* Community name */}
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    {/* Community description */}
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary mx-2">
                        <a href="index.html" className="text-white">Cancel</a>
                      </button>
                      <button type="button" className="btn btn-primary">
                        <a href="index.html" className="text-white">Create</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side columns */}
          <div className="col-lg-4">
            {/* Recent Activity */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a className="dropdown-item" href="#">Today</a></li>
                  <li><a className="dropdown-item" href="#">This Month</a></li>
                  <li><a className="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div className="card-body">
                <div className="my-3">
                  <a href="announcement.html" className="card-title">Announcements <span>| Today</span></a>
                </div>

                <div className="activity">
                  {/* Activity items go here */}
                </div>

                <div className="m-3">
                  <a href="announcement.html"> <u>view all announcements</u> </a>
                </div>
              </div>
            </div>
            {/* End Recent Activity */}

            {/* News & Updates Traffic */}
            <div className="card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a className="dropdown-item" href="#">Today</a></li>
                  <li><a className="dropdown-item" href="#">This Month</a></li>
                  <li><a className="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <a href="events.html">
                <div className="card-body pb-0">
                  <h5 className="card-title">Events &amp; Updates <span>| Today</span></h5>

                  <div className="news">
                    {/* News items go here */}
                  </div>

                  <div className="m-3">
                    <a href="announcement.html"> <u>view all events</u> </a>
                  </div>
                </div>
              </a>
            </div>
            {/* End News & Updates */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Community;
