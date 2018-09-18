import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './NavBarDash.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class NavBarDash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="NavBarDash">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top nav-dash">
        <a className="navbar-brand nav-dash-brand" href="/home">Pecol</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <div className="form-inline my-2 my-lg-0">
            <Link className="nav-link nav-dash-links" to={"/listCourses/" + this.props.idStudent}>Cursos</Link>
            <Link className="nav-link nav-dash-links" to={"/advertisement/" + this.props.idStudent}>Avisos</Link>
            <Link className="nav-link nav-dash-links" to={"/teacher/" + this.props.idStudent}>Profesores</Link>
            <Link className="nav-link nav-dash-links" to={"/normateca/" + this.props.idStudent}>Normateca</Link>
            <Link className="nav-link nav-dash-links" to={"/account/" + this.props.idStudent}>Estado de cuenta</Link>
            <li class="nav-link dropdown">
              <Link className="nav-link nav-dash-links" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={"#"}>ID: {this.props.idStudent}</Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to={"/"} href="#">Salir</Link>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>);
  }
}

//You need to add this at the end to re-use it
export default NavBarDash;
