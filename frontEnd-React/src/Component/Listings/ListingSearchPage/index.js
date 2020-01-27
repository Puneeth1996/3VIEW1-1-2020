import React, { Component } from 'react'
import Banner from '../../CommonComponent/Banner'
import HeaderTitle from '../../CommonComponent/HeaderTitle'
import ListingsSearchForm from './ListingsSearchForm'
import style from './index.module.css'

import axios from 'axios'


import ListingsCardDetail from './ListingsCardDetail'



export default class ListingSearchPage extends Component {


    constructor(props) {
        super(props)

        this.state = {
            propertyID: '',
            dataVerificationMessage: 'False',
            propertyData: [],
        }
    }




    
    listingSearchData = async (event) => {
        event.preventDefault()
        // console.log("submitting the listingSearchData")
        // console.log(this.state.propertyID)


        
        const form = new FormData()
        form.set('property_id', this.state.propertyID)
        const response = await axios.post('http://localhost:8080/3VIEW1-1-2020/REST-3V/listing/singleListing.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        if(!response.data){
            this.setState({
                propertyID: '',
                dataVerificationMessage: 'False',
                propertyData: [],
            })
        }
        this.setState({
            propertyID: '',
            dataVerificationMessage: 'True',
            propertyData: response.data,
        })
        if(this.state.propertyData["singleListingData"]==""){
            this.setState({
                dataVerificationMessage: 'False',
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
        // console.log(this.state.propertyID)
        // console.log(this.state.propertyData)

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

                {   
                    (this.state.dataVerificationMessage!="False") ? 
                        <ListingsCardDetail listingData={this.state.propertyData}/>
                    :
                    <>
                        <h1>Nothing to Display</h1>
                    </>
                }
                
            </div>
        )
    }
}
