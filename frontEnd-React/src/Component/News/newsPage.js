import React, { Component } from 'react'
import Banner from '../CommonComponent/Banner'
import NewsCard from '../CommonComponent/NewsCard'
import axios from 'axios'
import style from './index.module.css'

export default class newsPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }
    
    componentDidMount(){
        axios
            .get('http://localhost/3VIEW1-1-2020/REST-3V/product/read.php')
            .then(res => {
                this.setState({
                    posts: res.data.records
                })
            })
            .catch(err => console.log("Error When Try To Fetch Data :" + err ))
    }
    render() {
        const { posts } = this.state

        return (
            <div>                
                <Banner >
                    News
                </Banner>
                <div>
                    {
                        posts.length ?

                        posts.map(post => <NewsCard post={post} key={post.id} /> ) :

                        <h1 className={style.noBlogYet}>No Blogs Yet</h1>
                    }
                </div>
            </div>
        )
    }
}
