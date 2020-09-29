import React from 'react';
import { connect } from 'react-redux';
import { RemoveItem } from '../../redux/todo/todoAction';

const List = ({ items, RemoveItem }) => {
    return items.length ? (
        <ul className="list-group d-flex flex-column mt-5 listItems">
            {
                items.map((item) => (
                    <li onClick={() => RemoveItem(item.id)} key={item.id} className="mt-1 list-group-item">{item.name}</li>
    ))
            }
        </ul>
    ): (
            <div className="text-danger list-group-item mt-1  text-center listItems" >No items yet</div>
    )
}

const mapState = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapState, {RemoveItem})(List)