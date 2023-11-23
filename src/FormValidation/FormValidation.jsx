import React, { useState } from 'react'

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
    
        if (input.name == "" || input.name == undefined) {
            errors.name = 'set name'
            console.log(errors)
        }
        if (input.email == "" || input.name == undefined) {
            errors.email = 'set email'
            console.log(errors)
        }
        if (input.password == "") {
            errors.password = 'set password'
            console.log(errors)
        }
        return errors
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(CheckValidate(input))
    }

    return (
        <div className="container d-flex  justify-content-center ">
            <form action="" className='text-center  col-4 mt-5 ' onSubmit={handleSubmit}>
                <h1 className='mb-4'>Login Form</h1>
                <input type="text" name='name' placeholder='Enter Your Name' className='form-control mb-3 ' onChange={handleChange} />
                <p className='mb-3 text-danger text-start'>{errors && errors.name}</p>
                <input type="email" name='email' placeholder='Enter Your Email' className='form-control mb-3 ' onChange={handleChange} />
                <p className='mb-3 text-danger text-start'>{errors && errors.email}</p>
                <input type="Password" name='password' placeholder='Enter Your Password' className='form-control mb-3 ' onChange={handleChange} />
                <p className='mb-3 text-danger text-start'>{errors && errors.password}</p>
                <button className='btn btn-primary w-100'> Submit</button>
            </form>
        </div>

    )
}

export default FormValidation
