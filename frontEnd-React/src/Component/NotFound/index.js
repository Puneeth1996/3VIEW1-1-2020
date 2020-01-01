import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'
export default class NotFound extends Component {
    render() {
        return (
            <div className={style.notfoundcontainer}>
                <div className={style.notfound}>
                    <div className={style.notfound404}>
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <Link to='/'>Go TO Homepage</Link>
                </div>
            </div>
        )
    }
}
