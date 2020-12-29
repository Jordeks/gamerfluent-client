import React, { Component } from 'react'
import profpic from '../imgs/profpic.jpg'


export default class ProfileSideBar extends Component {

    render (){
        return (
            <div className='sidebar'>
                <figure className='sidebar__item'>
                    <img src={profpic} alt='profile-pic' className='sidebar__pic'></img>
                </figure>
                <div className='sidebar__item'>
                    <h2 className='sidebar__header'> Full Name</h2>
                    <h3 className='sidebar__subheader'>Username</h3>
                </div>
                <div className='sidebar__item sidebar__item--last'>
                    <h2 className='sidebar__header'>Level: 49</h2> 
                    <h2 className='sidebar__header'>XP: 14/40</h2>
                    <div>PROGRESS BAR HERE</div>
                </div>
                
            </div>
        )
    }
}