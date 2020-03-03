import React, { Component } from 'react'
import style from './index.module.css'

import search from '../../../../img/listings/search.png'

export default class ListingsSearchForm extends Component {

    render() {
        const divStyle = {
            color: '#07122c',
            boxSizing: 'unset',
            margin: 'unset',
            border: '3px solid #fd784f',
        };
        const { propertyID,} = this.props.searchData
        return (
            <div className={style.ListingsSearchForm}>
                <form method="POST" onSubmit={this.props.listingSearchData} className={style.listingsForm}>
                    <div className={style.search}>
                        <input style={divStyle} className={style.searchTerm} type="text" name="propertyID" value={propertyID} onChange={this.props.changeHandler} />
                        <div className={style.search_box_title_icon}><img src={search} onClick={this.props.listingSearchData} alt='' /></div>
                    </div>
                    {/* <span className={style.searchDescription}>{dataVerificationMessage}</span> */}
                    {/* Using this data verification as to be source for displaying the Listings card  */}
                </form>


            </div>
        )
    }
}
