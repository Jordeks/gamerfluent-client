import React from 'react'
import NewsContainer from './NewsContainer'
import PostContainer from './PostContainer'
import { NavLink } from 'react-router-dom'


const DashContent = () => {
    return (
        <div className='dashboard__content'>
            <h1 className='heading-secondary'>Welcome to your Dashboard!</h1>
            <NavLink className='button' to="/">Home</NavLink>
            <NewsContainer />
            <PostContainer />
        </div>
    )
}

export default DashContent
