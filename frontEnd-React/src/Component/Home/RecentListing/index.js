import React, { Component } from 'react'
import HeaderTitle from '../../CommonComponent/HeaderTitle'
import VerticalCard from '../../CommonComponent/VerticalCard' 
import style from './index.module.css'

export default class RecentListing extends Component {
    render() {
        return (
        <div className={style.recentListing}>
            <HeaderTitle
                title='Recent Listings'
                subTitle='Our Recent And Top Featured Listing '
            />
            <div className={style.cardRow}>
                <VerticalCard />
                <VerticalCard />
                <VerticalCard />
            </div>
        </div>
        )
    }
}