import React, { Component } from 'react'

import style from './index.module.css'

export default class TextAnimation extends Component {
    
    render() {


        var i = 0;
        var txt = 'Lorem ipsum dummy text blabla.';
        var speed = 50;


        return (
            <div className={style.TextAnimation}>
                {/* https://codepen.io/puneeth1996p/pen/povprGm */}
                {/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter */}
                <span
                    class="txt-rotate"
                    data-period="2000"
                    data-rotate='["Home that needs to visualised ", 
                    "Home that are to be built", 
                    "Home to be redesigned." ]'>
                </span>
            </div>
        )
    }
}



