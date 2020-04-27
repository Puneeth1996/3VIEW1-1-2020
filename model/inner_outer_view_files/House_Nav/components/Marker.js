import React from 'react';
import {
    AppRegistry,
    View,
    asset,
    VrButton,
    StyleSheet,
} from 'react-360';
import Entity from 'Entity';


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
        onClick={() => {
            this.state.xTarPos = -3;
            this.state.zTarPos = 50;
        }}
        >
        <Entity
            style={{
                transform: [
                {translate: [3,-50,-50]},
                {rotateX: 250},
                {rotateY: 5},
                {rotateZ: 5},
                {scale: 2},
                ],
            }}
            source={{
                obj: asset('Marker.obj'),
            }}
            lit={true}
        />
        </VrButton>

        <VrButton
		onClick={() => {
            this.state.xTarPos = 40;
            this.state.zTarPos = 50;
        }}
		>
        <Entity
            style={{
                transform: [
                {translate: [-40,-50,-50]},
                {rotateX: 250},
                {rotateY: -5},
                {rotateZ: 5},
                {scale: 2},
                ],
            }}
            source={{
                obj: asset('Marker.obj'),
            }}
            lit={true}
        />
        </VrButton>

        <VrButton
		onClick={() => {
            this.state.xTarPos = -50;
            this.state.zTarPos = -50;
        }}
		>
        <Entity
            style={{
                transform: [
                {translate: [50,-50,50]},
                {rotateX: 260},
                {rotateY: 5},
                {rotateZ: 5},
                {scale: 2},
                ],
            }}
            source={{
                obj: asset('Marker.obj'),
            }}
            lit={true}
        />
        </VrButton>
        
        
        <VrButton
		onClick={() => {
            this.state.xTarPos = +1;
            this.state.zTarPos = -50;
        }}
		>
        <Entity
            style={{
                transform: [
                {translate: [0,-50,50]},
                {rotateX: 260},
                {rotateY: 5},
                {rotateZ: 5},
                {scale: 2},
                ],
            }}
            source={{
                obj: asset('Marker.obj'),
            }}
            lit={true}
        />
        </VrButton>

        {/* Can make this area panel transparent to make the user feel like click on anysurface which then makes the tranport */}
        <VrButton
        style={styles.panel}

		onClick={() => {
            this.state.xTarPos = +1;
            this.state.zTarPos = -50;
        }}
		>
        </VrButton>
        </View>
    );
    }
};


const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        transform: [
            {translate: [100,-100,50]},
            {rotateX: 90},
            {rotateY: 0},
            {rotateZ: 0},
            ],
        width: 50,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
    }
});
