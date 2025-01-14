import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }
    HandleChangeTitleJob = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    HandleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        });
    }
    HandeSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.salary){
            alert("aaa")
            return
        }
        console.log(">>>Chech data:", this.state)
        this.props.AddNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: "",
            salary: ''
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's title:</label><br />
                    <input type="text" value={this.state.title} onChange={(e) => this.HandleChangeTitleJob(e)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(e) => this.HandleChangeSalary(e)} /><br />
                    <input type="submit" value="Submit" onClick={(e) => this.HandeSubmit(e)} />
                </form>
            </>
        )
    }
}
export default AddComponent