import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="container">
            <ul className='list-group d-flex flex-row'>
                <li className='list-group-item'><Link to='/counter'>Counter</Link></li>
                <li className='list-group-item'><Link to='/todo'>ToDo</Link></li>
                <li className='list-group-item'><Link to='/post'>Posts</Link></li>
                <li className='list-group-item'><Link to='/courses'>Courses</Link></li>
            </ul>
        </div>
    )
}
