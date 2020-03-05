import React from 'react';
import ListingsAPI from '../API/ListingsAPI'
import { Link } from 'react-router-dom'

const Listings = () => (
<div className="super_container">
	<div className="home">
		<div className="home_background" style={{backgroundImage: "url('../images/listings.jpg')"}}></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="home_content">
						<div className="home_title">
							<h2>listings</h2>
						</div>
						<div className="breadcrumbs">
							<span><a href="index.html">Home</a></span>
							<span><a href="#"> Search</a></span>
							<span><a href="#"> Listings</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="listings">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 listings_col">
				{
				ListingsAPI.all().map( listingData => (
					<div key={listingData.number} className="listing_item">
						<div className="listing_item_inner d-flex flex-md-row flex-column trans_300">
							<div className="listing_image_container">
								<div className="listing_image">
									<div className="listing_background" style={{backgroundImage: "url('../images/listing_1.jpg')"}}></div>
								</div>
								<div className="featured_card_box d-flex flex-row align-items-center trans_300">
									<img src={require("../images/tag.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									<div className="featured_card_box_content">
										<div className="featured_card_price_title trans_300">For Sale</div>
										<div className="featured_card_price trans_300">$540,000</div>
									</div>
								</div>
							</div>
							<div className="listing_content">
								<div className="listing_title"><Link to={`/Listings/${listingData.number}`}>{listingData.name}</Link></div>
								<div className="listing_text">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</div>
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
					</div>
				))
				}
				</div>
			</div>
			<div className="row">
				<div className="col clearfix">
					<div className="listings_nav">
						<ul>
							<li className="listings_nav_item active"><a href="#">01.</a></li>
							<li className="listings_nav_item"><a href="#">02.</a></li>
							<li className="listings_nav_item"><a href="#">03.</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
export default Listings;
