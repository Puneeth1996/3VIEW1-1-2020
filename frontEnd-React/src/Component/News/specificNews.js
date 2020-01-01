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
    
    componentDidMount(){
        axios
            .get('http://localhost/3VIEW1-1-2020/REST-3V/product/read.php')
            .then(res => {
                this.setState({
                    NewsData: res.data.records
                })
            })
            .catch(err => console.log("Error When Try To Fetch Data :" + err ))
    }
    render() {
        let ValueNew 
        // console.log(this.state.NewsData)
        this.state.NewsData.map( oneNew => {
            // console.log(oneNew)
            if(oneNew.id === this.props.match.params.number){
                ValueNew = oneNew
            }
        })
        const ourNew = ValueNew
        console.log(ourNew)
        return (
            <div>
                <Banner >
                    News - {this.props.match.params.number} 
                </Banner>
                {/* <h1> 1231{reqNews.Publish_date} </h1> */}
            </div>
        )
    }
}
