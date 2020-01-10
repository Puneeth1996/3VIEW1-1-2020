import React, { Component } from 'react'
import style from './index.module.css'

export default class ListingsSearchForm extends Component {



    listingSearchData = (event) => {
        event.preventDefault()
        console.log("submitting the listingSearchData")
    }

    changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        console.log(name,value)
    }


    render() {
        return (
            <div className={style.ListingsSearchForm}>

                <form action="#" method="post" className={style.listingsForm}>
                    Property ID:<br/>
                    <input type="text" name="propertyID" value="" onChange={this.changeHandler} />
                    <br/>
                    Property Name:<br/>
                    <input type="text" name="propertyName" value="" onChange={this.changeHandler} />
                    <br/><br/>
                    <input type="submit" value="Search Your Home" onClick={this.listingSearchData} />
                </form> 
                
            </div>
        )
    }
}
