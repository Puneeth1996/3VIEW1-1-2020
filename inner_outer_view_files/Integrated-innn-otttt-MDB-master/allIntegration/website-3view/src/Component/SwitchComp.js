import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import ListingsComponent from './ListingsComponent'
import News from './News'
import Contact from './Contact'
import NotFound from './NotFound.js';
import Putter from './Putter'


const SwitchComp = () => (
  <main>
    <Switch>
      <Route exact strict path='/' component={Home}/>
      <Route path='/About' component={About}/>
      <Route path='/Listings' component={ListingsComponent}/>
      <Route path='/News' component={News}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Putter' component={Putter}/>
	  <Route path='*' component={NotFound} />
    </Switch>
  </main>
)

export default SwitchComp
