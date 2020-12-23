import React, { Component } from 'react'

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
