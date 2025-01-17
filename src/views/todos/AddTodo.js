import React from "react";
import { ToastContainer, toast } from "react-toastify";

class AddTodo extends React.Component {

    state = {
        title: ''
    }

    HandleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    HandleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Missing title\'s Todo')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(e) => this.HandleOnChangeTitle(e)} />
                <button type="button" className="add" onClick={() => this.HandleAddTodo()}>Add</button>
            </div>
        )

    }
}

export default AddTodo