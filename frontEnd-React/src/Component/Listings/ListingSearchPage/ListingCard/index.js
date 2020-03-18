import React, { Component } from 'react';
import TagFeature from '../../../CommonComponent/TagFeature'
import {  Route, Redirect, useHistory, useLocation } from "react-router-dom";

import style from './index.module.css'
import ReactCodeInput from 'react-code-input'





const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};




function PrivateRoute({ children, ...rest }) {
    return (
        <Route
        {...rest}
        render={({ location }) =>
            fakeAuth.isAuthenticated ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
}


class ListingCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reqPIN: '',
            refire: false,
        }
    }

    

    componentDidMount(){
        this.setState({
            reqPIN: this.props.listingData.singleListingData.sixDigitPIN,
        })
    }









    checkValidity = (eve) => {

        let history = useHistory()
        let location = useLocation()
    
        let { from } = location.state || { from: { pathname: "/" } }
        
    
        console.log(eve)
        if(eve==this.state.reqPIN){
            this.setState({
                refire: true,
            })
        }
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
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
                        this.state.refire & fakeAuth.isAuthenticated ?
                        <Redirect to={'/Listings/'+property_id_ref_num} />:
                        <ReactCodeInput type='password' fields={6} onChange={this.checkValidity} />
                    }                    
                    <TagFeature tag={arrFeatures} className={style.TagFeature}/>
                </div>
            </div>
        );
    }
}

export default ListingCard;



