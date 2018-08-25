import React, {Component, PropTypes} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Login.css';
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Signup from './Signup.js'
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Redirect } from 'react-router';

const history = Router;

const pStyle = {
  width: '18rem'
};
var self = this;
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      Redirect: false,
      isLoggedIn: false,
      username: "",
      password: "",
      userID: ""
    };
    this.login = this.login.bind(this);
    console.log("Historu", history)

  }


  login() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    console.log("username", username.value)

    axios.post('http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/loginPecol', {
    username: this.state.username,
    password: this.state.password
  })
  .then(function (response) {
    console.log("SUCCESS", response);
    if(response.status == 200) {
         console.log('Successfully Login', this.state);
      this.setState({ isLoggedIn: !(this.state.isLoggedIn)});
    //  browserHistory.replace("/login")
    //  store.set('loggedIn', true);
    //this.props.history.push("/");

    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }


  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
  event.preventDefault();


axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/loginPecol`, {
  username: this.state.username,
  password: this.state.password })
     .then(res => {
       console.log("SUCCESS", res);
         console.log("Userid", res.data.idStudent);
       if(res.status == 200) {

         this.setState({ isLoggedIn: !(this.state.isLoggedIn), userID: res.data.idStudent});

          console.log("Userid", this.state.userID)
           console.log('Successfully Login', this.state);
       //  browserHistory.replace("/login")
       //  store.set('loggedIn', true);
       //this.props.history.push("/");

       }
     })
 }





  render() {
    const { redirect } = this.state;


   if(this.state.isLoggedIn === true){

     if(this.state.userID == "admin1") {
       return (<Redirect to="/stadistics" />);
     } else {
       return (<Redirect to={"/listCourses/"+ this.state.userID} />);
     }




     }else{
       return (<div className="Login mainDiv">

         <div className="NavBar">
           <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
             <a className="navbar-brand" href="/home">Pecol</a>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
             </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto"></ul>
               <div className="form-inline my-2 my-lg-0">
                 <Link className="nav-link" to="/login">Escuelas y empresas</Link>
                 <Link className="nav-link btn btn-success" to="/signup">Registro</Link>
               </div>
             </div>
           </nav>
         </div>

         <div className="row LoginCont">
           <div className="container">
             <h1>Ingrese su cuenta de usuario </h1>
             <form onSubmit={this.handleSubmit}>
               <TextField id="username" label="Usuario" placeholder="Usuario" className="textField" margin="normal" onChange={this.handleChange} value={this.state.username}/>
               <br/>
               <TextField id="password" label="Contraseña" type="password" placeholder="Contraseña" className="textField" onChange={this.handleChange} margin="normal" value={this.state.password}/>
               <br/>
               <br/>
                 {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
     <button type="submit"> Iniciar sesión </button>
             </form>

           </div>

         </div>

       </div>);
     }



  }
}

export default Login;
