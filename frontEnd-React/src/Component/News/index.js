import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import newsPage from './newsPage.js'
import specificNews from './specificNews.js'


export default class News extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/News' component={newsPage} />
                <Route path='/News/:number' component={specificNews}/>
            </Switch>
        )
    }
}
