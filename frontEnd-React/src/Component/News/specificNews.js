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
        this.getData()
        // let Blog_unique_id =  this.props.match.params.string
        // console.log(Blog_unique_id)
        // const resp = await fetch('http://localhost:8080/3VIEW1-1-2020/REST-3V/blog/readOne.php', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //             Blog_unique_id: Blog_unique_id,
        //         }),
        // })
        // if(await resp.json()){
        //     this.setState({
        //         NewsData: resp.data.Blogs_data
        //     })
        // }
        // else{
        //     console.log('there was no records found with the ' + Blog_unique_id)
        // }
    }
    
    getData = async () => {

        // axios({
        //     method: 'post',
        //     url: 'myurl',
        //     data: bodyFormData,
        //     headers: {'Content-Type': 'multipart/form-data' }
        //     })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });

        const form = new FormData()
        form.set('Blog_unique_id', this.props.match.params.string)
        const response = await axios.post('http://localhost:8080/3VIEW1-1-2020/REST-3V/blog/readOne.php', form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
        console.log(response.data)






        // // create a new XMLHttpRequest
        // var xhr = new XMLHttpRequest()
        // console.log(this.props.match.params.string)

        // // get a callback when the server responds
        // xhr.addEventListener('load', () => {
        // // update the state of the component with the result here
        // console.log(xhr.responseText)
        // })
        // // open the request with the verb and the url
        // xhr.open('POST', 'http://localhost:8080/3VIEW1-1-2020/REST-3V/blog/readOne.php')
        // // send the request
        // xhr.send([{"key":"Blog_unique_id","value":"plane*car*","description":""}])
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
