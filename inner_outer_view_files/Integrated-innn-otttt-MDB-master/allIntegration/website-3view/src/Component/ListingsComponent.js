import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Listings from './Listings'
import SpecificListing from './SpecificListing'
import ListingsAPI from '../API/ListingsAPI'
import Putter from './Putter'
import NotFound from './NotFound.js'

const ListingsComponent = () => (
    <Switch>
        <Route exact path='/Listings' component={Listings} />
        <Route path='/Listings/:number' component={SpecificListing}/>
    </Switch>
)
export default ListingsComponent;