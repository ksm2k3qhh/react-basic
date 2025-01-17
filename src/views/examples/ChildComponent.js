import React from "react";
import './demo.scss'


class ChildComponent extends React.Component {
    state = {
        showJobs: true
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
    HandleDelete = (job) => {
        this.props.DeleteJob(job)
    }
    render() {
        let { arrJob } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className="btn-show" onClick={() => this.HandeShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {arrJob.map((job, index) => {
                                return (
                                    <div key={job.id + 1}>{job.title} - {job.salary}<span onClick={() => this.HandleDelete(job)}>&nbsp; X</span></div>
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