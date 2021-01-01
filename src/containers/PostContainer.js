import React, { Component } from 'react'
import PostCard from '../components/PostCard'
import Modal from '../components/Modal'
import sprite from '../imgs/sprite.svg'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// will iterate through current users blogs 

export default class PostContainer extends Component {

    state = {
        blogs: [], 
        modal: false, 
        form: {
            id: null,
            title: '',
            content: '',
        } ,
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/blogs')
            .then(response => response.json())
            .then(data => this.setState({blogs: data}));
    }

    addBlog = (blog) => {
        fetch(`http://localhost:3000/blogs`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blog),
        })
        .then(response => response.json())
        .then(newBlog => this.setState({blogs: [...this.state.blogs, newBlog]}))
      }

      toggleModal = () => this.setState({modal: !this.state.modal})

      openNewModal = () => {this.setState({
        modal: true, 
        form: {
            title: '',
            content: '', 
        }
    })
  }

    render() {
        return (
            <>
                <DragDropContext>
                    <div className='dashboard__posts'>
                        <button className='button' onClick={ this.openNewModal }>
                            <svg className='icon icon--light'>
                                <use href={sprite + '#icon-plus'} />
                            </svg>
                            <span className='button__text'>Add A Post</span>
                        </button>
                        <Droppable droppableId='cards'>
                        {(provided) => (
                            <div className='cards' {...provided.droppableProps} ref={provided.innerRef}>
                                { this.state.blogs.map(blog => 
                                    <Draggable key={blog.id} draggableId={blog.id} >
                                    {(provided) => (
                                        <PostCard key={blog.id} {...blog} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}/> 
                                     
                                    )}
                                    </Draggable>
                                )}
                            </div>
                        )}
                        </Droppable>
                    </div>
                </DragDropContext>
            <Modal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} />
            </>
            )
    }
}
