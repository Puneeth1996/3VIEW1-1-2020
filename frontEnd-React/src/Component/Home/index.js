import React, { Component } from 'react'
import HeroPlayer from './HeroPlayer'
import RecentListing from './RecentListing'

export default class Home extends Component {
    render() {
        return (
            <>  
                <HeroPlayer />
                <RecentListing />
            </>
        )
    }
}

