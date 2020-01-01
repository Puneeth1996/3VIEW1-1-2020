import React, { Component } from 'react'
import YouTube from 'react-youtube';
import style from './index.module.css'

export default class YoutubePlayer extends Component {

    videoOnReady(event) {
        const player = event.target
        player.mute();
        player.getIframe().setAttribute("style","width:98vw;height:100vh;");
        
        // e1.removeChild(e1)

        // var e1 = player.getIframe().getElementByXpath('//*[@id="player_uid_377616547_1"]/a');
        // e1.removeChild(e1);

        // var elem = player.getIframe().getElementsByClassName("ytp-chrome-top ytp-show-cards-title");
        // elem.parentNode.removeChild(elem);
        // player.setSize(window.innerWidth, window.innerHeight)
    }
    removeIcons(event){
        const player = event.target
        // var element1 = player.getIframe().getElementByXpath('//div[@id="player"]/div/a')
        // element1.removeChild(element1)
    }
    // resizeMethodPlayer(){
    //     player.setSize(window.innerWidth, window.innerHeight)
    // }
    // componentWillMount(){
    //     window.addEventListener('resize', this.resizeMethodPlayer)
    // }
    // componentWillUnmount(){
    //     window.removeEventListener('resize', this.resizeMethodPlayer)
    // }
    render() {
        const {videoId} = this.props
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                fs: 0,
                loop: 1,
                playlist: videoId,
                controls: 0,
                modestbranding: 1,
            }
        };
        return (
            <div className={style.youtubePlayerHomePage}>
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={this.videoOnReady}
                    onPlay={this.removeIcons}
                />
            </div>
        )
    }
}


// class="ytp-chrome-top ytp-show-cards-title"