import React, { Component } from 'react'
import ListingsAPI from '../API/ListingsAPI'
import InnerView from '../Container/InnerView'
import OuterView from '../Container/OuterView'
import Putter from './Putter'
import NotFound from './NotFound'
import { Link } from 'react-router-dom'

export default class SpecificListing extends Component {
    render() {
        // console.log(parseInt(this.props.match.params.number));
        const specificListing = ListingsAPI.get(
            parseInt(this.props.match.params.number)
        )
        if (!specificListing) {
            // We can add a 404 page Js component istead of this silly looking text.
            // return (<div>Sorry, We are placing a 404 page for all unkowns soon!</div>)
            return( <NotFound /> )
        }
        return (

<div className="super_container">
    <div className="home">
        <div className="home_background" style ={{backgroundImage: "url('../images/listings_single.jpg)"}}></div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="home_content">
                        <div className="home_title">
                            <h2>single listings</h2>
                        </div>
                        <div className="breadcrumbs">
                            <span><a href="index.html">Home</a></span>
                            <span><a href="#"> Search</a></span>
                            <span><a href="listings.html"> Listings</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="listing">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">					
                    <div className="listing_title_container">
                        <div className="listing_title">{specificListing.name} (#{specificListing.number})</div>
                        <p className="listing_text">Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor.</p>
                        <div className="room_tags">
                            <span className="room_tag"><a href="#">Hottub</a></span>
                            <span className="room_tag"><a href="#">Swimming Pool</a></span>
                            <span className="room_tag"><a href="#">Garden</a></span>
                            <span className="room_tag"><a href="#">Patio</a></span>
                            <span className="room_tag"><a href="#">Hard Wood Floor</a></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 listing_price_col clearfix">
                    <div className="featured_card_box d-flex flex-row align-items-center trans_300 float-lg-right">
                        <img src={require("../images/tag.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
                        <div className="featured_card_box_content">
                            <div className="featured_card_price_title trans_300">For Sale</div>
                            <div className="featured_card_price trans_300">$540,000</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <OuterView />
                <Putter />
            </div>
            <div className="row listing_content_row">
                <div className="col-lg-12 listing_col">
                    <div className="listing_details">
                        <div className="listing_subtitle">Extra Facilities</div>
                        <p className="listing_details_text">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p>
                        <div className="rooms"></div>
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
                    </div>					
                    <div className="listing_description">
                        <div className="listing_subtitle">Description</div>
                        <p className="listing_description_text">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.Sed lectus urna, ultricies sit amet risus eget, euismod imperdiet augue. Duis imperdiet, purus a pellentesque sodales, sapien mauris rhoncus eros, ac blandit elit leo ac diam. Sed lectus urna, ultricies sit amet risus eget, euismod imperdiet augue. Duis imperdiet, purus a pellentesque sodales, sapien mauris rhoncus eros, ac blandit elit leo ac diam</p>
                    </div>					
                    <div className="listing_additional_details">
                        <div className="listing_subtitle">Additional Details</div>
                        <ul className="additional_details_list">
                            <li className="additional_detail"><span>bedroom features:</span> Main Floor Master Bedroom, Walk-In Closet</li>
                            <li className="additional_detail"><span>dining area:</span> Breakfast Counter/Bar, Living/Dining Combo</li>
                            <li className="additional_detail"><span>doors & windows:</span> Bay Window</li>
                            <li className="additional_detail"><span>entry location:</span> Mid Level</li>
                            <li className="additional_detail"><span>floors:</span> Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood</li>
                        </ul>
                    </div>
                    <InnerView />
                    <div className="listing_map">
                        <div className="listing_subtitle">Property on map</div>
                        <div id="google_map">
                            <div className="map_container">
                                <div id="map"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )        
    }
}