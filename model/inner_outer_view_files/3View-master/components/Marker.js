import React from 'react';
import {
    View,
    asset,
    VrButton,
} from 'react-360';

export default class Marker extends React.Component {
    constructor() {
        super();
        this.state = {
            xCurPos : 10,
            zCurPos : -10,
            xTarPos : 5,
            zTarPos : 0,
        };
        this.Lerp = this.Lerp.bind(this);
    }
    
    componentDidMount(){
        this.Lerp();
        console.log("we have the lerp function");
    }
    
    Lerp() {
        if(Math.abs (this.state.xCurPos - this.state.xTarPos) > 0.3)
        {
            //  to match the X coordinates
            this.setState({
            xCurPos : this.state.xCurPos * (1 - 0.05) + this.state.xTarPos * 0.05
            });

            postMessage({type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos});

        }
        else if(Math.abs (this.state.zCurPos - this.state.zTarPos) > 0.3)
        {
            //  to match the Z coordinates
            this.setState({
                zCurPos : this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05
            });
            postMessage({type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos});
        }
        requestAnimationFrame(this.Lerp);
    }    
    
    render() {
        return (
            <View>
                <VrButton
                    style={{
                        transform: [
                            {translate: [-30,-180,90]},
                            {rotateX: 90},
                            {rotateY: 0},
                            {rotateZ: 0},
                            ],
                        width: 30,
                        height: 30,
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                    onClick={() => {
                        this.state.xTarPos = 30;
                        this.state.zTarPos = 90;
                    }}
                >
                </VrButton>
                <VrButton
                    style={{
                        transform: [
                            {translate: [10,-200,110]},
                            {rotateX: 90},
                            {rotateY: 0},
                            {rotateZ: 0},
                            ],
                        width: 30,
                        height: 30,
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                    onClick={() => {
                        this.state.xTarPos = 10;
                        this.state.zTarPos = 110;
                    }}
                >
                </VrButton>
                <VrButton
                    style={{
                        transform: [
                            {translate: [-5,-200,35]},
                            {rotateX: 90},
                            {rotateY: 0},
                            {rotateZ: 0},
                            ],
                        width: 55,
                        height: 30,
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                    onClick={() => {
                        this.state.xTarPos = 1;
                        this.state.zTarPos = 25;
                    }}
                >
                <VrButton
                    style={{
                        transform: [
                            {translate: [-100,-200,30]},
                            {rotateX: 90},
                            {rotateY: 0},
                            {rotateZ: 0},
                            ],
                        width: 45,
                        height: 30,
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    }}
                    onClick={() => {
                        this.state.xTarPos = 0;
                        this.state.zTarPos = 0;
                    }}
                ></VrButton>
                </VrButton>
            </View>
        );
    }
};
