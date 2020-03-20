import React, { Component } from 'react'



import Banner from '../../CommonComponent/Banner'
import HeaderTitle from '../../CommonComponent/HeaderTitle'
import ListingsSearchForm from './ListingsSearchForm'
import ListingCard from './ListingCard'

import axios from 'axios'

// import style from './index.module.css'


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



    checkValidity = (eve) => {
        console.log(eve)
        console.log(this.state.propertyData.singleListingData)
        if(eve.length===6){
            if(eve===this.state.propertyData.singleListingData.sixDigitPIN)
            this.setState({
                showInnerOutter : !this.state.showInnerOutter,
            })
            else{
                alert("Work Pin!")
            }
        }
        
    }



    render() {
        return (
            <div>
                <Banner>
                    Listings
                </Banner>
                {
                    this.state.showInnerOutter==="False" ? 

                    <div>
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
                                <ListingCard listingData={this.state.propertyData} checkValidity={this.checkValidity} />
                            </>
                        }
                    </div>

                    :

                    <h1>Show showInnerOutter</h1>

                }
            </div>
        )
    }
}
