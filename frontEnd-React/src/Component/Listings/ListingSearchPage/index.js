import React, { Component } from 'react'
import Banner from '../../CommonComponent/Banner'
import HeaderTitle from '../../CommonComponent/HeaderTitle'
import ListingsSearchForm from './ListingsSearchForm'

import axios from 'axios'


import ListingCard from './ListingCard'



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
        const form = new FormData()
        form.set('property_id', this.state.propertyID)
        const response = await axios.post('http://localhost/3VIEW1-1-2020/REST-3V/listing/singleListing.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        // console.log(response.data)
        if(response.data.singleListingData===""){
            this.setState({
                propertyID: '',
                dataVerificationMessage: 'False',
                propertyData: [],
            })
        }
        else{
            this.setState({
                propertyID: '',
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
        console.log(this.state)
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
                    (this.state.dataVerificationMessage==="False") ? 
                        <h1>Nothing to Display</h1>
                    :
                    <>
                        <ListingCard listingData={this.state.propertyData}/>
                    </>
                }
                

            </div>
        )
    }
}
