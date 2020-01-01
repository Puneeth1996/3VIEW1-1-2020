import React, { Component } from 'react'
import Banner from '../../CommonComponent/Banner'
import HorizontalCard from '../../CommonComponent/HorizontalCard'
import style from './index.module.css'
export default class ListingsPage extends Component {
    render() {
        return (
            <div>
                <Banner>
                    Listings
                </Banner>
                <div className={style.listingsContainer}>
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                    <HorizontalCard />
                </div>
            </div>
        )
    }
}



// 22/Dec/2019 

// Should start to work on the responsive of especially the Features - TagFeatures 