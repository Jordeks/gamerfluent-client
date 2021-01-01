import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const PostCard = (props) => {
    const { title, content, username, id } = props
    return (
        <Draggable key={id} draggableId={(id).toString()}>
        {(provided) => (
            <div className='card' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className='card__side card__side--front card__side--post'>
                        <h1>{ title }</h1> 
                        <h4>By: { username }</h4> 
                    </div>        
                    <div className='card__side card__side--back'>
                        <p>{ content }</p>
                    </div>
            </div>
        )}
        </Draggable>
        
    )
}

export default PostCard
