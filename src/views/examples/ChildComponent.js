import React from "react";
class ChildComponent extends React.Component {
    state = {
        showJobs: false
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

    HandeShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        let { arrJob } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.HandeShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {arrJob.map((job) => {
                                return (
                                    <div key={job.id}>{job.title} - {job.salary}</div>
                                )
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.HandeShowHide()}>Hide</button>
                        </div>
                    </>

                }
            </>
        )
    }
}
export default ChildComponent