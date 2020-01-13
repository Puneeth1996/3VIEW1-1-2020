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
            dataVerificationMessage: 'False',
            propertyData: [],
        }
    }

    listingSearchData = async (event) => {
        event.preventDefault()
        console.log("submitting the listingSearchData")
        console.log(this.state.propertyID)


        
        const form = new FormData()
        form.set('propertyID', this.state.propertyID)
        const response = await axios.post('http://localhost:8080/3VIEW1-1-2020/REST-3V/listing/singleListing.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        if(response.data){
            this.setState({
                propertyID: '',
                dataVerificationMessage: 'True',
                propertyData: response.data,
            })
        }
        else {
            this.setState({
                propertyID: '',
                dataVerificationMessage: 'False',
                propertyData: [],
            })
        }
        console.log(this.state.propertyData)
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
