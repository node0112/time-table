import React, { Component } from "react";
import './header.css'
class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<div className="header">
            <div className="logo">Schedule.Me</div>
            <nav>
                <ul>
                <li><a  onClick={()=>{this.props.showInfo()}}>Create Your Own+</a></li>
                <li ><a href="">Fix A Bug</a></li>
                <li><a href="">Contribute</a></li>
                </ul>
            </nav>
        </div>)
    }
}

export default Header