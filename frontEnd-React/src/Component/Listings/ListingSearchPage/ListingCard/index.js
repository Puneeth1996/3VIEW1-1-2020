import React, { Component } from 'react';
import TagFeature from '../../../CommonComponent/TagFeature'
import { Redirect } from 'react-router-dom'
import style from './index.module.css'
import ReactCodeInput from 'react-code-input'


class ListingCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reqPIN: '',
            refire: false,
        }
    }

    checkValidity = (eve) => {
        console.log(eve)
        if(eve==this.state.reqPIN){
            this.setState({
                refire: true,
            })
        }
    }

    componentDidMount(){
        this.setState({
            reqPIN: this.props.listingData.singleListingData.sixDigitPIN,
        })
    }

    render() {
        const { property_id, house_name, property_img_loc, property_visuals_type, date_created, geospacial_data, area, price, property_features, property_desc, property_desc_full, addresses, property_id_ref_num, sixDigitPIN, mtl_file_loc, obj_file_loc, threeJS_iframe_url, react360_iframe_url, property_sale_availablity, property_legal_desc } = this.props.listingData.singleListingData
        var arrFeatures = property_features.split("|")

        return (
            <div className={style.Listingcard}>
                <h2>{house_name}</h2>
                <div className={style.card}>
                    <img src={require('../../../../img/listings/'+ property_img_loc)} alt="Avatar" className={style.cardImage}/>
                    <div className={style.container}>
                        <h4><b>{property_visuals_type}</b></h4>
                        <br/><p>{property_desc}</p><br/>
                        <p>{addresses}</p>
                    </div>
                    {
                        this.state.refire?
                        <Redirect to={'/Listings/'+property_id} />:
                        <ReactCodeInput type='password' fields={6} onChange={this.checkValidity} />
                    }                    
                    <TagFeature tag={arrFeatures} className={style.TagFeature}/>
                </div>
            </div>
        );
    }
}

export default ListingCard;



