import React, { Component } from 'react'
import Banner from '../CommonComponent/Banner'
import IntroComp from './IntroComp'
import BoardMemb from './BoardMemb'
export default class About extends Component {
    render() {
        return (
            <div>
                <Banner>
                    About
                </Banner>
                <IntroComp />
                <BoardMemb />
            </div>
        )
    }
}
