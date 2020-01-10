import React, { Component } from 'react'
import style from './index.module.css'

export default class ListingsSearchForm extends Component {
    render() {
        return (
            <div className={style.ListingsSearchForm}>

                <form action="/action_page.php">
                    First name:<br/>
                    <input type="text" name="firstname" value="" />
                    <br/>
                    Last name:<br/>
                    <input type="text" name="lastname" value="" />
                    <br/><br/>
                    <input type="submit" value="Submit" />
                </form> 
                
            </div>
        )
    }
}
