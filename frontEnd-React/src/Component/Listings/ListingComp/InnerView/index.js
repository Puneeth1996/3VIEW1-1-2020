import React, { Component } from 'react';
import Frame from '../FrameComp'

class InnerView extends Component {

    render() {
        return (
            <Frame urlMapProp={this.props.urlMapProp}/>
        );
    }
}

export default InnerView;