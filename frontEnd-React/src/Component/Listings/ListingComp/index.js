import React, { Component } from 'react'
import style from './index.module.css'


import Banner from '../../CommonComponent/Banner'
import HeaderTitle from '../../CommonComponent/HeaderTitle'
import ListingsSearchForm from './ListingsSearchForm'

import axios from 'axios'




export default class ListingComp extends Component {




    constructor(props) {
        super(props)

        this.state = {
            property_id_ref_num: '',
            dataVerificationMessage: 'False',
            propertyData: [],
            showInnerOutter : 'False',
        }
    }




    
    listingSearchData = async (event) => {
        event.preventDefault()        
        const form = new FormData()
        form.set('property_id_ref_num', this.state.property_id_ref_num)
        const response = await axios.post('http://localhost/3VIEW1-1-2020/REST-3V/listing/singleListing.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        // console.log(response.data)
        if(response.data.singleListingData===""){
            this.setState({
                property_id_ref_num: '',
                dataVerificationMessage: 'False',
                propertyData: [],
            })
        }
        else{
            this.setState({
                property_id_ref_num: '',
                dataVerificationMessage: 'True',
                propertyData: response.data,
            })
        }

    }



    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }








    render() {
        return (
            <div>
                <Banner>
                    Listings
                </Banner>









                <HeaderTitle
                    title='Search Your Home'
                    subTitle='Enter Your Property Id.'
                />


                <ListingsSearchForm searchData={this.state} changeHandler={this.changeHandler} listingSearchData={this.listingSearchData} />




            </div>
        )
    }
}
