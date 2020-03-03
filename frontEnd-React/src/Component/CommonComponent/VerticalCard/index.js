import React, { Component } from 'react'
import TagFeature from '../TagFeature'

import style from './index.module.css'

import city_1 from '../../../img/listings/city_1.jpg'

export default class VerticalCard extends Component {
    render() {
        return (
            <div className={style.card}>
                <div className={style.cardImage}><img src={city_1} alt="" /></div>
                <div className={style.container}>
                    <h3><b>House in West California</b></h3> 
                    <p>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p> 
                    <TagFeature tag={['Hot Tub', 'Swimming Pool', 'Garden', 'Patio', 'Hard Wood Floor']} />
                </div>
            </div>
        )
    }
}
