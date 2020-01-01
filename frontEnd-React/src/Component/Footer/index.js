import React, { Component } from 'react'
import Credits from './Credits'
import BigFooter from './BigFooter'

export default class Footer extends Component {
    render() {
        return (
            <>
                <BigFooter />
                <Credits />
            </>
        )
    }
}