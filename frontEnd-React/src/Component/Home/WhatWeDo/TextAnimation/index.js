import React, { Component } from 'react'
import ReactRotatingText from 'react-rotating-text'

import style from './index.module.css'

export default class TextAnimation extends Component {
    
    render() {
        return (
            <div className={style.textAnimationStyle}>
                <ReactRotatingText
                items={[" Home that needs to visualised", 
                " Home that are to be built", 
                " Home to be redesigned." ]}
                typingInterval={100}
                />
            </div>
            
        )
    }    
    

}