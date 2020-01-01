import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Listings from '../Listings'
import News from '../News'
import Contact from '../Contact'
import NotFound from '../NotFound'

export default class SwitchComp extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact strict path='/' component={Home}/>
                    <Route path='/About' component={About}/>
                    <Route path='/Listings' component={Listings}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Contact' component={Contact}/>
                    <Route path='*' component={NotFound} />
                </Switch>
            </main>
        )
    }
}
