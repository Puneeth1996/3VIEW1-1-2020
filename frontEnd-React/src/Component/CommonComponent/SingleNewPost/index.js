import React, { Component } from 'react'
import style from './index.module.css'

export default class SingleNewPost extends Component {
    render() {
        // console.log(this.props.tag)
        // console.log(this.props.blog_data)
        const { id,Blog_unique_id,Publish_date,Main_title,Sub_title,Author,category,desp_small,desp_full,img } = this.props.blog_data.Blog_data_single
        return (
            <div className={style.SingleNewPost}>
                <div className={style.parallax}>
                    {Main_title}
                
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
        )
    }
}
