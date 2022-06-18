import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css'
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Infobox from './components/infobox/info-box';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      colors: [{bgColor: 'black'},{textColor: 'white'}],
      infobox: "hide"
    }
    this.showInfoBox=this.showInfoBox.bind(this)
    this.hideInfoBox=this.hideInfoBox.bind(this)
  }
  showInfoBox(){
    this.setState({
      infobox: ""
    })
  }
  hideInfoBox(){
    this.setState({
      infobox:"hide"
    })
  }
  render(){
    return(
      <div className='main-container'>
        <Header showInfo={this.showInfoBox}/>
        <div className='content-container'>
        </div>
        <Infobox visibility={this.state.infobox} closebox={this.hideInfoBox}/>
        <Footer />
      </div>
    )
  }
}

export default App;
