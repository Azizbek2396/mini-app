import React from 'react';

const SignUp = () => {
    return (
        <div className="container-md py-3 ">
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Your first name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Your last name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Your email address" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Your password" />
                </div>
                <button type="submit" className="btn btn-success">
                    Sign Up 
                </button>
            </form>
        </div>
    )
}

export default SignUp
