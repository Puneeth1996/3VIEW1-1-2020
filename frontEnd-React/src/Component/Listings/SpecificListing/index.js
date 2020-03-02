import React, { Component } from 'react'
import ListingsAPI from '../../../API/ListingsAPI'
import NotFound from '../../NotFound'
import Banner from '../../CommonComponent/Banner'
import axios from 'axios'

export default class SpecificListing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            propertyData: [],
        }
    }


    async componentDidMount(){
        const form = new FormData()
        form.set('property_id', this.props.match.params.number)
        const response = await axios.post('http://localhost/3VIEW1-1-2020/REST-3V/listing/singleListing.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        if(response.data.singleListingData==""){
            this.setState({
                propertyData: [],
            })
        }
        else{
            this.setState({
                propertyData: response.data,
            })
        }
    }




    render() {
        const uniqueURLNo = parseInt(this.props.match.params.number)
        const specListing = ListingsAPI.get(uniqueURLNo)
        console.log(this.state.propertyData)

        return (
            <>
                {
                
                    specListing ? 

                    (
                        <>  
                            <Banner>
                                Specific Listing {uniqueURLNo}
                            </Banner>
                            
                        </>
                    ) :

                    (
                        <NotFound />
                    )

                }
            </>
        )
    }
}
