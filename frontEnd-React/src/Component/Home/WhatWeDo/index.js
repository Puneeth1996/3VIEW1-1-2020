import React, { Component } from 'react'
import HeaderTitle from '../../CommonComponent/HeaderTitle'
import TextAnimation from './TextAnimation'
import style from './index.module.css'

export default class WhatWeDo extends Component {
    render() {
        return (
            <div className={style.whatWeDo}>
                <HeaderTitle
                    title='What We Do'
                    subTitle='Possible. Visualize'
                />

                <TextAnimation />
            </div>
        )
    }
}

