import React, { Component } from 'react'
import Banner from '../../CommonComponent/Banner'
import ListingsSearchForm from './ListingsSearchForm'
import style from './index.module.css'

export default class ListingSearchPage extends Component {
    render() {
        return (
            <div>
                <Banner>
                    Listings
                </Banner>
                <ListingsSearchForm />
            </div>
        )
    }
}
