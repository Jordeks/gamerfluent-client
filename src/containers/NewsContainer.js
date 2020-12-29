import React, { Component } from 'react'
import NewsCard from '../components/NewsCard'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

export default class NewsContainer extends Component {

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
            <div className='cards'>
                <h1>I HOLD ALL THE NEWS</h1>
                { this.state.blogs.map(blog => <NewsCard className='card' key={blog.id} {...blog}/>) }
                
            </div>
        )
    }
}
