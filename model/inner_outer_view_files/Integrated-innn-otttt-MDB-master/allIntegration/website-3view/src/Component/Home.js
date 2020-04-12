import React from 'react';
import FeaturedProperties from './FeaturedProperties'


const Home = () => (
<div className="super_container">
	<div className="home">
		<div className="home_slider_container">
			<div className="owl-carousel owl-theme home_slider">
				<div className="owl-item home_slider_item">
					<div className="home_slider_background" style ={{backgroundImage: "url('../images/home_slider_bcg.jpg')"}}></div>
					<div className="home_slider_content_container text-center">
						<div className="home_slider_content">
							<h1 data-animation-in="flipInX" data-animation-out="animate-out fadeOut">find your home</h1>
						</div>
					</div>
				</div>
				<div className="owl-item home_slider_item">
					<div className="home_slider_background" style ={{backgroundImage: "url('../images/home_slider_bcg.jpg')"}}></div>
					<div className="home_slider_content_container text-center">
						<div className="home_slider_content">
							<h1 data-animation-in="flipInX" data-animation-out="animate-out fadeOut">find your home</h1>
						</div>
					</div>
				</div>
				<div className="owl-item home_slider_item">
					<div className="home_slider_background" style ={{backgroundImage: "url('../images/home_slider_bcg.jpg')"}}></div>
					<div className="home_slider_content_container text-center">
						<div className="home_slider_content">
							<h1 data-animation-in="flipInX" data-animation-out="animate-out fadeOut">find your home</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="home_slider_nav_left home_slider_nav d-flex flex-row align-items-center justify-content-end">
				<img src={require("../images/nav_left.png")} alt=""/>
			</div>
		</div>
	</div>
	<div className="search_box">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="search_box_outer">
						<div className="search_box_title_inner">
							<div className="search_box_title_icon d-flex flex-column align-items-center justify-content-center"><img src={require("../images/search.png")} alt=""/></div>
							<span>search your home</span>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
	<FeaturedProperties />
	<div className="testimonials">
		<div className="testimonials_background_container prlx_parent">
			<div className="testimonials_background prlx" style ={{backgroundImage: "url('../images/testimonials_background.jpg')"}}></div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title text-center">
						<h3>clients testimonials</h3>
						<span className="section_subtitle">See our best offers</span>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-10 offset-lg-1">					
					<div className="testimonials_slider_container">
						<div className="owl-carousel owl-theme testimonials_slider">
							<div className="owl-item">
								<div className="testimonials_item text-center">
									<p className="testimonials_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque libero. Vivamus vel interdum massa. Mauris ut felis vel diam pretium eleifend vel eu neque. Mauris a condimentum tortor. Cras nec molestie est. Nulla vel facilisis metus. Quisque tempus fermentum enim, in feugiat sem laoreet</p>
									<div className="testimonial_user">
										<div className="testimonial_image mx-auto">
											<img src={require("../images/person.jpg")} alt="https://unsplash.com/@remdesigns"/>
										</div>
										<div className="testimonial_name">natalie smith</div>
										<div className="testimonial_title">Client in California</div>
									</div>
								</div>
							</div>
							<div className="owl-item">
								<div className="testimonials_item text-center">
									<p className="testimonials_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque libero. Vivamus vel interdum massa. Mauris ut felis vel diam pretium eleifend vel eu neque. Mauris a condimentum tortor. Cras nec molestie est. Nulla vel facilisis metus. Quisque tempus fermentum enim, in feugiat sem laoreet</p>
									<div className="testimonial_user">
										<div className="testimonial_image mx-auto">
											<img src={require("../images/person.jpg")} alt="https://unsplash.com/@remdesigns"/>
										</div>
										<div className="testimonial_name">natalie smith</div>
										<div className="testimonial_title">Client in California</div>
									</div>
								</div>
							</div>
							<div className="owl-item">
								<div className="testimonials_item text-center">
									<p className="testimonials_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque libero. Vivamus vel interdum massa. Mauris ut felis vel diam pretium eleifend vel eu neque. Mauris a condimentum tortor. Cras nec molestie est. Nulla vel facilisis metus. Quisque tempus fermentum enim, in feugiat sem laoreet</p>
									<div className="testimonial_user">
										<div className="testimonial_image mx-auto">
											<img src={require("../images/person.jpg")} alt="https://unsplash.com/@remdesigns"/>
										</div>
										<div className="testimonial_name">natalie smith</div>
										<div className="testimonial_title">Client in California</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="workflow">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title text-center">
						<h3>see how we operate</h3>
						<span className="section_subtitle">What you need to do</span>
					</div>
				</div>
			</div>
			<div className="row workflow_row">
				<div className="workflow_rocket"><img src={require("../images/rocket.png")} alt=""/></div>
				<div className="col-lg-4 workflow_col">
					<div className="workflow_item">
						<div className="workflow_image_container d-flex flex-column align-items-center justify-content-center">
							<div className="workflow_image_background">
								<div className="workflow_circle_outer trans_200"></div>
								<div className="workflow_circle_inner trans_200"></div>
								<div className="workflow_num text-center trans_200"><span>01.</span></div>
							</div>
							<div className="workflow_image">
								<img src={require("../images/workflow_1.png")} alt=""/>
							</div>
						</div>
						<div className="workflow_item_content text-center">
							<div className="workflow_title">Choose a Location</div>
							<p className="workflow_text">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 workflow_col">
					<div className="workflow_item">
						<div className="workflow_image_container d-flex flex-column align-items-center justify-content-center">
							<div className="workflow_image_background">
								<div className="workflow_circle_outer trans_200"></div>
								<div className="workflow_circle_inner trans_200"></div>
								<div className="workflow_num text-center trans_200"><span>02.</span></div>
							</div>
							<div className="workflow_image">
								<img src={require("../images/workflow_2.png")} alt=""/>
							</div>							
						</div>
						<div className="workflow_item_content text-center">
							<div className="workflow_title">Find the Perfect Home</div>
							<p className="workflow_text">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 workflow_col">
					<div className="workflow_item">
						<div className="workflow_image_container d-flex flex-column align-items-center justify-content-center">
							<div className="workflow_image_background">
								<div className="workflow_circle_outer trans_200"></div>
								<div className="workflow_circle_inner trans_200"></div>
								<div className="workflow_num text-center trans_200"><span>03.</span></div>
							</div>
							<div className="workflow_image">
								<img src={require("../images/workflow_3.png")} alt=""/>
							</div>							
						</div>
						<div className="workflow_item_content text-center">
							<div className="workflow_title">Move in your new life</div>
							<p className="workflow_text">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="cta_1">
		<div className="cta_1_background" style ={{backgroundImage: "url('../images/cta_1.jpg')"}}></div>
		<div className="container">
			<div className="row">
				<div className="col">					
					<div className="cta_1_content d-flex flex-lg-row flex-column align-items-center justify-content-start">
						<h3 className="cta_1_text text-lg-left text-center">Do you want to talk with one of our <span>real estate experts?</span></h3>
						<div className="cta_1_phone">Call now:   +0080 234 567 84441</div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</div>
)
export default Home;
	
	

