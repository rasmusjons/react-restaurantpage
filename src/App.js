import React, { Component } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import MenuItem from './MenuItem/MenuItem';
import logo from "./img/img.jpg"

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        menu: false, 
        booking: false, 
        about: false, 
    
      }
  
    }
 
    menu = () => {this.setState({menu: true, booking: false, about: false})}
    booking = () => {this.setState({booking: true, menu: false, about: false})}
    about = () => {this.setState({about: true, menu: false, booking: false})}



  render() {

 let paragraf = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
 let paragraf2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
 let paragraf3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

  return (

      <div className="App">
        <Menu>
            <MenuItem clickmenu={this.menu} clickbook={this.booking}  clickabout={this.about}></MenuItem>
        </Menu>      
        
         {this.state.menu && 
           <div>
              <h1>Menu</h1>
              <img className="img" src={logo} alt="restaurant" />
              <p className="paragraf"> {paragraf} </p>
            </div>
         }
         {this.state.booking && 
            <div>
              <h1>Booking</h1>
              <p className="paragraf"> {paragraf2} </p>
            </div> 
         }  
         {this.state.about && 
            <div>
              <h1>About</h1>
              <p className="paragraf"> {paragraf3} </p>
            </div>
         }
         

      
      </div>
    );
  }
}
export default App;
