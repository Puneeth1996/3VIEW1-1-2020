import React, { Component } from 'react';
import Iframe from 'react-iframe'
import style from './index.module.css'

class FrameComp extends Component {
    render() {
        return (
            <Iframe 
                url={this.props.urlMapProp}
                id="frameViewID"
                className={style.frameView}
                display="initial"
                position="relative"
            />

        );
    }
}

export default FrameComp;