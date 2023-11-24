import React, { useState } from 'react'
import image from './image/gradient-circle.png'
import './form.css'

function FormValidation() {
    const [input, setInput] = useState({})
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
        // console.log({...input,[e.target.name]:e.target.value})
    }
    const CheckValidate = (input) => {
        console.log(input.name)
        const errors = {}

        if (input.name === "" || input.name === undefined) {
            errors.name = 'set name*'
            console.log(errors)
        }
        if (input.email === "" || input.email === undefined) {
            errors.email = 'set email*'
            console.log(errors)
        }
        if (input.password === "" || input.password === undefined || input.password.length < 6) {
            errors.password = 'Enter 6 digit password*'
            console.log(errors)
        }
        // if(input.name != '' && input.email != '' && input.password != '' ){
        //     alert('Login Successfullyy...')
        //     // window.location.reload();
        // }
        return errors 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(CheckValidate(input))
        
    }

    return (
        <>
            <div className="gradiant-position">
                <img src={image} alt="" srcset="" className='image-fluid img1' />
                <img src={image} alt="" srcset="" className='image-fluid position-absolute end-0 bottom-0 ' />
            </div>
            <div className="container d-flex  justify-content-center ">
                <form action="" className='text-center  col-6 mt-5  form-bg' onSubmit={handleSubmit}>
                    <h1 className='mb-4 form-title text-white fw-bold'>LOGIN <span className='text-gradiant'>FORM</span></h1>
                    <input type="text" name='name' placeholder='Enter Your Name' className='form-control mb-3 border-0' onChange={handleChange} />
                    <p className='mb-3 ms-2  text-danger text-start'>{errors && errors.name}</p>
                    <input type="email" name='email' placeholder='Enter Your Email' className='form-control mb-3 border-0' onChange={handleChange} />
                    <p className='mb-3 ms-2  text-danger text-start'>{errors && errors.email}</p>
                    <input type="Password" name='password' placeholder='Enter Your Password' className='form-control mb-3 border-0' onChange={handleChange} />
                    <p className='mb-3 ms-2  text-danger text-start'>{errors && errors.password}</p>
                    <button className='btn btn-gradiant w-100 fw-bold fs-3 text-white border-0'> Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormValidation
