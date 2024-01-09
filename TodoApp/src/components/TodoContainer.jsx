import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../contexts/TodoContext';

export default function TodoContainer() {
    const { data } = useContext(TodoContext)

    return (
        <div className='flex flex-col w-fit bg-slate-200'>
            {data.map(item => (
                <TodoItem key={item.id} item={item} />
            ))}
        </div>
    )
}
