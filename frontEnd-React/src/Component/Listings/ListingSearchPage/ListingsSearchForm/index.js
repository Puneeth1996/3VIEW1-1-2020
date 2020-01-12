import React, { Component } from 'react'
import style from './index.module.css'

export default class ListingsSearchForm extends Component {

    render() {
        const { propertyID,propertyName,dataVerificationMessage } = this.props.searchData
        return (
            <div className={style.ListingsSearchForm}>

                <form action="#" method="post" className={style.listingsForm}>
                    Property ID:<br/>
                    <input type="text" name="propertyID" value={propertyID} onChange={this.props.changeHandler} />
                    <input type="submit" value="Search Your Home" onClick={this.props.listingSearchData} />
                </form> 
                
            </div>
        )
    }
}
