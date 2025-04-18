import React from 'react'
import TodoList from './TodoList'


const TodoContainer = ({ setTodos, todos, todoInput }) => {
    return (
        <div className='todo-container p-2'>
            <div className='row d-flex '>
                {todos?.length > 0 &&
                    todos.map((item, index) => (
                        <div key={index} className='mb-3 col-sm-12 col-md-6 col-lg-4'>
                            <TodoList item={item} setTodos={setTodos} todos={todos} />
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default TodoContainer