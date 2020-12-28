import React from 'react'
import profpic from '../imgs/profpic.jpg'

const ProfileSideBar = () => {
    return (
        <div className='sidebar'>
            <figure className='sidebar__item'>
                <img src={profpic} alt='profile-pic' className='sidebar__profpic'></img>
            </figure>
        </div>
    )
}

export default ProfileSideBar
