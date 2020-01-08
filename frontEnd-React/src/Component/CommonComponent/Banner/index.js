import React, { Component } from 'react'
import style from './index.module.css'

export default class Banner extends Component {


    render() {


        // console.log();
        var browserLoc = window.location.href.split("/");
        // console.log(browserLoc[4]);


        var myArray = [1,2,3,4,5,6,7,8];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        // console.log(rand);

        if(browserLoc[3] == 'About'){
          // console.log('we are in about page ');
          var bg = require('./images/about.jpg');
        }

        else if (browserLoc[3] == 'Contact') {
          // console.log('we are in Contact page ');
          var bg = require('./images/contact.jpg');
        }


        else if(browserLoc[4] && browserLoc[4]){
          // console.log('Other pages we shall suffles with collection of background images');
          // shuffle the background image
          var bg = require('./images/' + rand + '.jpg');
        }

        else if (browserLoc[3] == 'Listings') {
          // console.log('we are in Listings page ');
          var bg = require('./images/listings.jpg');
        }
        else if (browserLoc[3] == 'News') {
          // console.log('we are in News page ');
          var bg = require('./images/news.jpg');
        }

        else {
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
