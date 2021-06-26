import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { title, imageURL, _id } = props.blog || {};
    return (
        <section id="blogs">
            <div className="card shadow-sm">
                <div> <Link to={`/blogs/${_id}`}>
                    <img style={{ verticalAlign: 'middle', paddingLeft: '50px', marginTop: '20px' }} className="mx-3" src={imageURL} alt="" width="350px" height="200px" />
                    <br />
                    <br />
                    <div style={{ display: 'flex', paddingLeft: '160px' }}>
                        <h6 className="text-primary">{title}</h6>
                        {/* <p className="m-0">{from}</p> */}
                    </div>
                </Link>
                </div>
            </div>
        </section>
    );
};

export default Blog;