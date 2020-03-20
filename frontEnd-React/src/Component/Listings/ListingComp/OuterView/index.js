import React, { Component } from 'react';

class OuterView extends Component {

    render() {
        return (
            <p>OuterView{this.props.urlMapProp}</p>
        );
    }
}

export default OuterView;