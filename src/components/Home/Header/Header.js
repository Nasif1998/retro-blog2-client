import React from 'react';
import "./Header.css";
import tree from '../../../images/tree.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
              <span className="headerTitleSm">Mind & Self</span>
              <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src={tree} alt="" srcset="" />
        </div>
    );
};

export default Header;