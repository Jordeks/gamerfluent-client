import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { getNews } from '../services/news'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const NewsContainer = () => {

    const [ blogs, setBlogs ] = useState([])

    useEffect(() => {
        getNews()
        .then(data => {
                setBlogs(data)
        })
    }, [])

    // this will eventually iterate through the most liked blogs and content 
    return (
        <div className='cards'>
            { blogs.map(blog => <NewsCard key={blog.id} {...blog}/>) }
        </div>
    )
}

export default NewsContainer