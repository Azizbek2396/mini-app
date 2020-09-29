import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const SignOutLInks = ({ loggedIn }) => {
    const username = localStorage.getItem('username');
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        history.push('/signin');
    }

    return (
        <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
                <li className="nav-item"><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
                <li onClick={handleLogout} className="nav-item"><NavLink to={loggedIn ? '/' : '/signin'} className="nav-link">{loggedIn ? 'Logout' : 'Login'}</NavLink></li>
                {loggedIn && <li className="nav-item bg-success rounded"><a className="nav-link" href="#">{username}</a></li> }
            </ul>
        </div>
    )
}

const mapState = (state) => {
    return {
        loggedIn: state.login.loggedIn
    }
}

export default connect(mapState)(SignOutLInks)
