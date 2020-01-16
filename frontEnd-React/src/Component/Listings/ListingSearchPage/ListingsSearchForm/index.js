import React, { Component } from 'react'
import style from './index.module.css'

export default class ListingsSearchForm extends Component {

    render() {
        const divStyle = {
            color: 'blue',
            boxSizing: 'unset',
            margin: 'unset',
            border: '3px solid #fd784f',
        };
        const { propertyID,dataVerificationMessage } = this.props.searchData
        return (
            <div className={style.ListingsSearchForm}>
                <form action="#" method="post" className={style.listingsForm}>
                    <div className={style.search}>
                        <input style={divStyle} className={style.searchTerm} type="text" name="propertyID" value={propertyID} onChange={this.props.changeHandler}/>
                        <div className={style.search_box_title_icon}><img src={process.env.PUBLIC_URL + '/listing/search.png'} onClick={this.props.listingSearchData} /></div>
                    </div>
                    <span className={style.searchDescription}>{dataVerificationMessage}</span>
                </form> 
                
            </div>
        )
    }
}
