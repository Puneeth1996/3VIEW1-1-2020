import React from 'react';
import ListingsAPI from '../API/ListingsAPI'
import { Link } from 'react-router-dom'

const FeaturedProperties = () => (

    <div className="featured">
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="section_title text-center">
                    <h3>featured ( or recent ) properties</h3>
                </div>
            </div>
        </div>
        <div className="row featured_row">
            {
            ListingsAPI.featuredProperties().map( FeaturedListingData => (
            <div className="col-lg-4 featured_card_col">
                <div className="featured_card_container">
                    <div className="card featured_card trans_300">
                        <div className="featured_panel">featured</div>
                        <img className="card-img-top" src={require("../images/featured_2.jpg")} alt="https://unsplash.com/@astute"/>
                        <div className="card-body" key = {FeaturedListingData.number}>
                            <div className="card-title"><Link to={`/Listings/${FeaturedListingData.number}`}>{FeaturedListingData.name}</Link></div>
                            <div className="card-text">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</div>
                            <div className="rooms">
                                <div className="room">
                                    <span className="room_title">Bedrooms</span>
                                    <div className="room_content">
                                        <div className="room_image"><img src={require("../images/bedroom.png")} alt=""/></div>
                                        <span className="room_number">4</span>
                                    </div>
                                </div>
                                <div className="room">
                                    <span className="room_title">Bathrooms</span>
                                    <div className="room_content">
                                        <div className="room_image"><img src={require("../images/shower.png")} alt=""/></div>
                                        <span className="room_number">3</span>
                                    </div>
                                </div>
                                <div className="room">
                                    <span className="room_title">Area</span>
                                    <div className="room_content">
                                        <div className="room_image"><img src={require("../images/area.png")} alt=""/></div>
                                        <span className="room_number">7100 Sq Ft</span>
                                    </div>
                                </div>
                                <div className="room">
                                    <span className="room_title">Patio</span>
                                    <div className="room_content">
                                        <div className="room_image"><img src={require("../images/patio.png")} alt=""/></div>
                                        <span className="room_number">1</span>
                                    </div>
                                </div>
                                <div className="room">
                                    <span className="room_title">Garage</span>
                                    <div className="room_content">
                                        <div className="room_image"><img src={require("../images/garage.png")} alt=""/></div>
                                        <span className="room_number">2</span>
                                    </div>
                                </div>
                            </div>
                            <div className="room_tags">
                                <span className="room_tag"><a href="#">Hottub</a></span>
                                <span className="room_tag"><a href="#">Swimming Pool</a></span>
                                <span className="room_tag"><a href="#">Garden</a></span>
                                <span className="room_tag"><a href="#">Patio</a></span>
                                <span className="room_tag"><a href="#">Hard Wood Floor</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="featured_card_box d-flex flex-row align-items-center trans_300">
                        <img src={require("../images/tag.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
                        <div className="featured_card_box_content">
                            <div className="featured_card_price_title">For Sale</div>
                            <div className="featured_card_price">$540,000</div>
                        </div>
                    </div>
                </div>
            </div>       
            ))
            }
        </div>
    </div>
</div>
)
export default FeaturedProperties;