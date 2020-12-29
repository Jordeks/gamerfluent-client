import React, { Component } from 'react'
import Post from '../components/Post'

export default class PostContainer extends Component {
    render() {
        return (
            <div>
                <h1>Hi From PostContainer</h1>
                <Post />
            </div>
        )
    }
}
