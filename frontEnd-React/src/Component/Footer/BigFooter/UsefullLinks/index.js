import React, { Component } from 'react'
import style from './index.module.css'

export default class UsefullLinks extends Component {
    render() {
        return (
            <div className={`${style.usefulllinks}`}>
                <div className={style.footercoltitle}>Usefull Links</div>
                <ul className={style.footerusefullinks}>
                    <li className={style.usefullinksitem}><a href="#">Listings</a></li>
                    <li className={style.usefullinksitem}><a href="#">Favorite Cities</a></li>
                    <li className={style.usefullinksitem}><a href="#">Clients Testimonials</a></li>
                    <li className={style.usefullinksitem}><a href="#">Featured Listings</a></li>
                    <li className={style.usefullinksitem}><a href="#">Properties on Offer</a></li>
                    <li className={style.usefullinksitem}><a href="#">Services</a></li>
                    <li className={style.usefullinksitem}><a href="#">News</a></li>
                    <li className={style.usefullinksitem}><a href="#">Our Agents</a></li>
                </ul>
            </div>
        )
    }
}
