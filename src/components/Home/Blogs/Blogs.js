import React, { useEffect, useState } from 'react';
// import Blog from '../Blog/Blog';
import './Blogs.css';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://gentle-island-52298.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="posts">
            <section className="testimonials my-5 py-5">
                <div className="container">
                    <div className="section-header">
                        <h5 style={{ textAlign: 'center' }} className="text-primary text-uppercase">Blogs</h5>
                        <h1 style={{ textAlign: 'center' }}>What My Mind <br /> Says </h1>
                    </div>
                    <div className="card-deck mt-5">
                        <Container>
                            <Row>
                                {
                                    blogs.map(blog => (
                                        <Col xs={12} md={4}>
                                            <Blog blog={blog}></Blog>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;