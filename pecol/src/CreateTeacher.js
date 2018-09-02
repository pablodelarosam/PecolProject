import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './CreateTeacher.css';
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
class CreateTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSelected: null,
      idTeacher: "",
      nameTeacher: "",
      emailTeacher: "",
      nombreMateria: "",
      descriptionSubject: "",
      idTeacherDelete: "",
      fileSelectedModify: "",
      idTeacherModify: "",
      contentImageModify: "",
      descriptionSubjectModify: "",
      nameSubjectModify: "",
      emailTeacherModify: "",
      nameTeacherModify: ""
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
  formData.append('idTeacher', this.state.idTeacher)
  formData.append('nameTeacher', this.state.nameTeacher)
  formData.append('emailTeacher', this.state.emailTeacher)
  formData.append('nombreMateria', this.state.nombreMateria)
  formData.append('descriptionSubject' , this.state.descriptionSubject)

  // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

  axios.post(`http://localhost:3004/createTeacher`, formData, {
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

  deleteTeacher = event => {
      event.preventDefault();

      axios.post(`http://localhost:3004/deleteTeacher`, {
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

  modifyTeacher = event => {
      event.preventDefault();

      const formData = new FormData();
       formData.append("image", this.state.fileSelectedModify, this.state.fileSelectedModify.name)
       formData.append('idTeacherModify', this.state.idTeacherModify)
       formData.append('nameTeacherModify', this.state.nameTeacherModify)
       formData.append('emailTeacherModify', this.state.emailTeacherModify)
       formData.append('nameSubjectModify', this.state.nameSubjectModify)
       formData.append('descriptionSubjectModify', this.state.descriptionSubjectModify)


       // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

       axios.post(`http://localhost:3004/modifyTeacher`, formData, {
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

        <Link className="custom-link" to="/createRule">Módulo
        </Link>

        <Link className="custom-link" to="/stadistics">Estadísticas
        </Link>

      </nav>
      </div>
  <div className="upload-file">
      <div className="row">

      <div className="col-sm-6">

      <h3> Eliminar maestro </h3>

      <form onSubmit={this.deleteTeacher}>
      <TextField id="idTeacherDelete" placeholder="Id" onChange={this.handleChange} value={this.state.idTeacherDelete} />


      <button type="submit"> Eliminar </button>

      </form>

            <h3> Modificar maestro </h3>

            <form onSubmit={this.modifyTeacher}>
            <TextField id="idTeacherModify" placeholder="Id" onChange={this.handleChange} value={this.state.idTeacherModify} />
            <TextField id="nameTeacherModify" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameTeacherModify}/>
            <TextField id="emailTeacherModify" placeholder="Email" onChange={this.handleChange} value={this.state.emailTeacherModify}/>
            <TextField id="nameSubjectModify" placeholder="Materia" onChange={this.handleChange} value={this.state.nameSubjectModify} />
            <TextField id="descriptionSubjectModify" placeholder="Descripción" onChange={this.handleChange} value={this.state.descriptionSubjectModify} />
            <input type="file" onChange={this.fileSelectedHandlerModify} />

            <button type="submit"> Modificar </button>

            </form>

      </div>

      <div className="col-sm-6">

      <div className="upload-file">

      <h3> Crear profesor </h3>


      <form onSubmit={this.handleSubmit}>
      <TextField id="idTeacher" placeholder="Id" onChange={this.handleChange} value={this.state.id} />
      <TextField id="nameTeacher" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameTeacher}/>
      <TextField id="emailTeacher" placeholder="Email" onChange={this.handleChange} value={this.state.emailTeacher}/>
      <TextField id="nombreMateria" placeholder="Materia" onChange={this.handleChange} value={this.state.nombreMateria} />
      <TextField id="descriptionSubject" placeholder="Descripción" onChange={this.handleChange} value={this.state.descriptionSubject} />
      <input type="file" onChange={this.fileSelectedHandler} />

      <button type="submit"> Registrar </button>

      </form>


      </div>

      </div>

      </div>

</div>



      </div>

    );
  }
}

export default CreateTeacher;
