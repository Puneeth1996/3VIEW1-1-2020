import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import SpecificListing from './SpecificListing'

import ListingSearchPage from './ListingSearchPage'

export default class Listings extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/Listings' component={ListingSearchPage}/>
                <Route path='/Listings/:number' component={SpecificListing}/>
            </Switch>
        )
    }
}

