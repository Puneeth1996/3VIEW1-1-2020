import React, { Component } from 'react';
import TagFeature from '../../../CommonComponent/TagFeature'

import style from './index.module.css'


class ListingCard extends Component {

    render() {
        
        const { property_id, house_name, property_img_loc, property_visuals_type, date_created, geospacial_data, area, price, property_features, property_desc, property_desc_full, addresses, property_id_ref_num, sixDigitPIN, mtl_file_loc, obj_file_loc, threeJS_iframe_url, react360_iframe_url, property_sale_availablity, property_legal_desc } = this.props.listingData.singleListingData
        var arrFeatures = property_features.split("|")

        return (
            <div className={style.Listingcard}>
                <h2>{house_name}</h2>
                <div className={style.card}>
                    <img src={property_img_loc} alt="Avatar" className={style.cardImage}/>
                    <div className={style.container}>
                        <h4><b>John Doe</b></h4> 
                        <p>Architect and Engineer</p> 
                    </div>
                </div>
                <TagFeature tag={arrFeatures} className={style.TagFeature}/>
            </div>
        );
    }
}

export default ListingCard;



