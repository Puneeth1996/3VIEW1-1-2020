import React, { Component } from 'react'
import YoutubePlayer from '../../CommonComponent/YoutubePlayer'
import style from  './index.module.css'

// the above css is responsive and sufficient

export default class HerePlayer extends Component {
    render() {
        return (
            <div>
                <YoutubePlayer videoId="koPmuEyP3a0"/>
            </div>
        )
    }
}

// Establishing a Youtube Vedeo Player Component
// https://www.youtube.com/watch?v=_nBlN9yp9R8