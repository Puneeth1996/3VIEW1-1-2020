import React, { Component } from 'react'
import Banner from '../CommonComponent/Banner'
import NotFound from '../NotFound'
import SingleNewPost from '../CommonComponent/SingleNewPost'

import axios from 'axios'
export default class specificNews extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            NewsData: []
        }
    }
    
    componentDidMount = async () => {
        this.getData()
    }
    
    getData = async () => {

        const form = new FormData()
        form.set('Blog_unique_id', this.props.match.params.string)
        const response = await axios.post('http://localhost:8080/3VIEW1-1-2020/REST-3V/blog/readOne.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        // console.log(response.data)
        this.setState({
            NewsData: response.data
        })
        // console.log(this.state.NewsData)
    }
    render() {
        return (
            <div>

                {
                
                (this.state.NewsData.blog_unique_id == this.props.match.params.string) ? 
                
                    <NotFound/>
                    
                :

                    <>
                        <Banner >
                            News
                        </Banner>
                        <SingleNewPost blog_unique_id={this.props.match.params.string} />
                    </>
                }
            </div>
        )
    }
}
