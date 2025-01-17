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
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        }
        )
        toast.success("🦄 Wow so easy!!!")
    }

    render() {
        let { listTodos } = this.state;
        return (
            <div className="list-todo-container">
                <AddTodo  addNewTodo={this.addNewTodo}/>
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) =>
                            <div className="todo-child" key={item.id}>
                                <span>{index + 1} - {item.title}</span>
                                <div className="btn-ed">
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default ListTodo