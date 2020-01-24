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
        console.log(this.props.listingData.singleListingData)
        const { property_id,house_name,property_visuals_type,date_created,geospacial_data,area,price,property_features,property_desc,property_desc_full,addresses,property_id_ref_num,sixDigitPIN,mtl_file_loc,obj_file_loc,threeJS_iframe_url,react360_iframe_url,property_sale_availablity,property_legal_desc } = this.props.listingData.singleListingData
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
                            <p style={{marginBottom: 15}}>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p>
                            <hr/>
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
                            <p style={{marginBottom: 15}}>Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p>
                            <hr/> 
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
