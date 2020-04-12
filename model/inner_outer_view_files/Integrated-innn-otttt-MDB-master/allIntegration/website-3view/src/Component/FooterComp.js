import React from 'react'
import { Link } from 'react-router-dom'

const FooterComp = () => (
<>
<footer className="footer">
<div className="container">
    <div className="row">
        <div className="col-lg-3 footer_col">
            <div className="footer_col_title">
                <div className="logo_container">
                    <a href="#">
                        <div className="logo">
                            <img src={require("../images/logo.png")} alt=""/>
                            <span>3 View</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="footer_social">
                <ul className="footer_social_list">
                    <li className="footer_social_item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li className="footer_social_item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="footer_social_item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="footer_social_item"><a href="#"><i className="fab fa-dribbble"></i></a></li>
                    <li className="footer_social_item"><a href="#"><i className="fab fa-behance"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="col-lg-3 footer_col">
            <div className="footer_col_title">useful links</div>
            <ul className="footer_useful_links">
                <li className="useful_links_item"><a href="#">Listings</a></li>
                <li className="useful_links_item"><a href="#">Favorite Cities</a></li>
                <li className="useful_links_item"><a href="#">Testimonials</a></li>
                <li className="useful_links_item"><a href="#">Featured Listings</a></li>
                <li className="useful_links_item"><a href="#">Properties on Offer</a></li>
                <li className="useful_links_item"><a href="#">Services</a></li>
                <li className="useful_links_item"><a href="#">News</a></li>
                <li className="useful_links_item"><a href="#">Our Agents</a></li>
            </ul>
        </div>
        <div className="col-lg-3 footer_col">
            <div className="footer_col_title">say hello</div>
            <div className="footer_contact_form_container">
                <form id="footer_contact_form" className="footer_contact_form" action="post">
                    <input id="contact_form_name" className="input_field contact_form_name" type="text" placeholder="Name" required="required" data-error="Name is required." />
                    <input id="contact_form_email" className="input_field contact_form_email" type="email" placeholder="E-mail" required="required" data-error="Valid email is required." />
                    <textarea id="contact_form_message" className="text_field contact_form_message" name="message" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                    <button id="contact_send_btn" type="submit" className="contact_send_btn trans_200" value="Submit">send</button>
                </form>
            </div>
        </div>
        <div className="col-lg-3 footer_col">
            <div className="footer_col_title">contact info</div>
            <ul className="contact_info_list">
                <li className="contact_info_item d-flex flex-row">
                    <div><div className="contact_info_icon"><img src={require("../images/placeholder.svg")} alt=""/></div></div>
                    <div className="contact_info_text">4127 Raoul Wallenber 45b-c Gibraltar</div>
                </li>
                <li className="contact_info_item d-flex flex-row">
                    <div><div className="contact_info_icon"><img src={require("../images/phone-call.svg")} alt=""/></div></div>
                    <div className="contact_info_text">2556-808-8613</div>
                </li>
                <li className="contact_info_item d-flex flex-row">
                    <div><div className="contact_info_icon"><img src={require("../images/message.svg")} alt=""/></div></div>
                    <div className="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactme@gmail.com</a></div>
                </li>
                <li className="contact_info_item d-flex flex-row">
                    <div><div className="contact_info_icon"><img src={require("../images/planet-earth.svg")} alt=""/></div></div>
                    <div className="contact_info_text"><a href="https://colorlib.com">www.colorlib.com</a></div>
                </li>
            </ul>
        </div>
    </div>
</div>
</footer>
<div className="credits">
  <span>
    Copyright Akash &copy;2019 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://akashmahato.com" target="_blank">3ViewProperties</a>
  </span>
</div>
</>
)

export default FooterComp;


