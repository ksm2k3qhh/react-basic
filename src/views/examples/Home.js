import React from "react";
import Color from "../hoc/Color";

class Home extends React.Component{
    render(){
        return(
            <div>
                Helloworld from Homepage with KsM
            </div>
        )
    }
}

export default Color(Home)