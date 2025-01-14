import React from "react";

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: ''
    }
    HandleChangeTitleJob = (e) => {
        this.setState({
            titleJob: e.target.value
        });
    }
    HandleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        });
    }
    HandeSubmit = (e) => {
        e.preventDefault();
        console.log(">>>Chech data:", this.state)
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's title:</label><br />
                    <input type="text" value={this.state.titleJob} onChange={(e) => this.HandleChangeTitleJob(e)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(e) => this.HandleChangeSalary(e)} /><br />
                    <input type="submit" value="Submit" onClick={(e) => this.HandeSubmit(e)} />
                </form>
            </>
        )
    }
}
export default AddComponent