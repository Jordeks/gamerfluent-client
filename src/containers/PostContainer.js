import React, { Component } from 'react'
import PostCard from '../components/PostCard'

// will iterate through current users

export default class PostContainer extends Component {
    render() {
        return (
            <div>
                <h1>Hi From PostContainer</h1>
                <PostCard />
            </div>
        )
    }
}
