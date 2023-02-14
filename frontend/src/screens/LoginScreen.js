import React, { Component } from 'react'

export default class SignIn extends Component {
    constructor(props) {
        super (props)
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const{ email, password } = this.state;
        console.log(email, password);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className='my-3'>
                    <label>Email Address</label>
                    <input type="email" className='form-control' placeholder='Enter email' required onChange={(e) => this.setState({ email: e.target.value})}></input>
                </div>

                <div className='my-3'>
                    <label>Password</label>
                    <input type="password" className='form-control' placeholder='Enter password' required onChange={(e) => this.setState({ password: e.target.value})}></input>
                </div>

                <div className='d-grid'>
                    <button type='submit' className='btn btn-primary'>
                        Sign In
                    </button>
                </div>
                <p className='forgot-password text-right'>
                    New User <a href='/register'>Sign Up?</a>
                </p>
            </form>
        )
    }
}