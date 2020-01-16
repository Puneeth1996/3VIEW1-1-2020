import React, { Component } from 'react'
import style from './index.module.css'

export default class ListingsSearchForm extends Component {

    render() {
        const { propertyID,dataVerificationMessage } = this.props.searchData
        return (
            <div className={style.ListingsSearchForm}>

                <form action="#" method="post" className={style.listingsForm}>

                    {/* <div className={style.search_box_title}>
                        <div className={style.search_box_title_inner}>  
                            <div className={style.search_box_title_icon}><img src={process.env.PUBLIC_URL + '/listing/search.png'} onClick={this.props.listingSearchData}/></div>
                            <input type="text" name="propertyID" value={propertyID} onChange={this.props.changeHandler} />
                        </div>
                    </div> */}
                    {/* Property ID:<br/>
                    <input type="text" name="propertyID" value={propertyID} onChange={this.props.changeHandler} />
                    <input type="submit" value="Search Your Home" onClick={this.props.listingSearchData} />
                    <p>{dataVerificationMessage}</p> */}

                    <div className={style.search}>
                        <input type="text" className={style.searchTerm} placeholder="What are you looking for?"/>
                        <div className={style.search_box_title_icon}><img src={process.env.PUBLIC_URL + '/listing/search.png'} onClick={this.props.listingSearchData}/></div>
                    </div>
                </form> 
                
            </div>
        )
    }
}
