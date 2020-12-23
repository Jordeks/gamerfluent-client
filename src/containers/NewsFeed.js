import React, { Component } from 'react'
import NewsContainer from './NewsContainer'

export default class NewsFeed extends Component {
    render() {
        return (
            <div className='newsfeed'>
              <h1 className='heading-bold'>Latest News</h1>  
              <div className='news-container'>
                <NewsContainer />
              </div>
            </div>
        )
    }
}
