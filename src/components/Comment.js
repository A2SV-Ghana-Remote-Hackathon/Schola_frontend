import React from 'react';
import Image from '../assets/img/smeagol.jpg'
import mini from "../assets/img/news-1.jpg"
import mainImage from '../assets/img/news-4.jpg';
import image1 from '../assets/img/news-1.jpg';

function Comment() {
  return (
    <main id="main" className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="pagetitle">
              <h1>Voodoo</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">Post</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add comment
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add a comment</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="inputGroup-sizing-default">Comment</span>
                      <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Post</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section Home">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row pt-4">
                        <div className="col-md-8 col-xl-10">
                          <h5 className="card-title">Voodoo <span>/Post</span></h5>
                        </div>
                      </div>
                      <img src={Image} alt="" className="w-100 pt-4" />
                      <div className="mt-3">
                        <a href="" className="mx-2 fw-bold"><i className="bi bi-hand-thumbs-up-fill"></i><span className="mx-2"> 58 Likes</span></a>
                        <a href="" className="mx-2 fw-bold"><i className="bi bi-share-fill"></i><span className="mx-2">36 Shares</span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
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
                      <div className="card-body pb-0">
                        <h5 className="card-title">Comments</h5>
                        <div className="news">
                          <div className="post-item clearfix">
                            <img src={mini} alt="" />
                            <h4>Nihil blanditiis at in nihil autem</h4>
                          </div>
                          <div className="post-item clearfix">
                            <img src={image1} alt="" />
                            <h4>Quidem autem et impedit</h4>
                          </div>
                          <div className="post-item clearfix">
                            <img src={mainImage} alt="" />
                            <h4 className="mt-4">Id quia et et ut maxime similique occaecati ut</h4>
                          </div>
                          <div className="post-item clearfix">
                            <img src="assets/img/news-4.jpg" alt="" />
                            <h4>Laborum corporis quo dara net para</h4>
                          </div>
                          <div className="post-item clearfix">
                            <img src="assets/img/news-5.jpg" alt="" />
                            <h4>Et dolores corrupti quae illo quod dolor</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
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
                    <a href="announcement.html" className="card-title ">Announcements <span>| Today</span></a>
                  </div>
                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                      <div className="activity-content">
                        Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                      <div className="activity-content">
                        Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>
                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                      </div>
                    </div>
                  </div>
                  <div className="m-3">
                    <a href="announcement.html" className=""> <u>view all announcements</u> </a>
                  </div>
                </div>
              </div>
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
                      <div className="post-item clearfix">
                        <img src={mini} alt="" />
                        <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                        <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                      </div>
                      <div className="post-item clearfix">
                        <img src={image1} alt="" />
                        <h4><a href="#">Quidem autem et impedit</a></h4>
                        <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                      </div>
                      <div className="post-item clearfix">
                        <img src={mainImage} alt="" />
                        <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                        <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                      </div>
                      <div className="post-item clearfix">
                        <img src={image1} alt="" />
                        <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                        <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                      </div>
                      <div className="post-item clearfix">
                        <img src={mainImage} alt="" />
                        <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                        <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                      </div>
                    </div>
                    <div className="m-3">
                      <a href="announcement.html" className=""> <u>view all events</u> </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Comment;
