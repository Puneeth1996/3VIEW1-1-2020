import React, { Component } from 'react'
import style from './index.module.css'
import HeaderTitle from '../../CommonComponent/HeaderTitle'
import PersonCard from '../../CommonComponent/PersonCard'
export default class BoardMemb extends Component {
    render() {
        return (
            <div className={style.BoardMemb}>
                <HeaderTitle
                    title='Board Member'
                    subTitle=''
                />
                <PersonCard />
            </div>
        )
    }
}