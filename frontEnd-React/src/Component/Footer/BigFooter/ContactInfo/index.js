import React, { Component } from 'react'
import style from './index.module.css'

import placeholder from '../../../../img/footer/placeholder.svg'
import phoneCall from '../../../../img/footer/phone-call.svg'
import message from '../../../../img/footer/message.svg'
import planetEarth from '../../../../img/footer/planet-earth.svg'


export default class ContactInfo extends Component {
    render() {
        return (
            <div className={`${style.contactinfo}`}>
                <div className={style.footercoltitle}>contact info</div>
                <ul className={style.contactinfolist}>
                    <li className={style.contactinfoitem}>
                        <div><div className={style.contactinfoicon}><img src={placeholder} alt="" /></div></div>
                        <div className={style.contactinfotext}>4127 Raoul Wallenber 45b-c Gibraltar</div>
                    </li>
                    <li className={style.contactinfoitem}>
                        <div><div className={style.contactinfoicon}><img src={phoneCall} alt="" /></div></div>
                        <div className={style.contactinfotext}>2556-808-8613</div>
                    </li>
                    <li className={style.contactinfoitem}>
                        <div><div className={style.contactinfoicon}><img src={message} alt="" /></div></div>
                        <div className={style.contactinfotext}><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
                    </li>
                    <li className={style.contactinfoitem}>
                        <div><div className={style.contactinfoicon}><img src={planetEarth} alt="" /></div></div>
                        <div className={style.contactinfotext}><a href="https://colorlib.com">www.colorlib.com</a></div>
                    </li>
                </ul>
            </div>
        )
    }
}
