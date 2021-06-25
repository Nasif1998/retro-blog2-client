import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Navbar from '../NavBar/NavBar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <AboutMe></AboutMe>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;