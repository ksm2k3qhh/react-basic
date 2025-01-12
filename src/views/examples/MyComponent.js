import React from "react";

class MyComponent extends React.Component {
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
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstname} onChange={(e) => this.HandleChangeFirstName(e)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastname} onChange={(e) => this.HandleChangeLastName(e)} /><br />
                    <input type="submit" value="Submit" onClick={(e) => this.HandeSubmit(e)} />
                </form>
            </>
        )
    }
}
export default MyComponent