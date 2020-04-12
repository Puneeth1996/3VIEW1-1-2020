import React from 'react';
import {
    AmbientLight,
    PointLight,
    View,
} from 'react-360';
export default class Lights extends React.Component {
    render() {
        return (
            <View>

                <AmbientLight intensity={1.5}
                    style={{
                    color:'gray',
                    transform: [
                        {translate: [0,0,0]},
                    ]
                    }}
                />


                {/* All these were for the right side of the model */}
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [80,-542,280]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [50,-542,250]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [0,-542,290]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-80,-542,280]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-50,-542,250]},
                    ],
                    }}
                    distance={50}
                />
                
                {/* 2nd plane from the right */}

                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [28,-542,80]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [5,-542,50]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [20,-542,0]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [70,-542,-100]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [20,-542,-60]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [70,-542,80]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [70,-542,43]},
                    ],
                    }}
                    distance={50}
                />

                {/* Midle bottom part  */}
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-80,-542,50]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-40,-542,40]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-80,-542,90]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-40,-542,80]},
                    ],
                    }}
                    distance={50}
                />

                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-80,-542,50]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-40,-542,40]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-80,-542,90]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-40,-542,80]},
                    ],
                    }}
                    distance={50}
                />
                
                
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-80,-542,-100]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-20,-542,-60]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-80,-542,0]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-40,-542,-20]},
                    ],
                    }}
                    distance={50}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-80,-542,-50]},
                    ],
                    }}
                    distance={50}
                />
                
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [10,-542,-350]},
                    ],
                    }}
                    distance={250}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [10,-542,-280]},
                    ],
                    }}
                    distance={250}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [-50,-542,-220]},
                    ],
                    }}
                    distance={250}
                />
                <PointLight 
                    intensity={0.75}
                    style={{
                    color: '#F5F5DC',
                    transform: [
                        {translate: [60,-542,-170]},
                    ],
                    }}
                    distance={250}
                />             
            </View>
        );
    }
};