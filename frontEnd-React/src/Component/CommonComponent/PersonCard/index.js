import React, { Component } from 'react'
import style from './index.module.css'

import team2 from '../../../img/about/team2.jpg'

export default class PersonCard extends Component {
    render() {
        return (
        <div className={style.PersonCardRow}>



            <div className={style.PersonCard}>
                <div className={style.card}>
                    <img src={team2} alt="John" className={style.personImg} />
                    <h1>John Doe</h1>
                    <p className={style.title}>CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div className={style.contactLink}>
                        <a className={style.linkTag} href="/#"><i className="fa fa-dribbble"></i></a> 
                        <a className={style.linkTag} href="/#"><i className="fa fa-twitter"></i></a>  
                        <a className={style.linkTag} href="/#"><i className="fa fa-linkedin"></i></a>  
                        <a className={style.linkTag} href="/#"><i className="fa fa-facebook"></i></a> 
                    </div>
                </div>
            </div>




            <div className={style.PersonCard}>
                <div className={style.card}>
                    <img src={team2} alt="John" className={style.personImg} />
                    <h1>John Doe</h1>
                    <p className={style.title}>CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div className={style.contactLink}>
                        <a className={style.linkTag} href="/#"><i className="fa fa-dribbble"></i></a> 
                        <a className={style.linkTag} href="/#"><i className="fa fa-twitter"></i></a>  
                        <a className={style.linkTag} href="/#"><i className="fa fa-linkedin"></i></a>  
                        <a className={style.linkTag} href="/#"><i className="fa fa-facebook"></i></a> 
                    </div>
                </div>
            </div>




            <div className={style.PersonCard}>
                <div className={style.card}>
                    <img src={team2} alt="John" className={style.personImg} />
                    <h1>John Doe</h1>
                    <p className={style.title}>CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div className={style.contactLink}>
                        <a className={style.linkTag} href="/#"><i className="fa fa-dribbble"></i></a> 
                        <a className={style.linkTag} href="/#"><i className="fa fa-twitter"></i></a>  
                        <a className={style.linkTag} href="/#"><i className="fa fa-linkedin"></i></a>  
                        <a className={style.linkTag} href="/#"><i className="fa fa-facebook"></i></a> 
                    </div>
                </div>
            </div>




        </div> 
        )
    }
}
