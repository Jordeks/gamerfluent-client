import React, { Component } from 'react'
import NewsContainer from '../containers/NewsContainer'

export default class NewsFeed extends Component {
    render() {
        return (
            <>
              <h1>Latest News</h1>  
              <div>
                <NewsContainer />
              </div>
            </>
        )
    }
}
