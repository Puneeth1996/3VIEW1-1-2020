import React, { Component } from 'react'
import TagFeature from '../../../CommonComponent/TagFeature'

import style from './index.module.css'

export default class HorizontalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSmall: (window.innerWidth < 560),
        };
    }
    checkWidthResize = () => {
        const isSmall = window.innerWidth < 560;
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
        return (
            <>
            {
                this.state.isSmall ? 
                <>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                            <img src="images/Listings/city_1.jpg" alt="" />
                        </div>
                        <div className={style.container}>
                            <h3><b>House in West California</b></h3> 
                            <p>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p> 
                        </div>
                        <TagFeature tag={['Hot Tub', 'Swimming Pool', 'Garden', 'Patio', 'Hard Wood Floor']} className={style.TagFeature}/>
                    </div>
                </>
                
                :
                <>
                    <div className={style.card}>
                        <div className={style.cardImage}>
                            <img src="images/Listings/city_1.jpg" alt="" />
                        </div>
                        <div className={style.container}>
                            <h3><b>House in West California</b></h3> 
                            <p>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p> 
                            <TagFeature tag={['Hot Tub', 'Swimming Pool', 'Garden', 'Patio', 'Hard Wood Floor']} />
                        </div>
                    </div>                
                </>
            }
            </>
        )
    }
}

// 
