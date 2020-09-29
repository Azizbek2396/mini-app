import React from 'react'
import { Link } from 'react-router-dom'
import SignOutLInks from './SignOutLInks'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">My Website</Link>
                <SignOutLInks />
            </div>
        </nav>
    )
}

export default Navbar
