import React, { useEffect, useState } from 'react';
import ManageList from '../ManageList/ManageList';
import SideBar from '../SideBar/SideBar';

const ManageBlogs = () => {
    const [manages, setManages] = useState([]);
    useEffect(() => {
        fetch('https://gentle-island-52298.herokuapp.com/manageBlogs')
            .then(res => res.json())
            .then(data => setManages(data))
    }, [])
    return (
        <section className="container-fluid row">
            <SideBar></SideBar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h2>Blogs: {manages.length}</h2>
                <ManageList manage={manages}></ManageList>

            </div>
        </section>
    );
};

export default ManageBlogs;