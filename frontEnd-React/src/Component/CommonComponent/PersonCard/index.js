import React, { Component } from 'react'
import style from './index.module.css'

export default class PersonCard extends Component {
    render() {
        return (
            <div className={style.PersonCard}>
                <div className={style.card}>
                    <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" className={style.personImg} />
                    <h1>John Doe</h1>
                    <p className={style.title}>CEO & Founder, Example</p>
                    <p>Harvard University</p>
                    <div className={style.contactLink}>
                        <a className={style.linkTag} href="#"><i className="fa fa-dribbble"></i></a> 
                        <a className={style.linkTag} href="#"><i className="fa fa-twitter"></i></a>  
                        <a className={style.linkTag} href="#"><i className="fa fa-linkedin"></i></a>  
                        <a className={style.linkTag} href="#"><i className="fa fa-facebook"></i></a> 
                    </div>
                    <p><button className={style.contactBtn} >Contact</button></p>
                </div>
            </div>
        )
    }
}
