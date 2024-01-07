import React, { createContext } from 'react'

const TodoContext = createContext()
function TodoContextProvider() {
return (
    <TodoContext.Provider value={{}}>
        {props.children}
    </TodoContext.Provider>
)
}

export default TodoContext
export { TodoContextProvider }
