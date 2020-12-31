import React, { Component } from 'react'
import PostCard from '../components/PostCard'

// will iterate through current users blogs 

export default class PostContainer extends Component {

    state = {
        blogs: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/blogs')
            .then(response => response.json())
            .then(data => this.setState({blogs: data}));
    }

    render() {
        return (
            <>
                <div className = 'cards'>
                    { this.state.blogs.map(blog => <PostCard key={blog.id} {...blog}/>) }
                </div>
            </>
        )
    }
}
