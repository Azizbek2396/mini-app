import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../redux/login/loginAction';

const SignIn = ({ loginAction, loading, error }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        loginAction(username, password);
        localStorage.setItem('username', username);
    }
    return (
        <div className="container-md py-3 ">
            <form onSubmit={handleSubmit}>
                <h3 className="text-center">Login Page</h3>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Your password" />
                </div>
                <button type="submit"  className="btn btn-success w-100">
                    Sign in{
                        loading && 
                        <div className="spinner-border text-primary spinner-border-sm ml-3" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }
                     
                </button>
                {error && <div className="alert alert-danger mt-2" role="alert">
                    You can't access :( __--__ {error.message}
                </div>
                }
            </form>
            
        </div>
    )
}

const mapState = (state) => {
    return {
        loading: state.login.loading,
        error: state.login.error
    }
}

export default connect(mapState, {loginAction})(SignIn)
