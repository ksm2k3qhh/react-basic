import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: "todo1", title: 'Doing Homework' },
            { id: "todo2", title: 'Making video' },
            { id: "todo3", title: 'Fixing bug' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        }
        )
        toast.success("🦄 Wow so easy!!!")
    }
    HandleDeleteTodo = (item) => {
        this.setState({
            listTodos: this.state.listTodos.filter((todo) => todo.id !== item.id)
        })
    }
    HandleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObjs = Object.keys(editTodo).length === 0

        //Press Save
        if (isEmptyObjs === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id)
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            return;
        }

        //Press Edit
        this.setState({
            editTodo: todo
        })



    }

    HandleOnchangeEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObjs = Object.keys(editTodo).length === 0
        return (
            <>
                <p>
                    Simple Todo app with KsM
                </p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) =>
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObjs === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        (editTodo.id === item.id ?
                                            <span>{index + 1} - <input value={editTodo.title} onChange={(e) => this.HandleOnchangeEditTodo(e)}></input></span>
                                            : <span>{index + 1} - {item.title}</span>
                                        )

                                    }
                                    <div className="btn-ed">
                                        <button className="edit" onClick={() => this.HandleEditTodo(item)}>
                                            {isEmptyObjs === false && editTodo.id === item.id ? "Save" : "Edit"}
                                        </button>
                                        <button className="delete" onClick={() => this.HandleDeleteTodo(item)}>Delete</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </>

        )
    }
}
export default ListTodo