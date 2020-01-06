import React, { Component } from 'react'
import style from './index.module.css'

export default class Banner extends Component {




    // if (this.props.match.params.number){
    //   // bannercontainer background = url 1
    // }
    // else if (props.martch.params == "Listings"){
    //   // bannercontainer background = url 1
    // }
    // else if (props.martch.params == "News") {
    //   // bannercontainer background = url 1
    // }
    // else if (props.martch.params == "Contact"){
    //   // bannercontainer background = url 1
    // }
    //
    // else {
    //   // shuffle some background image
    // }


    render() {

        console.log(window.location.href.split("/"));
        if(window.location.href.split("/").includes("About")){
          console.log('we are in about page ');
        }
        else if (window.location.href.split("/").includes("Listings")) {
          console.log('we are in Listings page ');
        }
        else if (window.location.href.split("/").includes("News")) {
          console.log('we are in News page ');
        }
        else if (window.location.href.split("/").includes("Contact")) {
          console.log('we are in Contact page ');
        }
        else {
          // shuffle the background image
        }




        return (
            <div className={style.bannercontainer}>
                <p className={style.bannertitle}>{this.props.children}</p>
            </div>
        )
    }
}
