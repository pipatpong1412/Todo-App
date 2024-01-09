import React, { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import DashBoard from './DashBoard.jsx'
import FormAddTodo from "./FormAddTodo";
import TodoContainer from "./TodoContainer";
export default function AppTodo() {
    const { isLoading } = useContext(TodoContext);

    if (isLoading) {
        return <h3 className="text-center mt-4">Loading...</h3>;
    }
    return (
        <div className="bg-white shadow-md w-1/3  pb-14 flex flex-col items-center rounded-badge ">
            <DashBoard/>
            <FormAddTodo />
            <TodoContainer />
        </div>
    )
}
