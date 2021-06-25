import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
              <span className="headerTitleSm">React & Node</span>
              <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="http://rachananandakumar.com/tree.jpg" alt="" srcset="" />
        </div>
    );
};

export default Header;