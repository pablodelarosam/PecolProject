import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import FormData from 'form-data'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class CreateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSelected: null,
      idACTIVITY: "",
      nameActivity: "",
      typeActivity: "",
      idModule: "",
      "numero": ""

    };
  }


  fileSelectedHandler = event => {
    console.log("event", event.target.files[0])
    this.setState({
      fileSelected : event.target.files[0]
    })
  };

  fileSelectedHandlerModify = event => {
    console.log("event", event.target.files[0])
    this.setState({
      fileSelectedModify : event.target.files[0]
    })
  };

  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  handleSubmit = event => {
  event.preventDefault();

 const formData = new FormData();
  formData.append("image", this.state.fileSelected, this.state.fileSelected.name)
  formData.append('idACTIVITY', this.state.idACTIVITY)
  formData.append('nameActivity', this.state.nameActivity)
  formData.append('typeActivity', this.state.typeActivity)
  formData.append('idModule', this.state.idModule)
  formData.append('order', this.state.numero)




  // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

  axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createActivites`, formData, {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    }
  })
    .then((response) => {
      //handle success
      console.log("success upload")
    }).catch((error) => {
      //handle error
    });
  };

  deleteAdvertisement = event => {
      event.preventDefault();

      axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteAdvertisement`, {
        idTeacherDelete: this.state.idTeacherDelete

       })
           .then(res => {
             console.log("SUCCESS", res);
             if(res.status == 200) {


             //  browserHistory.replace("/login")
             //  store.set('loggedIn', true);
             //this.props.history.push("/");

             }
           })
  }

  render() {
    return (
      <div className="dashboard-top">
      <div>
      <nav className="navbar-sec navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">Pecol</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>




      </nav>
      </div>
  <div className="upload-file">
      <div className="row">

      <div className="col-sm-6">





      </div>

      <div className="col-sm-6">



      <h3> Crear actividad </h3>


      <form onSubmit={this.handleSubmit}>
      <TextField id="idACTIVITY" placeholder="ID de la actividad" onChange={this.handleChange} value={this.state.idACTIVITY} />
      <TextField id="nameActivity" placeholder="Nombre de la actividad" onChange={this.handleChange} value={this.state.nameActivity}/>
        <TextField id="typeActivity" placeholder="Tipo de la actividad" onChange={this.handleChange} value={this.state.typeActivity}/>
          <TextField id="idModule" placeholder="Id del módulo vinculado" onChange={this.handleChange} value={this.state.idModule}/>
            <TextField id="numero" placeholder="Número" onChange={this.handleChange} value={this.state.numero}/>
      <input type="file" onChange={this.fileSelectedHandler} />

      <button type="submit"> Crear actividad </button>

      </form>




      </div>

      </div>
</div>




      </div>

    );
  }
}

export default CreateActivity;
