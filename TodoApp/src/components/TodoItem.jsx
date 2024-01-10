// TodoItem.jsx
import React, { useContext, useState } from 'react';
import TodoContext from '../contexts/TodoContext';

export default function TodoItem({ item }) {
    const { hdlPut, hdlDelete, hdlFinished } = useContext(TodoContext)
    const [isEditing, setIsEditing] = useState(false)
    const [editedTodo, setEditedTodo] = useState(item.todo)
    const [isCompleted, setIsCompleted] = useState(item.completed)

    const hldEdit = () => {
        setIsEditing(true);
    }

    const hldSaveEdit = () => {
        hdlPut(item.id, editedTodo);
        setIsEditing(false)
    }

    const hldCancelEdit = () => {
        setIsEditing(false)
        setEditedTodo(item.todo)
    }

    const _hldDelete = () => {
        hdlDelete(item.id)
    }

    const hdlCompleted = () => {
        hdlFinished(item.id, item, !isCompleted)
        setIsCompleted(!isCompleted)
    }

    return (
        <div className='w-410 bg-white p-2 m-2 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
            {isEditing ? (
                <div className="flex items-center justify-between">
                    <input
                        className="flex-grow border-b-2 border-gray-300 mr-2 py-1 px-2 focus:outline-none"
                        value={editedTodo}
                        onChange={(e) => setEditedTodo(e.target.value)}
                    />
                    <div className="flex">
                        <button className=" text-black hover:text-[#ff6240]" onClick={hldSaveEdit}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                        </button>
                        <button className="text-black hover:text-[#ff6240] ml-2" onClick={hldCancelEdit}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-between ">
                    <input type="checkbox" className="checkbox mr-2 " checked={isCompleted} onChange={hdlCompleted} />
                    {isCompleted ? (<>
                        <div className="flex-grow text-[#ff6240] opacity-50">{item.todo}</div>
                        <div className='text-[#ff6240]'>Finished</div>
                        <button className=" text-black ml-2 hover:text-[#ff6240]" onClick={_hldDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                        </button>
                    </>
                    ) : (
                        <>
                            <div className="flex-grow ">{item.todo}</div>
                            <div className="flex">
                                <button className="text-black ml-5 hover:text-[#080707]" onClick={hldEdit}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </button>
                                <button className=" text-black ml-2 hover:text-[#ff6240]" onClick={_hldDelete}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
