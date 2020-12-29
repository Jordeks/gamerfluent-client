import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className='card card'>
                <div className='card__side card__side--front card__side--post'>
                    <h1>Full Name of Current User</h1> 
                    <h4>By: Username of Current User</h4> 
                </div>        
                <div className='card__side card__side--back'>
                    <p>Current User's blog content</p>
                </div>
            </div>
        )
    }
}
