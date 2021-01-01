import React from 'react'
import { useForm } from "react-hook-form"

const Modal = () => {

    const { register, handleSubmit, errors } = useForm();

    const display = props.display ? 'block' : 'none'

    return (
        <div id="myModal" className="modal" style={{ display }}>
            <div className="modal__content">
                <span onClick={props.toggle} className="close">&times;</span>
                <form className='form' onSubmit={handleSubmit(props.onSubmit)}>  
                    <div className='form__group'>                 
                        <input placeholder="Title" 
                               className='form__input' 
                               type="text" name="title" 
                               ref={register({ required: true, maxLength: 20 })}  
                               onChange={props.onChange} 
                               value={props.title}/>
                        {errors.title && errors.title.type === 'required' && <span>This field is required</span>}
                        {errors.title && errors.title.type === 'maxLength' && <span>Maxium of 20 characters</span>}
                        <label htmlFor="title" className="form__label u-margin-left-small">Habit Name </label>
                    </div>
                    <div className='form__group'> 
                        <input placeholder="content" 
                               className='form__input' 
                               type="textarea" 
                               name="content" 
                               ref={register({ required: true, min: 1, max: 7  })} 
                               onChange={props.onChange} 
                               value={props.content}/>
                        {errors.content && errors.content.type === 'required' && <span>This field is required</span>}
                        <label htmlFor="content" className="form__label u-margin-left-small">Habit Frequency(per week)</label>
                    </div>
                    <input className='btn btn--small u-margin-left-small' type="submit" value="Submit" />
                </form>
            </div>
        </div> 
    )
}

export default Modal
