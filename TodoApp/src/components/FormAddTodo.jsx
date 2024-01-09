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
        <form className="bg-white shadow-md hover:text-[#ff6240] rounded p-4 mb-4 flex items-center w-4/5" onSubmit={hdlSubmit}>
            <input
                className="w-full border-b-2 border-gray-300 mr-2 py-1 px-2 focus:outline-none"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='Today I will...'
            />
            <button className='btn-circle text-black hover:text-[#ff6240] ' type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

            </button>
        </form>
    )
}