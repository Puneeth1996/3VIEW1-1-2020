import React, { Component } from 'react'
import style from './index.module.css'

export default class Banner extends Component {


    render() {


        console.log(window.location.href.split("/"));

        if(window.location.href.split("/").includes("About")){
          console.log('we are in about page ');
          var bg = require('./images/about.jpg');
        }
        else if (window.location.href.split("/").includes("Listings")) {
          console.log('we are in Listings page ');
          var bg = require('./images/listings.jpg');
        }
        else if (window.location.href.split("/").includes("News")) {
          console.log('we are in News page ');
          var bg = require('./images/news.jpg');
        }
        else if (window.location.href.split("/").includes("Contact")) {
          console.log('we are in Contact page ');
          var bg = require('./images/contact.jpg');
        }
        else {
          console.log('Other pages we shall suffles with collection of background images');
          // shuffle the background image
          var myArray = [1,2,3,4];
          var rand = myArray[Math.floor(Math.random() * myArray.length)];
          console.log(rand);
          var bg = require('./images/' + rand + '.jpg');
        }

        const bannerDiv = {backgroundImage: "url("+bg+")",};




        return (
            <div className={style.bannercontainer} style={bannerDiv}>
                <p className={style.bannertitle}>{this.props.children}</p>
            </div>
        )
    }
}
