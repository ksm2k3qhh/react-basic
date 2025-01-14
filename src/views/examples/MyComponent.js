import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


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

    render() {
        return (
            <>
                <AddComponent />

                <ChildComponent arrJob={this.state.arrJob} />
            </>
        )
    }
}
export default MyComponent