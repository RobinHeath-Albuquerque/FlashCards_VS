import React, { Component } from 'react';
import { MenuItems } from "./MenuItem";
import './NavBar.css';
//import { Button } from "../Button"

class NavBar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return(
      <nav className="NavBarItems">
       
        <ul className={this.state.clicked ? 'nav-menu active' :
        'nav-menu' }>
          {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                  {item.title}
                  
                  </a>
                  </li>

              )

          }) }
            
        </ul>
        

      </nav>
    )
  }
}






export default NavBar;

