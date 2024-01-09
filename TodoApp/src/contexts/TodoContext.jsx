import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const TodoContext = createContext()

function TodoContextProvider(props) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [trigger, setTrigger] = useState(false)
    const apiURL = 'http://localhost:8000/todos'

    useEffect(() => {
        setIsLoading(true)
        axios.get(apiURL)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            });
    }, [trigger]);

    const hdlPost = (newJob) => {
        axios.post(apiURL, newJob)
        .then(res => setTrigger(prv => !prv))
    }
    
    const hdlPut = (id, updatedTodo) => {
        axios.put(`${apiURL}/${id}`, { ...updatedTodo, todo: updatedTodo })
            .then(res => setTrigger(prv => !prv))
        }

    const hdlDelete = (id) => {
        axios.delete(`${apiURL}/${id}`)
        .then(res => setTrigger(prv =>!prv))
        }

    return (
        <TodoContext.Provider value={{ data, setData, isLoading, hdlPost, hdlPut, hdlDelete }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoContext
export { TodoContextProvider }
