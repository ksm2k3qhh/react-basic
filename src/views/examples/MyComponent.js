import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Chien',
        channel: 'hoc IT tren ytb'
    }
    HandleOnChange = (e) => {
        this.setState({
            name: e.target.value,

            channel: e.target.value,
        })
    }
    HandleClick = (e) => {
        alert('click me')
    }
    render() {
        return (
            <>
                <div className="first">
                    <input type="text" onChange={(e) => this.HandleOnChange(e)}></input>
                    My name is : {this.state.name};
                </div>
                <div className="second">
                    My channel is : {this.state.channel};
                </div>
                <div className="third">
                    <button onClick={(e) => this.HandleClick(e)}>Click me</button>
                </div>
            </>
        )

    }
}
export default MyComponent