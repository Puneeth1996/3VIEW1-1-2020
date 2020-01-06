import React, { Component } from 'react'
import style from './index.module.css'

export default class IntroComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSmall: (window.innerWidth < 780),
        };
    }
    checkWidthResize = () => {
        const isSmall = window.innerWidth < 780;
        if ( isSmall !== this.state.width) {
            this.setState({ isSmall })
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.checkWidthResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateUIHeader)
    }
    render() {
        // once the screen width reduces below 600px
        // then change the style object
        let style1 = {}
        let style2 = {}
        if(this.state.isSmall){
            style1 ={
                // backgroundColor:"grey",
                order:2,
            }
            style2 ={
                // backgroundColor:"yellow",
                order:1,
            }
        }
        else {
            style1 ={
                // backgroundColor:"blue",
                order:1,
                margin: 30,
            }
            style2 ={
                // backgroundColor:"white",
                order:2,
            }
        }

        return (
            <div className={style.row}>
                <div className={style.column} style={style1}>
                    <h2 className={style.intro_title}>The Estate Promise</h2>
                    <div className={style.intro_subtitle}>Sed vestibulum lectus ut leo molestie, id suscipit magna</div>
                    <p className={style.intro_text}>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus eros, placerat quis fermentum et, viverra sit amet lacus. Nam gravida semper augue id sagittis. Cras nec arcu quis velit tempor porttitor sit amet vel risus. Sed vestibulum lectus ut leo molestie, id suscipit magna mattis. Vivamus nisl ligula, varius congue dui sit amet, vestibulum sollicitudin mauris. Vestibulum quis ligula in nunc varius maximus ac et nunc. Nulla sed magna turpis.</p>
                </div>
                <div className={style.column} style={style2}>
                  <div className={style.intro_image}>
                      <img src={require('./intro.png')} alt=""/>
                  </div>
                </div>
            </div>
        )
    }
}
