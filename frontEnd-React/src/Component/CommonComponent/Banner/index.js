import React, { Component } from 'react'
import style from './index.module.css'

export default class Banner extends Component {
    if (props.martch.params == "About"){
      // bannercontainer background = url 1
    }
    else if (props.martch.params == "Listings"){
      // bannercontainer background = url 1
    }
    else if (props.martch.params == "News") {
      // bannercontainer background = url 1
    }
    else if (props.martch.params == "Contact"){
      // bannercontainer background = url 1
    }

    else {
      // shuffle some background image
    }


    render() {
        return (
            <div className={style.bannercontainer}>
                <p className={style.bannertitle}>{this.props.children}</p>
            </div>
        )
    }
}
