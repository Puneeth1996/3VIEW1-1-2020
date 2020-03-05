import React from 'react'
import { Link } from 'react-router-dom'


const HeaderComp = () => (
<header className="header trans_300">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="header_container d-flex flex-row align-items-center trans_300">
                    <div className="logo_container">
                        <a href="#">
                            <div className="logo">
                                <img src={require("../images/logo.png")} alt=""/>
                                <span>3 View</span>
                            </div>
                        </a>
                    </div>                    
                    <nav className="main_nav">
                        <ul className="main_nav_list">
                            <li className="main_nav_item"><Link to='/'>home</Link></li>
                            <li className="main_nav_item"><Link to='/About'>about us</Link></li>
                            <li className="main_nav_item"><Link to='/Listings'>listings</Link></li>
                            <li className="main_nav_item"><Link to='/News'>news</Link></li>
                            <li className="main_nav_item"><Link to='/Contact'>contact</Link></li>
                        </ul>
                    </nav>                    
                    <div className="phone_home text-center">
                        <span>+0080 234 567 84441</span>
                    </div>                    
                    <div className="hamburger_container menu_mm">
                        <div className="hamburger menu_mm">
                            <i className="fas fa-bars trans_200 menu_mm"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="menu menu_mm">
        <ul className="menu_list">
            <li className="menu_item">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to='/'>home</Link>
                        </div>
                    </div>
                </div>
            </li>
            <li className="menu_item">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to='/About'>about us</Link>
                        </div>
                    </div>
                </div>
            </li>
            <li className="menu_item">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to='/Listings'>listings</Link>
                        </div>
                    </div>
                </div>
            </li>
            <li className="menu_item">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to='/News'>news</Link>
                        </div>
                    </div>
                </div>
            </li>
            <li className="menu_item">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Link to='/Contact'>contact</Link>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</header>
)

export default HeaderComp;

