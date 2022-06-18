import React, { Component } from "react";
import './footer.css'
class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-text">
                    Created By <a href="https://github.com/node0112" target={"_blank"}>Node0112</a>
                </div>
            </div>
        )
    }
}

export default Footer