import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default class NewsCard extends Component {
    render() {
        const { id,Blog_unique_id,Publish_date,Main_title,Sub_title,Author,category,desp_small,desp_full,img } = this.props.post
        return (
            <div className={style.newsContainer}>
                <Link to={`/News/${Blog_unique_id}`}><div className={style.newsTitle}>{Main_title}</div> </Link>
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
                <div className={style.imgContainer}>
                    <img src={require('./news_1.jpg')} />
                </div>
                <div className={style.newsDescription}>
                    <p>{desp_full} </p>
                </div>
                <button className={style.readMore}>Read More</button>
            </div>
        )
    }
}