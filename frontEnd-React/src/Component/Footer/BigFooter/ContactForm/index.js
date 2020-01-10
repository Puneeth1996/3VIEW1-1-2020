import React, { Component } from 'react'
import style from './index.module.css'

export default class ContactForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            telephone: '',
            message: '',
        }
    }



    contactFormData = async (event) => {
        event.preventDefault();

        if(this.state.name && this.state.email && this.state.message){


          const response = await fetch('http://localhost/3VIEW1-1-2020/REST-3V/contactForm/core_php2.php', {
              method: 'POST',
              body: JSON.stringify({
                      name: this.state.name,
                      email: this.state.email,
                      telephone: this.state.telephone,
                      message: this.state.message
                  }),
          })

          if(await response.json()){
              this.setState({successMessage: "Form Submitted"});
              this.setState({
                  name: '',
                  email: '',
                  telephone: '',
                  message: '',
              });
          }

          else{
              this.setState({successMessage: "Unable To Submit the Form"});
              this.setState({
                  name: '',
                  email: '',
                  telephone: '',
                  message: '',
              });
          }


        }

        else {
          this.setState({successMessage: "Fill Out the name - email - message fields!"});
        }

    }




    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }



    render() {
        return (
            <div className={`${style.contactusform}`}>
                <div className={style.footercoltitle}>say hello</div>
                <div className={style.footercontactformcontainer}>
                    <form id="footercontactform" className={style.footercontactform} action="post">
                        <input id="contactformname" className={`${style.inputfield} ${style.contactformname}`} type="text" placeholder="Name" name="name" id="name_input" ref="contactName" onChange={this.changeHandler} value={this.state.name} required/>
                        <input id="contactformemail" className={`${style.inputfield} ${style.contactformemail}`} type="email" placeholder="Email" name="email" id="email_input" ref="contactEmail" onChange={this.changeHandler} value={this.state.email} required/>
                        <textarea id="contactformmessage" className={`${style.textfield} ${style.contactformmessage}`} name="message" placeholder="Message" id="message_input" cols="30" rows="5" ref="contactMessage" onChange={this.changeHandler} value={this.state.message} required></textarea>
                        <button id="contactsendbtn" type="submit" className={`${style.contactsendbtn} ${style.trans200}`} value="Submit" onClick={this.contactFormData}>send</button>
                    </form>
                    <div className={style.infoSubmittion}>{this.state.successMessage}</div>
                </div>
            </div>
        )
    }
}
