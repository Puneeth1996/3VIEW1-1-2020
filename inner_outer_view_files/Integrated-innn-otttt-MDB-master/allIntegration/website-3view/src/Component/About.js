import React from 'react';
const About = () => (
<div className="super_container">
	<div className="home">
		<div className="home_background" style ={{backgroundImage: "url('../images/home_background.jpg')"}}></div>
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="home_content">
						<div className="home_title">
							<h2>about us</h2>
						</div>
						<div className="breadcrumbs">
							<span><a href="index.html">Home</a></span>
							<span><a href="#"> About Us</a></span>
							<span><a href="#"> Our Clients</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="intro">
		<div className="container">
			<div className="row">
				<div className="col-lg-7 order-lg-1 order-2">
					<h2 className="intro_title">3 View Promise</h2>
					<div className="intro_subtitle">Sed vestibulum lectus ut leo molestie, id suscipit magna</div>
					<p className="intro_text">Donec ullamcorper nulla non metus auctor fringi lla. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tellus eros, placerat quis fermentum et, viverra sit amet lacus. Nam gravida semper augue id sagittis. Cras nec arcu quis velit tempor porttitor sit amet vel risus. Sed vestibulum lectus ut leo molestie, id suscipit magna mattis. Vivamus nisl ligula, varius congue dui sit amet, vestibulum sollicitudin mauris. Vestibulum quis ligula in nunc varius maximus ac et nunc. Nulla sed magna turpis.</p>
				</div>
				<div className="col-lg-5 order-lg-2 order-1">
					<div className="intro_image">
						<img  src={require("../images/intro.png")} alt=""/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="milestones">
		<div className="milestones_background parallax-window" data-parallax="scroll" data-image-src="images/milestones.jpg"></div>
		<div className="container">
			<div className="row">
				<div className="col-lg-2 milestone_col">
					<div className="milestone text-center d-flex flex-column align-items-center justify-content-start">
						<div className="milestone_icon d-flex flex-column justify-content-end"><img src={require("../images/milestone_1.svg")} alt=""/></div>
						<div className="milestone_counter" data-end-value="310">0</div>
						<div className="milestone_text">houses sold</div>
					</div>
				</div>
				<div className="col-lg-2 milestone_col">
					<div className="milestone text-center d-flex flex-column align-items-center justify-content-start">
						<div className="milestone_icon d-flex flex-column justify-content-end"><img src={require("../images/milestone_2.svg")} alt=""/></div>
						<div className="milestone_counter" data-end-value="129">0</div>
						<div className="milestone_text">clients</div>
					</div>
				</div>
				<div className="col-lg-2 milestone_col">
					<div className="milestone text-center d-flex flex-column align-items-center justify-content-start">
						<div className="milestone_icon d-flex flex-column justify-content-end"><img src={require("../images/milestone_3.svg")} alt=""/></div>
						<div className="milestone_counter" data-end-value="14">0</div>
						<div className="milestone_text">agents</div>
					</div>
				</div>
				<div className="col-lg-2 milestone_col">
					<div className="milestone text-center d-flex flex-column align-items-center justify-content-start">
						<div className="milestone_icon d-flex flex-column justify-content-end"><img src={require("../images/milestone_4.svg")} alt=""/></div>
						<div className="milestone_counter" data-end-value="521">0</div>
						<div className="milestone_text">rents</div>
					</div>
				</div>
				<div className="col-lg-2 milestone_col">
					<div className="milestone text-center d-flex flex-column align-items-center justify-content-start">
						<div className="milestone_icon d-flex flex-column justify-content-end"><img src={require("../images/milestone_5.svg")} alt=""/></div>
						<div className="milestone_counter" data-end-value="1107">0</div>
						<div className="milestone_text">contracts</div>
					</div>
				</div>
				<div className="col-lg-2 milestone_col">
					<div className="milestone text-center d-flex flex-column align-items-center justify-content-start">
						<div className="milestone_icon d-flex flex-column justify-content-end"><img src={require("../images/milestone_6.svg")} alt=""/></div>
						<div className="milestone_counter" data-end-value="39">0</div>
						<div className="milestone_text">investments</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<div className="agents">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="section_title text-center">
						<h3>our team</h3>
						<span className="section_subtitle">The best out there</span>
					</div>
				</div>
			</div>
			<div className="row agents_row">
				<div className="col-lg-3 agent_col text-center">
					<div className="agent_image mx-auto">
						<img src={require("../images/agent_1.jpg")} alt="image by Andrew Robles"/>
					</div>
					<div className="agent_content">
						<div className="agent_name">michael williams</div>
						<div className="agent_role">Real Estate Agent</div>
						<div className="agent_social">
							<ul className="agent_social_list">
								<li className="agent_social_item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
								<li className="agent_social_item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li className="agent_social_item"><a href="#"><i className="fab fa-twitter"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 agent_col text-center">
					<div className="agent_image mx-auto">
						<img src={require("../images/agent_2.jpg")} alt="https://unsplash.com/@gabrielsilverio"/>
					</div>
					<div className="agent_content">
						<div className="agent_name">michael williams</div>
						<div className="agent_role">Real Estate Agent</div>
						<div className="agent_social">
							<ul className="agent_social_list">
								<li className="agent_social_item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
								<li className="agent_social_item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li className="agent_social_item"><a href="#"><i className="fab fa-twitter"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 agent_col text-center">
					<div className="agent_image mx-auto">
						<img src={require("../images/agent_3.jpg")} alt="https://unsplash.com/@mehdizadeh"/>
					</div>
					<div className="agent_content">
						<div className="agent_name">michael williams</div>
						<div className="agent_role">Real Estate Agent</div>
						<div className="agent_social">
							<ul className="agent_social_list">
								<li className="agent_social_item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
								<li className="agent_social_item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li className="agent_social_item"><a href="#"><i className="fab fa-twitter"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 agent_col text-center">
					<div className="agent_image mx-auto">
						<img src={require("../images/agent_4.jpg")} alt="https://unsplash.com/@michaeldam"/>
					</div>
					<div className="agent_content">
						<div className="agent_name">michael williams</div>
						<div className="agent_role">Real Estate Agent</div>
						<div className="agent_social">
							<ul className="agent_social_list">
								<li className="agent_social_item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
								<li className="agent_social_item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li className="agent_social_item"><a href="#"><i className="fab fa-twitter"></i></a></li>
							</ul>
						</div>
					</div>
				</div>				
			</div>
		</div>
	</div>
</div>
)
export default About;
