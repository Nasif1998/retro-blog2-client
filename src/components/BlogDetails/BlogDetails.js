import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './BlogDetails.css';

const BlogDetails = () => {
    let { _id } = useParams();
    const [oneBlog, setOneBlog] = useState({});

    useEffect(() => {
        fetch(`https://gentle-island-52298.herokuapp.com/blogs/${_id}`)
            .then(res => res.json())
            .then(data => setOneBlog(data))
    }, [_id])

    const { title, content, imageURL } = oneBlog;
    return (
        // <div style={{ backgroundColor: '#ccd6db' }}>
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img style={{ width: '500px', height: '300px', marginTop: '10%', marginLeft: '35%' }} src={imageURL} alt="" />
                <h3 style={{ textAlign: 'center' }}>{title}</h3>
                <p>{content}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tenetur dolores earum sint aperiam quisquam corrupti quidem corporis, ex eum? Non ipsum voluptatem expedita eius iste, nostrum aut ratione porro.</p>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
};

export default BlogDetails;