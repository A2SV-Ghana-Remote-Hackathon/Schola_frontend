import React ,{ useEffect, useState }from 'react';
import axios from "axios";
import mainImage from '../assets/img/news-4.jpg';
import image1 from '../assets/img/news-1.jpg';
import { Link } from 'react-router-dom';
import axiosWithTokenHook from "../api/useAxios.js";


const axiosWithToken = axiosWithTokenHook();

//  <img src="assets/img/smeagol.jpg" alt="" class="w-100 pt-4">
{/* <img src="assets/img/news-1.jpg" alt="" /> */ }

function Main() {
    const [posts, setPosts] = useState([])
    const [postData, setPostData] = useState({});

    useEffect(() => {
        axios.get("https://a2svschola.onrender.com/posts/")
        .then((response) => {
          setPosts(response.data);
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }, [])

    const handleAddPost = () => {
        const formData = new FormData();

        for (let key in postData) {
        formData.append(key, postData[key]);
        }
        axiosWithToken.post("https://a2svschola.onrender.com/posts/", formData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <main id="main" className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="pagetitle">
                            <h1>Home</h1>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active"><a href="createcomm.html">Create community</a></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add Post
                        </button>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Add Post</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {/* POST description */}
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                                            <input 
                                            onChange={(event) => {
                                                setPostData({...postData, content: event.target.value});
                                            }}
                                            type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                        </div>
                                        {/* Post community */}
                                        <div className="input-group mb-3">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Community</span>
                                            <input type="text" className="form-control" aria-label="Text input with 2 dropdown buttons" />
                                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                        {/* img */}
                                        <div className="input-group mb-3">
                                            <input
                                            onChange={(event) => {
                                                setPostData({...postData, post_image: "string"});
                                            }}
                                            type="file" className="form-control" id="inputGroupFile02" />
                                            <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button 
                                        onClick={() => {
                                            handleAddPost();
                                        }}
                                        type="button" data-bs-dismiss="modal" className="btn btn-primary">Post</button>
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
                                    <a href="post.html">
                                        <div className="card">
                                            <div className="card-title">
                                                <div className="container">
                                                    <div className="row pt-0">
                                                        <div className="col fw-bold mx-3 my-0"><h5>Voodoo </h5></div>
                                                        {/* <div className="col text-end mx-3 fw-bolder"><h6>Joined</h6></div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                posts.map((post) => {
                                                    return (
                                                        <div className="card-body">
                                                            <img src={post.post_image} alt="Image not found" className="w-100 pt-0 pb-6" />
                                                            <div className="col  mx-3 my-59">
                                                                {post.content}
                                                            </div>
                                                            <div className="mt-3">
                                                                <a href="" className="mx-2 fw-bold"><i className="bi bi-hand-thumbs-up-fill"></i><span className="mx-2">Like</span></a>
                                                                <Link to ='/comments' className="mx-2 fw-bold"><i className="bi bi-chat-left-dots-fill"></i><span className="mx-2">Comments</span></Link>
                                                                <a href="" className="mx-2 fw-bold"><i className="bi bi-share-fill"></i><span className="mx-2">Share</span></a>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </a>
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
                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                            <div className="activity-content">
                                                Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                                            </div>
                                        </div>
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">56 min</div>
                                            <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                            <div className="activity-content">
                                                Voluptatem blanditiis blanditiis eveniet
                                            </div>
                                        </div>
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">2 hrs</div>
                                            <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                            <div className="activity-content">
                                                Voluptates corrupti molestias voluptatem
                                            </div>
                                        </div>
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">1 day</div>
                                            <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                            <div className="activity-content">
                                                Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                                            </div>
                                        </div>
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">2 days</div>
                                            <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                            <div className="activity-content">
                                                Est sit eum reiciendis exercitationem
                                            </div>
                                        </div>
                                        <div className="activity-item d-flex">
                                            <div className="activite-label">4 weeks</div>
                                            <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                                            <div className="activity-content">
                                                Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-3">
                                        <Link to = '/announcements' className=""> <u>view all announcements</u> </Link>
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
                                                <img src={image1} alt="" />
                                                <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                                                <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                                            </div>
                                            <div className="post-item clearfix">
                                                <img src={image1} alt="" />
                                                <h4><a href="#">Quidem autem et impedit</a></h4>
                                                <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                                            </div>
                                            <div className="post-item clearfix">
                                                <img src={image1} alt="" />
                                                <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                                                <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                                            </div>
                                            <div className="post-item clearfix">
                                                <img src={image1} alt="" />
                                                <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                                                <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                                            </div>
                                            <div className="post-item clearfix">
                                                <img src={image1} alt="" />
                                                <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                                                <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                                            </div>
                                        </div>
                                        <div className="m-3">
                                            <Link to='/events' className=""> <u>view all events</u> </Link>
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

export default Main;
