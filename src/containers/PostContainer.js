import React, { useState } from 'react'
import PostCard from '../components/PostCard'
import Modal from '../components/Modal'
import sprite from '../imgs/sprite.svg'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { getBlogs } from '../services/blog'

// will iterate through current users blogs 

const PostContainer = () => {
    
    const [blogs, setBlogs] = useState([])
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState(
                            {
                                id: null,
                                title: '',
                                content: '',
                            })

    const toggleModal = () => setModal({modal: !modal})

    const openNewModal = () => {setModal({
        modal: true, 
        })
        setForm({
            title: '',
            content: '', 
        })
    }

    const handleOnDragEnd = (result) => {
        // const items = Array.from(blogs);
        // const [reorderedItem] = items.splice(result.source.index, 1);
        // items.splice(result.destination.index, 0, reorderedItem);

      }

    return (
        <div>
            <DragDropContext onDragEnd={ handleOnDragEnd }>
                <Droppable droppableId='cards'>
                        {(provided) => (
                    <div className='dashboard__posts'  {...provided.droppableProps} ref={provided.innerRef}>
                        <button className='button' onClick={ openNewModal }>
                            <svg className='icon icon--light'>
                                <use href={sprite + '#icon-plus'} />
                            </svg>
                            <span className='button__text'>Add A Post</span>
                        </button>
                        
                            <div className='cards'>
                                { blogs.map((blog, index) => <PostCard key={blog.id} {...blog} index={index}/> )}
                            </div>
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
            <Modal toggle={ toggleModal } {...form} display={ modal } />
        </div>
    )
}

export default PostContainer



// export default class PostContainer extends Component {

    

//     state = {
//         blogs: [], 
//         updateBlogs: [],
//         modal: false, 
//         form: {
//             id: null,
//             title: '',
//             content: '',
//         } ,
//     }

//     componentDidMount(){
//         fetch('http://localhost:3000/api/v1/blogs')
//             .then(response => response.json())
//             .then(data => this.setState({blogs: data}));
//     }

//     addBlog = (blog) => {
//         fetch(`http://localhost:3000/blogs`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(blog),
//         })
//         .then(response => response.json())
//         .then(newBlog => this.setState({blogs: [...this.state.blogs, newBlog]}))
//       }

//       toggleModal = () => this.setState({modal: !this.state.modal})

//       openNewModal = () => {this.setState({
//         modal: true, 
//         form: {
//             title: '',
//             content: '', 
//         }
//     })
//   }

    //    handleOnDragEnd = (result) => {
    //     const items = Array.from(this.state.blogs);
    //     const [reorderedItem] = items.splice(result.source.index, 1);
    //     items.splice(result.destination.index, 0, reorderedItem);

    //   }

//     render() {
//         return (
            // <>
            //     <DragDropContext onDragEnd={this.handleOnDragEnd}>
            //     <Droppable droppableId='cards'>
            //             {(provided) => (
            //         <div className='dashboard__posts'  {...provided.droppableProps} ref={provided.innerRef}>
            //             <button className='button' onClick={ this.openNewModal }>
            //                 <svg className='icon icon--light'>
            //                     <use href={sprite + '#icon-plus'} />
            //                 </svg>
            //                 <span className='button__text'>Add A Post</span>
            //             </button>
                        
            //                 <div className='cards'>
            //                     { this.state.blogs.map((blog, index) => <PostCard key={blog.id} {...blog} index={index}/> )}
            //                 </div>
            //             {provided.placeholder}
            //         </div>
            //         )}
            //     </Droppable>
            //     </DragDropContext>
            // <Modal toggle={this.toggleModal} {...this.state.form} display={this.state.modal} />
            // </>
//             )
//     }
// }
