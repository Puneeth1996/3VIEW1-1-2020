import React, { Component } from 'react'
import { Link, } from "react-router-dom";
import Style1 from './index.module.css'

import logo from '../../img/logo.png'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: true,
            isSmall: (window.innerWidth < 624),
            showSideNav: null, 
        };
    }
    checkWidthResize = () => {
        const isSmall = window.innerWidth < 624;
        if ( isSmall !== this.state.width) {
            this.setState({ isSmall })
        }
    }
    checkHeightResize = () => {
        const isScrolled = window.scrollY < 100;
        if (isScrolled !== this.state.isScrolled) {
            this.setState({ isScrolled })   
        }
    }
    UNSAFE_componentWillMount() {
        window.addEventListener('resize', this.checkWidthResize)
        window.addEventListener('scroll', this.checkHeightResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateUIHeader)
        window.removeEventListener('scroll', this.checkHeightResize)
    }
    handleClick = (event) => {
        let showSideNav = !this.state.showSideNav;
        this.setState({ showSideNav })
    }
    render() {
        let className = ['topnav', 'linkgroup', 'contactdiv', 'navmobile'];
        if(this.state.isScrolled) {
            className = ['topnavscrolled', 'linkgroupscrolled', 'contactdivscrolled', 'navmobilescrolled'];
        }
        return (
            <>
            {
            this.state.isSmall ?
                <div className={`${Style1.mobilenavigationview} ${Style1[className[3]]}`} >
                    <div className={Style1.itemmobile}>
                        <Link to="/">
                            <img src={logo} alt=""/>
                            <span className={Style1.captionmobile}> 3 View </span>
                        </Link>
                    </div>
                    <span className={Style1.iconbars}  onClick={(e) => this.handleClick(e)} ><i className="fa fa-bars"></i></span>
                    { 
                        this.state.showSideNav ? 
                            <ul className={Style1.linkgroupmobile}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/About">About Us</Link></li>
                                <li><Link to="/Listings">Listings</Link></li>
                                <li><Link to="/News">News</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                                <li>
                                    <div className={Style1.contactcardmobile}>
                                        <span className={Style1.contactnumber}>+0080 234 567 84441</span>
                                    </div>
                                </li>
                            </ul> :
                            null 
                    }
                </div> :
                <div className={Style1[className[0]]}>
                    <Link to="/">
                        <div className={Style1.item}>
                            <img src={logo} alt=""/>
                            <span className={Style1.caption}> 3 View </span>
                        </div>
                    </Link>
                    <div className={Style1[className[1]]}>
                        <Link to="/">Home</Link>
                        <Link to="/About">About Us</Link>
                        <Link to="/Listings">Listings</Link>
                        <Link to="/News">News</Link>
                        <Link to="/Contact">Contact</Link>
                        <div className={Style1[className[2]]}>
                            <span className={Style1.contactnumber}>+0080 234 567 84441</span>
                        </div>
                    </div>
                </div> 
            }
            </>
        )
    }
}