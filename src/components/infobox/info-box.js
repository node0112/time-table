import React, { Component } from "react";
import './infobox.css'

class Infobox extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={"infobox "+this.props.visibility}>
                <div className="info-box-content-container">
                    <div className="close-infobox" onClick={()=>{this.props.closebox()}}>X</div>
                    <div className="top-text">Oops!</div>
                    <div className="infobox-text">This Feature Is Still In Developement :(</div>
                    <div className="infobox-text">Our Brightest Minds Are On It 🙇🏻‍♂️</div>
                </div>
            </div>
        )
    }
}

export default Infobox