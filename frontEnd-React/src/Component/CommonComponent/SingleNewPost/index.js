import React, { Component } from 'react'
import style from './index.module.css'

export default class SingleNewPost extends Component {
    render() {
        // console.log(this.props.tag)
        console.log(this.props.blog_data)
        const { id,Blog_unique_id,Publish_date,Main_title,Sub_title,Author,category,desp_small,desp_full,img } = this.props.blog_data.Blog_data_single
        return (
            <div className={style.SingleNewPost}>
                {img}
                <br/><br/>
                {Main_title}
                <br/><br/>
                By {Author} On {Publish_date} Category {category}
                <br/><br/><br/><br/>
                {Sub_title}
                <br/><br/><br/><br/><br/><br/><br/><br/>
                {desp_full}

            </div>
        )
    }
}
