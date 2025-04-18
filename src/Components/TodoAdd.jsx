import React from 'react';

const TodoAdd = ({ todoHandel, SetTodoInput, todoInput }) => {


    return (
        <>
            <div className=" my-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-sm-6">
                        <div className="row g-2 align-items-center">
                            <div className="col-12 col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Add a new todo..."
                                    value={todoInput}
                                    onChange={e => SetTodoInput(e.target.value)}
                                />
                            </div>
                            <div className="col-12 col-sm-4">
                                <button onClick={todoHandel} className="btn btn-info w-100">ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoAdd

