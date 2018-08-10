import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './NavBar.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }

  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand" href="#">Pecol</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

            </ul>
            <div className="form-inline my-2 my-lg-0">
                <Link className="nav-link" to="/login">Escuelas y empresas</Link>
                <Link className="nav-link" to="/login">Ingreso</Link>
                <Link className="nav-link btn btn-success" to="/login">Registro</Link>
            </div>
          </div>
        </nav>
      </div>
        );
      }
    }



    //You need to add this at the end to re-use it
    export default NavBar;
