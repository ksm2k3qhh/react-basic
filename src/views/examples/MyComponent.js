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
    render() {
        return (
            <>
                <div className="first">
                    <input type="text" value={this.state.name} onChange={(e) => this.HandleOnChange(e)}></input>
                    My name is : {this.state.name};
                </div>
                <div className="second">
                    My channel is : {this.state.channel};
                </div>
            </>
        )

    }
}
export default MyComponent