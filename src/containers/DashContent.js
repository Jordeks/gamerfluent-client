import React from 'react'
import NewsContainer from './NewsContainer'
import PostContainer from './PostContainer'
import { NavLink } from 'react-router-dom'
import sprite from '../imgs/sprite.svg'


const DashContent = () => {
    return (
        <div className='dashboard__content'>
            <h1 className='heading-secondary'>Welcome to your Dashboard!</h1>
            <NavLink className='button' to="/">
                <svg className='icon'>
                    <use href={sprite + '#icon-home3'} />
                </svg>
            </NavLink>
            <NewsContainer />
            <PostContainer />
        </div>
    )
}

export default DashContent
