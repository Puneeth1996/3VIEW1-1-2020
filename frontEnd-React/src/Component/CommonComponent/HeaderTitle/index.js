import React, { Component } from 'react'
import style from './index.module.css'

export default class HeaderTitle extends Component {
    render() {
        return (
            <div className={style.section_title}>
                <h3>{this.props.title}</h3>
                <span className={style.section_subtitle}>{this.props.subTitle}</span>
            </div>
        )
    }
}
