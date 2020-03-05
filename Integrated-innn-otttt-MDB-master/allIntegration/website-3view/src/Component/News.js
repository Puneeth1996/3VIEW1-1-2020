import React from 'react';

const News = () => (
<div className="super_container">
	<div className="home">
		<div className="home_background" style={{backgroundImage: "url('../images/news.jpg')"}}></div>		
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="home_content">
						<div className="home_title">
							<h2>listings</h2>
						</div>
						<div className="breadcrumbs">
							<span><a href="index.html">Home</a></span>
							<span><a href="#"> News</a></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="news">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 news_content_col">
					<div className="news_post">
						<div className="news_post_date">Dec 06, 2017</div>
						<div className="news_post_title"><a href="#">All the papers you need to own a house</a></div>
						<div className="news_post_meta">
							<ul>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/profile.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">By Lore Papp</a></span>
								</li>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/favorite.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">in Uncategorized</a></span>
								</li>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/speech-bubble.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">3 Comments</a></span>
								</li>
							</ul>
						</div>
						<div className="news_post_image">
							<img src={require("../images/news_1.jpg")} alt="https://unsplash.com/@alcasqui"/>
						</div>
						<div className="news_post_text">
							<p>Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante. </p>
						</div>
						<div className="button news_post_button"><a href="#">read more</a></div>
					</div>
					<div className="news_post">
						<div className="news_post_date">Dec 06, 2017</div>
						<div className="news_post_title"><a href="#">All the papers you need to own a house</a></div>
						<div className="news_post_meta">
							<ul>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/profile.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">By Lore Papp</a></span>
								</li>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/favorite.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">in Uncategorized</a></span>
								</li>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/speech-bubble.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">3 Comments</a></span>
								</li>
							</ul>
						</div>
						<div className="news_post_image">
							<img src={require("../images/news_2.jpg")} alt="https://unsplash.com/@brianbabb"/>
						</div>
						<div className="news_post_text">
							<p>Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante. </p>
						</div>
						<div className="button news_post_button"><a href="#">read more</a></div>
					</div>
					<div className="news_post">
						<div className="news_post_date">Dec 06, 2017</div>
						<div className="news_post_title"><a href="#">All the papers you need to own a house</a></div>
						<div className="news_post_meta">
							<ul>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/profile.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">By Lore Papp</a></span>
								</li>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/favorite.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">in Uncategorized</a></span>
								</li>
								<li className="news_post_meta_item">
									<div className="news_post_meta_icon">
										<img src={require("../images/speech-bubble.svg")} alt="https://www.flaticon.com/authors/lucy-g"/>
									</div>
									<span><a href="#">3 Comments</a></span>
								</li>
							</ul>
						</div>
						<div className="news_post_image">
							<img src={require("../images/news_3.jpg")} alt="https://unsplash.com/@aahubs"/>
						</div>
						<div className="news_post_text">
							<p>Donec ullamcorper nulla non metus auctor fringi lla.Curabitur blandit tempus porttitor. Proin quis bibendum mi. Donec luctus vestibulum sapien, sit amet vehicula enim aliquam at. Suspendisse non urna bibendum, dictum quam sit amet, aliquet nisi. In dapibus aliquet porttitor. Pellentesque at malesuada ante. </p>
						</div>
						<div className="button news_post_button"><a href="#">read more</a></div>
					</div>
					<div className="news_post_nav">
						<ul>
							<li className="news_post_nav_item active"><a href="#">01.</a></li>
							<li className="news_post_nav_item"><a href="#">02.</a></li>
							<li className="news_post_nav_item"><a href="#">03.</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-4 news_sidebar_col">
					<div className="news_sidebar">
						<div className="sidebar_search">
							<form action="post">
								<div id="search_form" className="search_form">
									<input id="news_search" className="news_search" type="search" placeholder="Search" required="required" data-error="Valid keywords required."/>
									<button id="search_submit_btn" type="submit" className="search_submit_btn trans_300" value="Submit">
										<img src={require("../images/search.png")} alt=""/>
									</button>
								</div>
							</form>
						</div>
						<div className="sidebar_section">
							<div className="sidebar_title">archives</div>
							<ul className="sidebar_list">
								<li className="sidebar_list_item"><a href="#">March 2017</a></li>
								<li className="sidebar_list_item"><a href="#">April 2017</a></li>
								<li className="sidebar_list_item"><a href="#">May 2017</a></li>
								<li className="sidebar_list_item"><a href="#">June 2017</a></li>
							</ul>
						</div>
						<div className="sidebar_section">
							<div className="sidebar_title">categories</div>
							<ul className="sidebar_list">
								<li className="sidebar_list_item"><a href="#">Uncategorized</a></li>
								<li className="sidebar_list_item"><a href="#">Useful Information</a></li>
								<li className="sidebar_list_item"><a href="#">Events</a></li>
								<li className="sidebar_list_item"><a href="#">Real Estate Tips</a></li>
								<li className="sidebar_list_item"><a href="#">Home Owners</a></li>
								<li className="sidebar_list_item"><a href="#">Vacation Homes</a></li>
							</ul>
						</div>
						<div className="sidebar_section">
							<div className="sidebar_title">latest posts</div>
							<div className="latest_posts_container">
								<div className="latest_post">
									<div className="latest_post_image"><img src={require("../images/latest_1.jpg")} alt=""/></div>
									<div className="latest_post_content">
										<div className="latest_post_title"><a href="#">A simple blog post</a></div>
										<div className="latest_post_meta">
											<span><a href="#">by Jane Smith</a> / Aug 25, 2016</span>
										</div>
									</div>
								</div>
								<div className="latest_post">
									<div className="latest_post_image"><img src={require("../images/latest_2.jpg")} alt=""/></div>
									<div className="latest_post_content">
										<div className="latest_post_title"><a href="#">Dream destination for you</a></div>
										<div className="latest_post_meta">
											<span><a href="#">by Jane Smith</a> / Aug 25, 2016</span>
										</div>
									</div>
								</div>
								<div className="latest_post">
									<div className="latest_post_image"><img src={require("../images/latest_3.jpg")} alt=""/></div>
									<div className="latest_post_content">
										<div className="latest_post_title"><a href="#">Tips to travel light</a></div>
										<div className="latest_post_meta">
											<span><a href="#">by Jane Smith</a> / Aug 25, 2016</span>
										</div>
									</div>
								</div>
								<div className="latest_post">
									<div className="latest_post_image"><img src={require("../images/latest_4.jpg")} alt=""/></div>
									<div className="latest_post_content">
										<div className="latest_post_title"><a href="#">How to pick your vacation</a></div>
										<div className="latest_post_meta">
											<span><a href="#">by Jane Smith</a> / Aug 25, 2016</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="sidebar_section">
							<div className="sidebar_title">instagram</div>
							<div className="gallery_container">
								<ul className="gallery_items d-flex flex-row align-items-start justify-content-between flex-wrap">
									<li className="gallery_item">
										<a className="colorbox" href="https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=720&q=80">
											<img src={require("../images/gallery_1.jpg")} alt="https://unsplash.com/@alcasqui"/>
										</a>
									</li>
									<li className="gallery_item">
										<a className="colorbox" href="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=720&q=80">
											<img src={require("../images/gallery_2.jpg")} alt="https://unsplash.com/@etnbr"/>
										</a>
									</li>
									<li className="gallery_item">
										<a className="colorbox" href="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=634&q=80">
											<img src={require("../images/gallery_3.jpg")} alt="https://unsplash.com/@jbriscoe"/>
										</a>
									</li>
									<li className="gallery_item">
										<a className="colorbox" href="https://images.unsplash.com/photo-1464375573282-035539096568?auto=format&fit=crop&w=720&q=80">
											<img src={require("../images/gallery_4.jpg")} alt="https://unsplash.com/@marcusneto"/>
										</a>
									</li>
									<li className="gallery_item">
										<a className="colorbox" href="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=720&q=80">
											<img src={require("../images/gallery_5.jpg")} alt="https://unsplash.com/@insolitus"/>
										</a>
									</li>
									<li className="gallery_item">
										<a className="colorbox" href="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=720&q=80">
											<img src={require("../images/gallery_6.jpg")} alt="https://unsplash.com/@pperkins"/>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="sidebar_section">
							<div className="hello">
								<div className="footer_col_title">say hello</div>
								<div className="footer_contact_form_container">
									<form id="hello_contact_form" className="footer_contact_form" action="post">
										<input id="hello_contact_form_name" className="input_field contact_form_name" type="text" placeholder="Name" required="required" data-error="Name is required."/>
										<input id="hello_contact_form_email" className="input_field contact_form_email" type="email" placeholder="E-mail" required="required" data-error="Valid email is required."/>
										<textarea id="hello_contact_form_message" className="text_field contact_form_message" name="message" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
										<button id="hello_contact_send_btn" type="submit" className="contact_send_btn trans_200" value="Submit">send</button>
									</form>
								</div>
							</div>
						</div>						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
)
export default News;
// src={require("../images/tag.svg")}
// style={{backgroundImage: "url('../images/listings.jpg')"}}
