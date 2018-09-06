import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './CreateRule.css'
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import FormData from 'form-data'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class CreateRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idRule: "",
      nameRule: "",
      descriptionRule: "",
      idDelete: "",
      idModify: "",
      nameModify: "",
      descriptionModify: ""
    }
  }


  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('idRule', this.state.idRule)
  formData.append('nameRule', this.state.nameRule)
  formData.append('descriptionRule', this.state.descriptionRule)


  // axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

  axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createRule`, formData, {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
    }
  })
    .then((response) => {
      //handle success

        //handle error
          alert("Se ha creado la regla correctamente");

      console.log("success upload")
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  };


  deleteRule = event => {
    event.preventDefault();


    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteRule`, {
      idDelete: this.state.idDelete,



     })
         .then(res => {
           console.log("SUCCESS", res);
           if(res.status == 200) {
               console.log("ruLE deleted successfully")
               alert("Se ha eliminado la regla correctamente");
           //  browserHistory.replace("/login")
           //  store.set('loggedIn', true);
           //this.props.history.push("/");

           }
         }).catch((error) => {
           //handle error
           alert("Hubo un problema, intente nuevamente");
         });
  }

  modifyRule = event => {
    event.preventDefault();

    axios.put(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyRule`, {
      idModify: this.state.idModify,
      nameModify: this.state.nameModify,
      descriptionModify: this.state.descriptionModify

     })
         .then(res => {
           console.log("SUCCESS", res);
           if(res.status == 200) {
               console.log("Student modified successfully")
                alert("Se ha modificado la regla correctamente");
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


        <Link className="custom-link" to="/createStudent">Agregar estudiante
        </Link>

        <Link className="custom-link" to="/createCourse">Agregar curso
        </Link>

        <Link className="custom-link" to="/createAdvertisement">Agregar aviso
        </Link>

        <Link className="custom-link" to="/createTeacher">Agregar profesor
        </Link>

        <Link className="custom-link" to="/createRule">Agregar regla
        </Link>

        <Link className="custom-link" to="/createRule">Correo
        </Link>

        <Link className="custom-link" to="/createModule">Módulo
        </Link>

        <Link className="custom-link" to="/stadistics">Estadísticas
        </Link>

      </nav>
      </div>

        <div className="upload-file">

        <div className="row">

        <div className="col-sm-6">
        <h3> Crear regla </h3>
        <form onSubmit={this.handleSubmit}>
        <TextField id="idRule" placeholder="Id" onChange={this.handleChange} value={this.state.idRule} />
        <TextField id="nameRule" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameRule}/>
        <TextField id="descriptionRule" placeholder="Descripción" onChange={this.handleChange} value={this.state.descriptionRule}/>
        <button type="submit"> Crear regla </button>

        </form>

        <h3> Modificar regla </h3>
        <form onSubmit={this.modifyRule}>
        <TextField id="idModify" placeholder="Id" onChange={this.handleChange} value={this.state.idModify} />
        <TextField id="nameModify" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameModify}/>
        <TextField id="descriptionModify" placeholder="Descripción" onChange={this.handleChange} value={this.state.descriptionModify}/>
        <button type="submit"> Modificar regla </button>

        </form>


        </div>

        <div className="col-sm-6">
<h3> Borrar regla </h3>
        <form onSubmit={this.deleteRule}>
        <TextField id="idDelete" placeholder="Id" onChange={this.handleChange} value={this.state.idDelete} />

        <button type="submit"> Borrar regla </button>

        </form>

        </div>





        </div>



      </div>

      </div>

    );
  }
}

export default CreateRule;
