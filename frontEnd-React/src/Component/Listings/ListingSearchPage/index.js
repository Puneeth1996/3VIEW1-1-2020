import React, { Component } from 'react'
import Banner from '../../CommonComponent/Banner'
import ListingsSearchForm from './ListingsSearchForm'
import style from './index.module.css'

import axios from 'axios'

export default class ListingSearchPage extends Component {


    constructor(props) {
        super(props)

        this.state = {
            propertyID: '',
            propertyName: '',
            dataVerificationMessage: '',
            propertyData: '',
        }
    }

    listingSearchData = (event) => {
        event.preventDefault()
        console.log("submitting the listingSearchData")
        console.log(this.state.propertyID, this.state.propertyName)

        
        // Now its all about making the FormData for propertyID & propertyName
        // then making the api call and then testing it out with authentication 
        // check for the 6 digit api call once you have the listings card

        //  once everything is verifyied then move to single listings page development


        // const form = new FormData()
        // form.set('propertyID', this.state.propertyID)
        // const response = await axios.post('http://localhost:8080/3VIEW1-1-2020/REST-3V/listing/singleListingData.php', form, {
        //     headers: { 'Content-Type': 'multipart/form-data' },
        // })

        this.setState({
            propertyID: '',
            propertyName: '',
        });
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

                

                <ListingsSearchForm searchData={this.state} changeHandler={this.changeHandler} listingSearchData={this.listingSearchData} />
            </div>
        )
    }
}
