import React, { Component } from 'react'
import style from './index.module.css'

export default class Banner extends Component {
    render() {
        return (
            <div className={style.bannercontainer}>
                <p className={style.bannertitle}>{this.props.children}</p>
            </div>
        )
    }
}


