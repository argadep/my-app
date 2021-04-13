import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/developers'>UI Developers</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
