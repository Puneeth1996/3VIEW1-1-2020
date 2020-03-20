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
        const { property_id_ref_num,} = this.props.searchData
        return (
            <div className={style.ListingsSearchForm}>
                <form method="POST" onSubmit={this.props.listingSearchData} className={style.listingsForm}>
                    <div className={style.search}>
                        <input style={divStyle} className={style.searchTerm} type="text" name="property_id_ref_num" value={property_id_ref_num} onChange={this.props.changeHandler} />
                        <div className={style.search_box_title_icon}><img src={search} onClick={this.props.listingSearchData} alt='' /></div>
                    </div>
                </form>
            </div>
        )
    }
}
