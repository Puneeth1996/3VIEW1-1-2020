import React from 'react';
import { View, asset, VrButton } from 'react-360';
import Entity from 'Entity';

export default class MarkerButton extends React.Component {
    constructor() {
        super();
        this.state = {
            xCurPos : 0,
            yCurPos : 0,
            zCurPos : 0,
            xTarPos : 0,
            yTarPos : 0,
            zTarPos : 0,
        };
        this.Lerp = this.Lerp.bind(this);
    }
    
    componentDidMount(){
        this.Lerp();
    }
    
    Lerp() {
        if(Math.abs (this.state.xCurPos - this.state.xTarPos) > 0.3)
        {
            this.setState({
                xCurPos : this.state.xCurPos * (1 - 0.05) + this.state.xTarPos * 0.05
            });
            postMessage({type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos});
        }
        else if(Math.abs (this.state.zCurPos - this.state.zTarPos) > 0.3)
        {
            this.setState({
                zCurPos : this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05
            });
            postMessage({type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos});
        }
        else if(Math.abs (this.state.yCurPos - this.state.yTarPos) > 0.3)
        {
            this.setState({
                yCurPos : this.state.yCurPos * (1 - 0.05) + this.state.yTarPos * 0.05
            });
            postMessage({type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos});
        }
        requestAnimationFrame(this.Lerp);
    }
    
    render() {
        return (
        <>
            <VrButton
                onClick={() => {
                    this.state.xTarPos = 10;
                    this.state.yTarPos = 0;
                    this.state.zTarPos = 0;
                }}
            >
                <Entity
                    style={{
                        transform: [
                        {translate: [-10, -3, -4.5]},
                        ]
                    }}
                    source={{
                        obj: asset('door_mat.obj'),
                    }}
                    lit={true}
                />
            </VrButton>
            <VrButton
                onClick={() => {
                    this.state.xTarPos = -2;
                    this.state.yTarPos = 0;
                    this.state.zTarPos = 0;
                }}
            >
                <Entity
                    style={{
                        transform: [
                        {translate: [3.5, -3, -4.5]},
                        {scale: 1}
                        ]
                    }}
                    source={{
                        obj: asset('door_mat.obj'),
                    }}
                    lit={true}
                />
            </VrButton>
        </>
        );
    }
};



