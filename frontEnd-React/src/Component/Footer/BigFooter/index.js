import React, { Component } from 'react'



import ContactForm from './ContactForm'
import ContactInfo from  './ContactInfo'
import UsefullLinks from  './UsefullLinks'
import LogoAboutUs from  './LogoAboutUs'

import style from './index.module.css'

export default class BigFooter extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.column} > <LogoAboutUs /> </div>
                    <div className={style.column} > <UsefullLinks /> </div>
                    <div className={style.column} > <ContactForm /> </div>
                    <div className={style.column} > <ContactInfo /> </div>
                </div>
            </div>
        )
    }
}