import React, { Component } from 'react'
import Banner from '../CommonComponent/Banner'
import ContactForm from './ContactForm'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Banner>
                    Contact
                </Banner>
                <ContactForm />
            </div>
        )
    }
}


// https://codepen.io/dfitzy/pen/VepqMq