import React, { Component } from 'react';
import { MenuItems } from "./MenuItem";
import './NavBar.css';

class NavBar extends Component {
  
  render() {
    return(
      <nav className="NavBarItems">
       
        <ul>
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

