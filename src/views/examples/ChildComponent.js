import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstname: 'Ngo',
        lastname: 'Chien',
    }
    HandleChangeFirstName = (e) => {
        this.setState({
            firstname: e.target.value
        });
    }
    HandleChangeLastName = (e) => {
        this.setState({
            lastname: e.target.value
        });
    }
    HandeSubmit = (e) => {
        e.preventDefault();
        console.log(">>>Chech data:", this.state)
    }

    render() {
        console.log("check props:", this.props);
        let { firstName, lastName, arrJob } = this.props;
        return (
            <>
                {arrJob.map((job) => {
                    return (
                        <div key={job.jobid}>{job.jobname} - {job.salary}</div>
                    )
                })}
            </>
        )
    }
}
export default ChildComponent