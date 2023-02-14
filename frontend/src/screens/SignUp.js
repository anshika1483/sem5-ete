import React, { useState } from 'react'

const SignUp = () => {
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        uname: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input))
    }
        return (
            <form>
                <h3>Sign Up</h3>

                <div className='my-3'>
                    <label>First Name*</label>
                    <input type="text" className='form-control' placeholder='First Name' required onChange={(e) => this.setState({ fname: e.target.value})}></input>
                </div>

                <div className='my-3'>
                    <label>Last Name</label>
                    <input type="text" className='form-control' placeholder='Last Name' onChange={(e) => this.setState({ lname: e.target.value})}></input>
                </div>

                <div className='my-3'>
                    <label>Username*</label>
                    <input type="text" className='form-control' placeholder='Enter Username' required onChange={(e) => this.setState({ uname: e.target.value})}></input>
                </div>

                <div className='my-3'>
                    <label>Email Address*</label>
                    <input type="email" className='form-control' placeholder='Enter email' required onChange={(e) => this.setState({ email: e.target.value})}></input>
                </div>

                <div className='my-3'>
                    <label>Password*</label>
                    <input type="password" className='form-control' placeholder='Enter password' required onChange={(e) => this.setState({ password: e.target.value})}></input>
                </div>

                <div className='my-3'>
                    <label>Confirm Password*</label>
                    <input type="password" className='form-control' placeholder='Enter password' required></input>
                </div>

                <div className='my-3'>
                    <label>Phone Number*</label>
                    <input type="number" className='form-control' placeholder='Contact number' required onChange={(e) => this.setState({ password: e.target.value})}></input>
                </div>

                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>
                        Sign Up
                    </button>
                </div>
                <p className='forgot-password text-right'>
                    Already registered <a href='/sign-in'>Sign In?</a>
                </p>
            </form>
        )
}

export default SignUp