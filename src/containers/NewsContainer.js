import React, { Component } from 'react'
import NewsCard from '../components/NewsCard'

export default class NewsContainer extends Component {
    render() {
        return (
            <>
                <h1>I HOLD ALL THE NEWS</h1>
                <NewsCard />
            </>
        )
    }
}
