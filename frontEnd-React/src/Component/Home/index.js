import React, { Component } from 'react'
import HeroPlayer from './HeroPlayer'
import RecentListing from './RecentListing'
import WhatWeDo from './WhatWeDo'

export default class Home extends Component {
    render() {
        return (
            <>
                <HeroPlayer />
                <RecentListing />
                <WhatWeDo />
            </>
        )
    }
}
