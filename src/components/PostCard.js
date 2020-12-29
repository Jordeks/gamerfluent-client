import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card__side card__side--front'>
                    <h1>Full Name of Current User</h1> 
                    <h4>By: { username }</h4> 
                </div>        
                <div className='card__side card__side--back'>
                    <p>{ content }</p>
                </div>
            </div>
        )
    }
}
