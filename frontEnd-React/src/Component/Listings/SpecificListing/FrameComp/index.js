import React, { Component } from 'react';
import Iframe from 'react-iframe'

class FrameComp extends Component {
    render() {
        return (
            <Iframe url="http://www.youtube.com/embed/2xmmxur_3KQ"
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
            />

        );
    }
}

export default FrameComp;