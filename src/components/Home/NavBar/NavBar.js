import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // <div>
        //     <nav className="navbar navbar-expand-lg navbar-light">

        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav ms-auto">
        //                 <li className="nav-item active">
        //                     <Link className="nav-link ms-5" to="/">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link ms-5" to="/dashboard">Dashboard</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link ms-5 " to="/dashboard">Admin</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link ms-5 " to="#">Blogs</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link ms-5 " to="#">Contact Us</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link ms-5 ps-5" to="/login">Login</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>


        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="topList navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="topListItem nav-item active">
                                <Link className="link nav-link" to="/">
                                    HOME
                       </Link>
                            </li>
                            <li className="topListItem">
                                <a href="#about">ABOUT</a>
                            </li>
                            <li className="topListItem nav-item">
                                <a href="#blogs">BLOGS</a>
                            </li>
                            <li className="topListItem nav-item"><a href="#contact">CONTACT</a></li>
                            <li className="topListItem nav-item">
                                <Link className="link" to="/dashboard">
                                    DashBoard
                        </Link>
                            </li>
                            <li className="topListItem nav-item">LOGOUT</li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="topRight">

                <Link className="link" to="/settings">
                    <img
                        className="topImg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWBIFpsX5elEsG5JryJNJaCQah0jrnBbJWg&usqp=CAU"
                        alt=""
                    />
                </Link>
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">
                            LOGIN
              </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/login">
                            REGISTER
              </Link>
                    </li>
                </ul>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default Navbar;