import React, { Component } from 'react'
import { loadMyScript, removeScript } from './loadMyScript';

import style from './index.module.css'

export default class TextAnimation extends Component {
    componentWillMount(){
        console.log('loadMyScirpt    : ')
        console.log(loadMyScript())
        loadMyScript()
    }
    // componentWillUnmount() {
    //     console.log('removeScript    : '+removeScript())
    //     removeScript()
    // }

    render() {
        return (
            <div className={style.TextAnimation}>                
                <h1>3View: visualise 
                    <span
                        class="txt-rotate"
                        data-period="2000"
                        data-rotate='[" Home that needs to visualised", 
                        " Home that are to be built", 
                        " Home to be redesigned." ]'>
                    </span>
                </h1>
            </div>
        )
    }
}



