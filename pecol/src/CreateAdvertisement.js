import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './CreateStudent.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td
} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import NavBarAdmin from './NavBarAdmin.js'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import FormData from 'form-data'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
class CreateAdvertisement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSelected: null,
      title: "",
      description: "",
      dated: "",
      titleDelete: ""

    };
  }

  fileSelectedHandler = event => {
    console.log("event", event.target.files[0])
    this.setState({fileSelected: event.target.files[0]})
  };

  fileSelectedHandlerModify = event => {
    console.log("event", event.target.files[0])
    this.setState({fileSelectedModify: event.target.files[0]})
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
    formData.append('title', this.state.title)
    formData.append('description', this.state.description)
    formData.append('dated', this.state.dated)

    // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createAdvertisement`, formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }).then((response) => {
      //handle success
      alert("Se ha creado el aviso correctamente");
      console.log("success upload")
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  };

  deleteAdvertisement = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteAdvertisement`, {titleDelete: this.state.titleDelete}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        alert("Se ha eliminado el aviso correctamente");

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  }

  render() {
    return (<div className="dashboard-top">
      <div>

        <NavBarAdmin/>
      </div>
      <div className="mainContent">
        <div className="col-sm-12">
          <div className="container">
            <h2>Administrar anuncios</h2>
            <div className="row">
              <div className="formAdmin col-md-6">
                <form onSubmit={this.deleteAdvertisement}>
                  <h3>Eliminar aviso</h3>
                  <TextField margin="normal" className="textField" id="titleDelete" placeholder="Título del aviso" onChange={this.handleChange} value={this.state.titleDelete}/>
                  <br/>
                  <br/>
                  <button className="nav-link btn btn-success" type="submit">Eliminar</button>
                </form>
              </div>
              <div className="formAdmin col-md-6">
                <form onSubmit={this.handleSubmit}>
                  <h3>Crear aviso</h3>
                  <TextField margin="normal" className="textField" id="title" placeholder="Título del aviso" onChange={this.handleChange} value={this.state.title}/>
                  <br/>
                  <TextField margin="normal" className="textField" id="description" placeholder="Descripción" onChange={this.handleChange} value={this.state.description}/>
                  <br/>
                  <TextField margin="normal" className="textField" id="dated" placeholder="Fecha" onChange={this.handleChange} value={this.state.dated}/>
                  <br/>
                  <input type="file" onChange={this.fileSelectedHandler}/>
                  <br/>
                  <button className="nav-link btn btn-success" type="submit">Crear</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default CreateAdvertisement;
