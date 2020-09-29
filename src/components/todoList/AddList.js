import React, { useState } from 'react';
import List from './List';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/todo/todoAction'

const AddList = ({ AddItem }) => {
    const [item, setItem] = useState('');
    const [alert, setAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.length > 0) {
            AddItem(item);
            setItem('');
        } else {
            setAlert(true);
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }
    return (
        <div className="container">
            <form className="mt-4 mb-4" onSubmit={handleSubmit}>
                <h3>Itme to buy:</h3>
                <input className="form-control mb-2" type="text" placeholder="Enter item" value={item} onChange={(e) => setItem(e.target.value)} />
                {alert && <div className='alert alert-danger'>You have to write!!!</div>}
                <button onClick={handleSubmit} disabled={!item} className="btn btn-info w-100">Add</button>
            </form>
            <List />
        </div>
    )
};

export default connect(null, { AddItem })(AddList)