import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: 'Ngo',
        lastName: 'Chien',
        arrJob:
            [
                { jobid: "abcjob1", jobname: 'Developer', salary: '500$' },
                { jobid: "abcjob2", jobname: 'Tester', salary: '300$' },
                { jobid: "abcjob3", jobname: 'Designer', salary: '400$' },
            ]
    }
    HandleChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }
    HandleChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
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
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(e) => this.HandleChangeFirstName(e)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(e) => this.HandleChangeLastName(e)} /><br />
                    <input type="submit" value="Submit" onClick={(e) => this.HandeSubmit(e)} />
                </form>
                <ChildComponent  arrJob={this.state.arrJob} />
            </>
        )
    }
}
export default MyComponent