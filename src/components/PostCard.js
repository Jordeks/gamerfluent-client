import React from 'react'

const PostCard = (props) => {
    const { title, content, username } = props
    return (
        <div className='card'>
                <div className='card__side card__side--front card__side--post'>
                    <h1>{ title }</h1> 
                    <h4>By: { username }</h4> 
                </div>        
                <div className='card__side card__side--back'>
                    <p>{ content }</p>
                </div>
        </div>
    )
}

export default PostCard
