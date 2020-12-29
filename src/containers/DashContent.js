import React from 'react'
import NewsContainer from './NewsContainer'
import PostContainer from './PostContainer'

const DashContent = () => {
    return (
        <div className='dashboard__content'>
            <h1 className='heading-secondary'>Welcome to your Dashboard!</h1>
            <NewsContainer />
            <PostContainer />
        </div>
    )
}

export default DashContent
