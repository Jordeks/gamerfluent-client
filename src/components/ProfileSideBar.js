import React from 'react'
import profpic from '../imgs/profpic.jpg'

const ProfileSideBar = () => {
    return (
        <div className='sidebar'>
            <figure className='sidebar__item'>
                <img src={profpic} alt='profile-pic' className='sidebar__pic'></img>
            </figure>
            <div>
                <h2 className='sidebar__item'> Full Name</h2>
                <h3 className='sidebar_item'>Username</h3>
            </div>
            
        </div>
    )
}

export default ProfileSideBar
