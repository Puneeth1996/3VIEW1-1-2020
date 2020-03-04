import React, { Component } from 'react'
import ListingsAPI from '../../../API/ListingsAPI'
import NotFound from '../../NotFound'
import Banner from '../../CommonComponent/Banner'
import axios from 'axios'

import InnerView from './InnerView'
import OuterView from './OuterView'


import style from './index.module.css'

export default class SpecificListing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            propertyData: [],
            isToggleOn: true,
        }
    }


    handleClick = () => {
		this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
		});
	}

    async componentWillMount(){
        const form = new FormData()
        form.set('property_id_ref_num', this.props.match.params.number)
        const response = await axios.post('http://localhost/3VIEW1-1-2020/REST-3V/listing/singleListing.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        if(response.data.singleListingData===""){
            this.setState({
                propertyData: [],
            })
        }
        else{
            this.setState({
                propertyData: response.data.singleListingData,
            })
        }
    }

    



    render() {
        // const uniqueURLNo = parseInt(this.props.match.params.number)
        // const specListing = ListingsAPI.get(uniqueURLNo)
        // console.log(this.state.propertyData)
        const specListing = this.state.propertyData


        const classNameBtn = this.state.isToggleOn ? style.innerView : style.outterView

        



        return (
            <>
                {
                
                    specListing.property_id_ref_num === this.props.match.params.number ? 

                    (
                        <>  
                            <Banner>
                                Specific Listing
                            </Banner>
                            <button onClick={this.handleClick} className={classNameBtn} >
                                {this.state.isToggleOn ? 'Inner View' : 'Outter View'}
                            </button>
                            {
                                this.state.isToggleOn?
                                <OuterView />:
                                <InnerView />
                            }
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
