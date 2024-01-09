import React, { useContext, useState } from 'react';
import TodoContext from '../contexts/TodoContext';

export default function FormAddTodo() {
    const [input, setInput] = useState('')
    const { hdlPost } = useContext(TodoContext)

    const hdlSubmit = (e) => {
        e.preventDefault()
        if (input === '') alert('Please enter something')
        else {
            let newJob = { todo: input, completed: false }
            hdlPost(newJob)
        }
    }

    return (
        <form className="bg-white shadow-md rounded p-4 mb-4 flex items-center" onSubmit={hdlSubmit}>
            <input
                className="w-full border-b-2 border-gray-300 mr-2 py-1 px-2 focus:outline-none"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='Today I will...'
            />
            <button className='btn-circle text-white text-base bg-black h-10' type='submit'>+</button>
        </form>
    )
}