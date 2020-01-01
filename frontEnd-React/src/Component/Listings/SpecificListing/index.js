import React, { Component } from 'react'
import ListingsAPI from '../../../API/ListingsAPI'
import NotFound from '../../NotFound'
import Banner from '../../CommonComponent/Banner'

export default class SpecificListing extends Component {
    render() {
        const uniqueURLNo = parseInt(this.props.match.params.number)
        const specListing = ListingsAPI.get(uniqueURLNo)

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
