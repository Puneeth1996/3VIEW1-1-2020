import React, { Component } from 'react'
import style from './index.module.css'

export default class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: null,
            email: null,
            telephone: null,
            message: null,
        }
    }

    contactFormData = () => {
        console.log('MINI Form')
    }
    

    changeHandler = event => {
        console.log(event)
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name,value)
        this.setState({
            formControls: {
                [name]: value
            }
        });
        console.log(this.state)
    }


    render() {
        return (
            <div className={`${style.contactusform}`}>
                <div className={style.footercoltitle}>say hello</div>
                <div className={style.footercontactformcontainer}>
                    <form id="footercontactform" className={style.footercontactform} action="post">
                        <input id="contactformname" className={`${style.inputfield} ${style.contactformname}`} type="text" placeholder="Name" required="required" data-error="Name is required." ref="contactName" onChange={this.changeHandler} required/>
                        <input id="contactformemail" className={`${style.inputfield} ${style.contactformemail}`} type="email" placeholder="E-mail" required="required" data-error="Valid email is required." ref="contactEmail"  onChange={this.changeHandler} required/>
                        <textarea id="contactformmessage" className={`${style.textfield} ${style.contactformmessage}`} name="message" placeholder="Message" required="required" data-error="Please, write us a message." ref="contactMessage" onChange={this.changeHandler} required></textarea>
                        <button id="contactsendbtn" type="submit" className={`${style.contactsendbtn} ${style.trans200}`} value="Submit" onClick={this.contactFormData}>send</button>
                    </form>
                </div>
            </div>
        )
    }
}
