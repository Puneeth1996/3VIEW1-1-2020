import React, { Component } from 'react'
import style from './index.module.css'

import logo from '../../../../img/logo.png'

export default class LogoAboutUs extends Component {
    render() {
        return (
            <div className={`${style.logaboutus}`}>
                <div className={style.imgwithtext}>
                    <a href="#">
                        <div className={style.footericonaboutus}>
                            <img src={logo} alt="" />
                            <p className={style.caption}> 3 View </p>
                        </div>
                    </a>
                    <ul className={style.footersociallist}>
                        <li className={style.footersocialitem}><a href="#"><i className="fa fa-pinterest"></i></a></li>
                        <li className={style.footersocialitem}><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                        <li className={style.footersocialitem}><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className={style.footersocialitem}><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li className={style.footersocialitem}><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                    <p className={style.footerminiaboutUs}>Lorem ipsum dolor sit amet, cons ectetur  quis ferme adipiscing elit. Suspen dis se tellus eros, placerat quis ferme ntum et, viverra sit amet lacus. Nam gravida  quis ferme semper augue.</p>
                </div>
            </div>
        )
    }
}
