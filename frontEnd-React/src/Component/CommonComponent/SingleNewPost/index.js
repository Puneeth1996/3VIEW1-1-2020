import React, { Component } from 'react'
import style from './index.module.css'

export default class SingleNewPost extends Component {
    render() {
        // console.log(this.props.tag)
        // console.log(this.props.blog_data)
        const { Publish_date,Main_title,Author,category,desp_full } = this.props.blog_data.Blog_data_single
        return (
            <div className={style.SingleNewPost}>
                <div className={style.parallax} style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/News/news_1.jpg)"}}>
                    <div className={style.parallaxContent}>
                        <div className={style.newsTitle}>{Main_title}</div>             
                        <div className={style.newMeta}>
                            <div className={style.author}>
                                <div className={style.author_icon}>
                                    <img src={require('./profile.svg')} alt=""/>
                                    <span>By {Author}</span>
                                </div>
                            </div>
                            <div className={style.category}>
                                <div className={style.category_icon}>
                                    <img src={require('./favorite.svg')} alt=""/>
                                    <span>Category {category}</span>
                                </div>
                            </div>
                            <div className={style.postDate}>
                                <img src={require('./calendar.png')} alt=""/>
                                <span>On {Publish_date}</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={style.contentDesc}>
                    <p>{desp_full}</p>
                </div>
            </div>
        )
    }
}
