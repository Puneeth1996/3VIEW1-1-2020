import React, { Component } from 'react'
import style from './index.module.css'

export default class TagFeature extends Component {
    render() {
        // console.log(this.props.tag)
        return (
            <div className={style.tagContainer}>
                { this.props.tag.map((answer, i) => <li key={i} className={style.tagFeature}><span className={style.tagText}>{answer}</span></li> ) }
            </div>
        )
    }
}
