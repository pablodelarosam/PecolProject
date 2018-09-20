import React, {Component} from 'react';
import logo from './logo.svg';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Select from '@material-ui/core/Select';
import SwipeableViews from 'react-swipeable-views';
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

const styles = {
  tabs: {
    background: '#fff'
  },
  slide: {
    padding: 15,
    minHeight: 100
  },
  slide1: {
    backgroundColor: '#FFF'
  },
  slide2: {
    backgroundColor: '#FFF'
  },
  slide3: {
    backgroundColor: '#FFF'
  }
};

class CreateModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      student: [],
      nameEnlace: "",
      urlEnlace: "",
      fileSelected: null,
      idACTIVITY: "",
      nameActivity: "",
      typeActivity: "",
      idModule: "",
      idCourse: "",
      nameCourse: "",
      introCourse: "",
      idDelete: "",
      idModify: "",
      nameModify: "",
      idStudentCSubscription: "",
      idStudentDSubscription: "",
      idCourseDSubscription: "",
      idCourseDSubscription: "",
      idModule: "",
      nameModule: "",
      moduleDescription: "",
      idCourseModule: "",
      fileSelected: "",
      idDeleteModule: "",
      idModifyModule: "",
      fileSelectedModify: "",
      nameModifyModule: "",
      moduleModifyDescription: "",
      idModifyModuleCourse: "",
      totalCredit: "",
      exigibleCredit: "",
      interests: "",
      limitDate: "",
      idStudentAccount: "",
      idStudentAccountDelete: "",
      totalCreditModify: "",
      exigibleCreditModify: "",
      interestsModify: "",
      limitDateModify: "",
      idStudentAccountModify: "",
      numero: ""
    }
  }

  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/AllModule`).then(res => {
      const accounts = res.data;

      this.setState({student: accounts});
      //   console.log("course", this.state.course[0].idCOURSE)
    })
  }

  createModule = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.fileSelected, this.state.fileSelected.name)
    formData.append('idModule', this.state.idModule)
    formData.append('nameModule', this.state.nameModule)
    formData.append('moduleDescription', this.state.moduleDescription)
    formData.append('idCourseModule', this.state.idCourseModule)

    // axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createModule`, formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }).then((response) => {
      //handle success
      console.log("success upload")
      alert("Se ha creado el módulo correctamente");
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  }

  createActivity = event => {
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
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }).then((response) => {
      //handle success
      console.log("success upload")
    }).catch((error) => {
      //handle error
    });
  };

  modifyModule = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.fileSelectedModify, this.state.fileSelectedModify.name)
    formData.append('idModule', this.state.idModifyModule)
    formData.append('nameModule', this.state.nameModifyModule)
    formData.append('moduleDescription', this.state.moduleModifyDescription)
    formData.append('idCourseModule', this.state.idModifyModuleCourse)

    // axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.put(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyModule`, formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }).then((response) => {
      //handle success
      console.log("success upload")
      alert("Se ha modificado el módulo correctamente");
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });

  }


  fileSelectedHandler = event => {
    console.log("event", event.target.files[0])
    this.setState({fileSelected: event.target.files[0]})
  };


  fileSelectedHandlerModify = event => {
    console.log("event", event.target.files[0])
    this.setState({fileSelectedModify: event.target.files[0]})
  };

  deleteModule = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteModule`, {idDeleteModule: this.state.idDeleteModule}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        console.log("Student deleted successfully")
        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");
        alert("Se ha eliminado el módulo correctamente");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  }

  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleChange1 = (event, value) => {
    this.setState({index: value});
  };
  handleChangeIndex = index => {
    this.setState({index});
  };

  handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nameEnlace', this.state.nameEnlace)
    formData.append('urlEnlace', this.state.urlEnlace)

    // axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createLink`, formData, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }).then((response) => {
      //handle success
      console.log("success upload")
      alert("Se ha creado el enlace correctamente")
    }).catch((error) => {
      //handle error
      alert("Se ha presentado un error, intente más tarde")
    });
  };

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
            axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteModule`, {idDeleteModule: id}).then(res => {
              console.log("SUCCESS", res);
              if (res.status == 200) {
                console.log("Student deleted successfully")
                alert("Se ha eliminado el curso correctamente");
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
    const {index} = this.state;
    return (<div className="dashboard-top">
      <div>
        <NavBarAdmin/>
      </div>
      <div className="mainContent">
        <div className="col-sm-12">
          <div className="container">
            <h2>
              Administrar módulos
              <a className="btn btn-success" onClick={(e) => this.changeView(1, e)}>+</a>
            </h2>
            <div className="row">
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Nombre</Th>
                    <Th>Descripción</Th>
                    <Th>ID curso</Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    this.state.student.map(n => {
                      return (<Tr>
                        <Td>{n.idCourse}</Td>
                        <Td>{n.nameModule}</Td>
                        <Td>{n.moduleDescription}</Td>
                        <Td>{n.idCourse}</Td>
                        <Td>
                          <a className="btn btn-info" onClick={(e) => this.changeView(2, e)}>Modificar</a>
                        </Td>
                        <Td>
                          <a className="btn btn-danger" onClick={(e) => this.deleteSTD(n.idCourse, e)}>Borrar</a>
                        </Td>
                      </Tr>);
                    })
                  }
                </Tbody>
              </Table>
            </div>
            <div className="row">
              <div className="formAdmin" id="create" style={styleNone}>
                <form onSubmit={this.createModule} className="">
                  <h4>
                    Crear módulo
                  </h4>
                  <TextField id="idModule" label="ID " placeholder="ID de módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModule}/>
                  <br/>
                  <TextField id="nameModule" label="Nombre" placeholder="Nombre de módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModule}/>
                  <br/>
                  <textarea style={{
                      color: 'black'
                    }} className="textField" id="moduleDescription" label="ID" placeholder="Descripción" margin="normal" onChange={this.handleChange} value={this.state.moduleDescription}/>
                  <br/>
                  <TextField id="idCourseModule" label="Nombre" placeholder="Curso asociado" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idCourseModule}/>
                  <br/>
                  <input type="file" onChange={this.fileSelectedHandler}/>
                  <br/>
                  <button className="nav-link btn btn-success" type="submit">Crear módulo</button>
                </form>
              </div>
              <div className="formAdmin" id="modify" style={styleNone}>
                <form onSubmit={this.modifyModule} className="">
                  <h4>
                    Modificar módulo
                  </h4>
                  <TextField id="idModifyModule" label="ID módulo" placeholder="ID del módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModifyModule}/>
                  <br/>
                  <TextField id="nameModifyModule" label="Nombre módulo" placeholder="Nombre del módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModifyModule}/>
                  <br/>
                  <textarea style={{
                      color: 'black'
                    }} className="textField" id="moduleModifyDescription" label="Descripción módulo" placeholder="Descripción del módulo" margin="normal" onChange={this.handleChange} value={this.state.moduleModifyDescription}/>
                  <br/>
                  <TextField id="idModifyModuleCourse" label="Curso asociado" placeholder="Curso asociado" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModifyModuleCourse}/>
                  <br/>
                  <input type="file" onChange={this.fileSelectedHandlerModify}/>
                  <br/>
                  <button className="nav-link btn btn-success" type="submit">Modificar módulo</button>
                </form>

              </div>
            </div>
            <br/>
            <Tabs value={index} fullWidth="fullWidth" onChange={this.handleChange1} style={styles.tabs}>
              <Tab label="Enlaces"/>
              <Tab label="Actividades"/>
            </Tabs>
            <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <div className="row">
                  <div className="formAdmin">
                    <form onSubmit={this.handleSubmit}>
                      <h4>
                        Agregar enlace
                      </h4>
                      <TextField className="textField" margin="normal" id="nameEnlace" label="Nombre" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameEnlace}/>
                      <br/>
                      <TextField className="textField" margin="normal" id="urlEnlace" label="URL" placeholder="URL" onChange={this.handleChange} value={this.state.urlEnlace}/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">
                        Crear enlace
                      </button>

                    </form>
                  </div>
                </div>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <div className="row">
                  <div className="formAdmin">
                    <form onSubmit={this.createActivity}>
                      <h3>
                        Crear actividad
                      </h3>
                      <TextField className="textField" margin="normal" id="idACTIVITY" label="ID actividad" placeholder="ID de la actividad" onChange={this.handleChange} value={this.state.idACTIVITY}/>
                      <br/>
                      <TextField className="textField" margin="normal" id="nameActivity" label="Nombre actividad " placeholder="Nombre de la actividad" onChange={this.handleChange} value={this.state.nameActivity}/>
                      <br/>
                      <TextField className="textField" margin="normal" id="typeActivity" label="Tipo actividad " placeholder="Tipo de la actividad" onChange={this.handleChange} value={this.state.typeActivity}/>
                      <br/>
                      <TextField className="textField" margin="normal" id="idModule" label="ID módulo" placeholder="ID del módulo vinculado" onChange={this.handleChange} value={this.state.idModule}/>
                      <br/>
                      <TextField className="textField" margin="normal" id="numero" label="Número" placeholder="Número" onChange={this.handleChange} value={this.state.numero}/>
                      <br/>
                      <input type="file" onChange={this.fileSelectedHandler}/>
                      <br/>

                      <button className="nav-link btn btn-success" type="submit">
                        Crear actividad
                      </button>

                    </form>

                  </div>
                </div>
              </div>
            </SwipeableViews>
          </div>
        </div>
      </div>

    </div>);
  }
}

export default CreateModule;
