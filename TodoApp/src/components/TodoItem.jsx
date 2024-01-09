// TodoItem.jsx
import React, { useContext, useState } from 'react';
import TodoContext from '../contexts/TodoContext';

export default function TodoItem({ item }) {
    const { hdlPut, hdlDelete } = useContext(TodoContext)
    const [isEditing, setIsEditing] = useState(false);
    const [editedTodo, setEditedTodo] = useState(item.todo);

    const hldEdit = () => {
        setIsEditing(true);
    };

    const hldSaveEdit = () => {
        hdlPut(item.id, editedTodo);
        setIsEditing(false);
    };

    const hldCancelEdit = () => {
        setIsEditing(false);
        setEditedTodo(item.todo);
    };

    const _hldDelete = () => {
        hdlDelete(item.id);
    };
    return (
        <div className='bg-gray-200 p-2 m-2 rounded'>
            {isEditing ? (
                <div className="flex items-center">
                    <input
                        className="border-b-2 border-gray-300 mr-2 py-1 px-2 focus:outline-none"
                        value={editedTodo}
                        onChange={(e) => setEditedTodo(e.target.value)}
                    />
                    <button className="btn-circle text-white text-base bg-green-500" onClick={hldSaveEdit}>
                        Save
                    </button>
                    <button className="btn-circle text-white text-base bg-gray-500 ml-2" onClick={hldCancelEdit}>
                        Cancel
                    </button>
                </div>
            ) : (
                <div className="flex items-center">
                    <div>{item.todo}</div>
                    <button className="btn-circle text-white text-base bg-blue-500 ml-2" onClick={hldEdit}>
                        Edit
                    </button>
                    <button className="btn-circle text-white text-base bg-blue-500 ml-2" onClick={_hldDelete}>
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}
