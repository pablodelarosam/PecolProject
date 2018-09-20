import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
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
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import NavBarAdmin from './NavBarAdmin.js'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import FormData from 'form-data'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
var styleNone = {
  display: 'none' // 'ms' is the only lowercase vendor prefix
};
class CreateTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
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
  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/AllTeacher`).then(res => {
      const accounts = res.data;

      this.setState({student: accounts});
      //   console.log("course", this.state.course[0].idCOURSE)
    })
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
    formData.append('idTeacher', this.state.idTeacher)
    formData.append('nameTeacher', this.state.nameTeacher)
    formData.append('emailTeacher', this.state.emailTeacher)
    formData.append('nombreMateria', this.state.nombreMateria)
    formData.append('descriptionSubject', this.state.descriptionSubject)

    // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createTeacher`, formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }).then((response) => {
      //handle success
      console.log("success upload")
      alert("Se ha agregado el profesor correctamente");
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  };
  deleteTeacher = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteTeacher`, {idTeacherDelete: this.state.idTeacherDelete}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        alert("Se ha eliminado el profesor correctamente");

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
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

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyTeacher`, formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }).then((response) => {
      //handle success
      console.log("success upload")
      alert("Se ha modificado el profesor correctamente");
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });

  }

  changeView(id) {
    switch (id) {
      case 1:
        document.getElementById("create").style.display = "block";
        document.getElementById("modify").style.display = "none";
        break;
      case 2:
        document.getElementById("create").style.display = "none";
        document.getElementById("modify").style.display = "block";
        break;
    }
  }
  deleteSTD(id) {
    confirmAlert({
      title: 'Confirmar acción',
      message: '¿Deseas borrar este registro?',
      buttons: [
        {
          label: 'Si',
          onClick: () => {
            axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteTeacher`, {idTeacherDelete: id}).then(res => {
              console.log("SUCCESS", res);
              if (res.status == 200) {
                console.log("Student deleted successfully")
                alert("Se ha eliminado el profesor correctamente");
                //  browserHistory.replace("/login")
                //  store.set('loggedIn', true);
                //this.props.history.push("/");
                window.location.reload()

              }
            }).catch((error) => {
              //handle error
              alert("Hubo un problema, intente nuevamente");
            });
          }
        }, {
          label: 'No'
        }
      ]
    })
  }

  render() {
    return (<div className="dashboard-top">
      <div>

        <NavBarAdmin/>
      </div>
      <div className="mainContent">
        <div className="col-sm-12">
          <div className="container">
            <h2>
              Administrar profesores
              <a className="btn btn-success" onClick={(e) => this.changeView(1, e)}>+</a>
            </h2>
            <div className="row">
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Nombre</Th>
                    <Th>Email</Th>
                    <Th>Materia</Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    this.state.student.map(n => {
                      return (<Tr>
                        <Td>{n.idTeacher}</Td>
                        <Td>{n.nameTeacher}</Td>
                        <Td>{n.emailTeacher}</Td>
                        <Td>{n.nombreMateria}</Td>
                        <Td>
                          <a className="btn btn-info" onClick={(e) => this.changeView(2, e)}>Modificar</a>
                        </Td>
                        <Td>
                          <a className="btn btn-danger" onClick={(e) => this.deleteSTD(n.idTeacher, e)}>Borrar</a>
                        </Td>
                      </Tr>);
                    })
                  }
                </Tbody>
              </Table>
            </div>
            <div className="row">
              <div id="create" className="formAdmin" style={styleNone}>
                <form onSubmit={this.handleSubmit}>
                  <h4>
                    Crear profesor
                  </h4>
                  <TextField id="idTeacher" className="textField" margin="normal" placeholder="Id" onChange={this.handleChange} value={this.state.id}/>
                  <br/>
                  <TextField id="nameTeacher" className="textField" margin="normal" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameTeacher}/>
                  <br/>
                  <TextField id="emailTeacher" className="textField" margin="normal" placeholder="Email" onChange={this.handleChange} value={this.state.emailTeacher}/>
                  <br/>
                  <TextField id="nombreMateria" className="textField" margin="normal" placeholder="Materia" onChange={this.handleChange} value={this.state.nombreMateria}/>
                  <br/>
                  <TextField id="descriptionSubject" className="textField" margin="normal" placeholder="Descripción" onChange={this.handleChange} value={this.state.descriptionSubject}/>
                  <br/>
                  <input type="file" onChange={this.fileSelectedHandler}/>
                  <br/>
                  <button className="nav-link btn btn-success" type="submit">Registrar</button>
                </form>
              </div>
            </div>
            <div className="row">
              <div id="modify" className="formAdmin" style={styleNone}>
                <form onSubmit={this.modifyTeacher}>
                  <h3>
                    Modificar maestro
                  </h3>
                  <TextField className="textField" margin="normal" id="idTeacherModify" placeholder="Id" onChange={this.handleChange} value={this.state.idTeacherModify}/>
                  <br/>
                  <TextField className="textField" margin="normal" id="nameTeacherModify" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameTeacherModify}/>
                  <br/>
                  <TextField className="textField" margin="normal" id="emailTeacherModify" placeholder="Email" onChange={this.handleChange} value={this.state.emailTeacherModify}/>
                  <br/>
                  <TextField className="textField" margin="normal" id="nameSubjectModify" placeholder="Materia" onChange={this.handleChange} value={this.state.nameSubjectModify}/>
                  <br/>
                  <TextField className="textField" margin="normal" id="descriptionSubjectModify" placeholder="Descripción" onChange={this.handleChange} value={this.state.descriptionSubjectModify}/>
                  <br/>
                  <input type="file" onChange={this.fileSelectedHandlerModify}/>
                  <br/>
                  <button className="nav-link btn btn-success" type="submit">Modificar</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default CreateTeacher;
