import React, { Component } from 'react';
import TagFeature from '../../../CommonComponent/TagFeature'

import { Redirect } from 'react-router-dom'

import style from './index.module.css'

import ReactCodeInput from 'react-code-input'


class ListingCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            enteredPIN: '',
            reqPIN: '',
        }
    }

    checkValidity = (eve) => {
        console.log(eve)
        this.setState({
            enteredPIN: eve,
        })       
    }

    componentDidMount(){
        console.log("Component Didi Mount Method"+this.props.sixDigitPIN)
        this.setState({
            reqPIN: this.props.listingData.singleListingData.sixDigitPIN,
        })
    }

    render() {
        const { property_id, house_name, property_img_loc, property_visuals_type, date_created, geospacial_data, area, price, property_features, property_desc, property_desc_full, addresses, property_id_ref_num, sixDigitPIN, mtl_file_loc, obj_file_loc, threeJS_iframe_url, react360_iframe_url, property_sale_availablity, property_legal_desc } = this.props.listingData.singleListingData
        var arrFeatures = property_features.split("|")
        console.log(sixDigitPIN,this.state.reqPIN)
        console.log(typeof this.state.enteredPIN,typeof this.state.reqPIN)
        console.log(this.state.enteredPIN==this.state.reqPIN)
        return (

            <div className={style.Listingcard}>
                <h2>{house_name}</h2>
                <div className={style.card}>
                    <img src={property_img_loc} alt="Avatar" className={style.cardImage}/>
                    <div className={style.container}>
                        <h4><b>{property_visuals_type}</b></h4>
                        <br/>
                        <p>{property_desc}</p>
                        <br/>
                        <p>{addresses}</p>
                    </div>
                    <TagFeature tag={arrFeatures} className={style.TagFeature}/>
                    { 
                        this.state.enteredPIN==this.state.reqPIN ?
                        <Redirect to='/About' /> :
                        <ReactCodeInput type='password' fields={6} inputStyleInvalid={{color:'red'}} onChange={this.checkValidity} /> 
                    }
                    
                </div>
            </div>
        );
    }
}

export default ListingCard;



