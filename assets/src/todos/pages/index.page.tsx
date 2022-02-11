import React, {memo} from "react";
import {usePageContext} from "../../utils/usePageContext";

interface Todo {
    id: number
    title: string
}

const TodosIndexPage = memo(() => {
    let pageContext = usePageContext<{ todos: Todo[] }>()
    let todos = pageContext?.todos

    return <>
        <h1>React todos page</h1>
        <ul>
            {todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    </>
})

export default TodosIndexPage