import React from 'react'

const TodoList = ({ item, todos, setTodos }) => {
    const handelDelete = () => {
        console.log("button clicked");
        const delectTodo = todos.filter((todo) => todo !== item);
        setTodos(delectTodo)
        console.log("delectTodo :", item);
    }

    return (
        <div>
            <div style={{ height: "100px",backgroundColor: item.color  }} className=' p-2 text-dark rounded shadow-sm border'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex  align-items-center'>
                        <input type="checkbox" className='form-check-input' />
                        <span className='ms-2 fw-bolder '>{item.title}</span>
                    </div>
                    <button onClick={handelDelete} className='btn btn-danger btn-sm'>Delete</button>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='text-start'>Todo 1</p>
                </div>
            </div>
        </div>
    )
}

export default TodoList