import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


class MyComponent extends React.Component {
    state = {
        firstName: 'Ngo',
        lastName: 'Chien',
        arrJob:
            [
                { id: "abcjob1", title: 'Developer', salary: '500$' },
                { id: "abcjob2", title: 'Tester', salary: '300$' },
                { id: "abcjob3", title: 'Designer', salary: '400$' },
            ]
    }

    AddNewJob = (job) => {
        this.setState({
            arrJob: [...this.state.arrJob, job]
        })
    }

    render() {
        return (
            <>
                <AddComponent AddNewJob={this.AddNewJob} />

                <ChildComponent arrJob={this.state.arrJob} />
            </>
        )
    }
}
export default MyComponent