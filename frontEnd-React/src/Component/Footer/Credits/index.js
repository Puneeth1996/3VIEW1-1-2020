import React, { Component } from 'react'
import style from './index.module.css'

export default class Credits extends Component {
    render() {
        return (
            <div className={style.lastfooter}>
                <span>Copyright 3View &copy;2019 All rights reserved | Made with <i className="fa fa-heart" aria-hidden="true"></i> by <a className={style.smallfootera} href="https://3ViewProperties.com">3View</a></span>
            </div>
        )
    }
}
