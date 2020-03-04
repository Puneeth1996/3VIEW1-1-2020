import React, { Component } from 'react';
import Iframe from 'react-iframe'
import style from './index.module.css'

class FrameComp extends Component {
    render() {
        return (
            <Iframe url="http://thepuneeth1996p.tech/new_project/Creating%20the%20Mouse%20Control/"
                    id="frameViewID"
                    className={style.frameView}
                    display="initial"
                    position="relative"
            />

        );
    }
}

export default FrameComp;