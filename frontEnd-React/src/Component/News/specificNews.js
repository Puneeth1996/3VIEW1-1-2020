import React, { Component } from 'react'
import Banner from '../CommonComponent/Banner'
import NotFound from '../NotFound'
import axios from 'axios'
export default class specificNews extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            NewsData: []
        }
    }
    
    componentDidMount = async () => {
        let Blog_unique_id =  this.props.match.params.string
        console.log(Blog_unique_id)
        const resp = await fetch('http://localhost/3VIEW1-1-2020/REST-3V/blog/readOne.php', {
            method: 'POST',
            body: JSON.stringify({
                    Blog_unique_id: Blog_unique_id,
                }),
        })
        if(await resp.json()){
            this.setState({
                NewsData: resp.data.Blogs_data
            })
        }
        else{
            console.log('there was no records found with the ' + Blog_unique_id)
        }
    }
    render() {
        return (
            <div>
                <Banner >
                    News
                </Banner>
            </div>
        )
    }
}
