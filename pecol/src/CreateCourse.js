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

class CreateCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      student: [],
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
      idStudentAccountModify: ""

    };
  }
  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/AllCourses`).then(res => {
      const accounts = res.data;

      this.setState({student: accounts});
      //   console.log("course", this.state.course[0].idCOURSE)
    })
  }
  handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createCourse`, {
      idCourse: this.state.idCourse,
      nameCourse: this.state.nameCourse,
      introCourse: this.state.introCourse

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        alert("Se ha creado el curso correctamente");
        window.location.reload();

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

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

  handleChange = (event, value) => {
    this.setState({index: value});
  };
  handleChangeIndex = index => {
    this.setState({index});
  };
  createSubscription = event => {
    event.preventDefault();

    var e = document.getElementById("idCourseCSubscription");
    var selectedCourse = e.options[e.selectedIndex].value;
    alert(selectedCourse);

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createSubscription`, {
      idStudentCSubscription: this.state.idStudentCSubscription,
      idCourseCSubscription: selectedCourse

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        alert("Se ha dado de alta el alumno correctamente");

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
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
  createAccount = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createAccount`, {
      totalCredit: this.state.totalCredit,
      exigibleCredit: this.state.exigibleCredit,
      interests: this.state.introCourse,
      limitDate: this.state.limitDate,
      idStudentAccount: this.state.idStudentAccount

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        alert("Se ha creado la cuenta correctamente");

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  }
  modifyAccount = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyAccount`, {
      totalCreditModify: this.state.totalCreditModify,
      exigibleCreditModify: this.state.exigibleCreditModify,
      interestsModify: this.state.interestsModify,
      limitDateModify: this.state.limitDateModify,
      idStudentAccountModify: this.state.idStudentAccountModify

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        alert("Se ha modificado la cuenta correctamente");
        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  }
  modifyCourse = event => {
    event.preventDefault();

    axios.put(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyCourse`, {
      idModify: this.state.idModify,
      nameModify: this.state.nameModify

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        console.log("Student modified successfully")
        alert("Se ha modificado el curso correctamente");
        window.location.reload();
        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });

  }
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
  deleteCourse = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteCourse`, {idDelete: this.state.idDelete}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        console.log("Student deleted successfully")
        alert("Se ha eliminado el curso correctamente");
        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  }
  deleteAccount = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteAccount`, {idStudentAccountDelete: this.state.idStudentAccountDelete}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        alert("Se ha eliminado la cuenta correctamente");

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  }
  deleteSubscription = event => {
    event.preventDefault();

    var e = document.getElementById("idCourseDSubscription");
    var selectedCourse = e.options[e.selectedIndex].value;

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteSubscription`, {
      idStudentDSubscription: this.state.idStudentDSubscription,
      idCourseDSubscription: selectedCourse
    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        console.log("Student deleted successfully")
        alert("Se ha dado de baja el alumno del curso correctamente")
        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
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
            axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteCourse`, {idStudentAccountDelete: id}).then(res => {
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
              Administrar cursos
              <a className="btn btn-success" onClick={(e) => this.changeView(1, e)}>+</a>
            </h2>
            <div className="row">
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Nombre</Th>
                    <Th>Introducción</Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    this.state.student.map(n => {
                      return (<Tr>
                        <Td>{n.idCourse}</Td>
                        <Td>{n.nameCourse}</Td>
                        <Td>{n.introCourse}</Td>
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
              <div className="formAdmin" id="modify" style={styleNone}>
                <form onSubmit={this.modifyCourse} className="">
                  <h4>
                    Modificar curso
                  </h4>
                  <TextField id="idModify" label="ID" placeholder="Curso a modificar" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModify}/>
                  <br/>
                  <TextField id="nameModify" label="Nombre" placeholder="Nombre del curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModify}/>

                  <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                  <button className="nav-link btn btn-success" type="submit">Modificar curso</button>
                </form>
              </div>
              <div className="formAdmin" id="create" style={styleNone}>
                <form onSubmit={this.handleSubmit} className="">
                  <h4>
                    Crear curso
                  </h4>
                  <TextField id="idCourse" label="ID" placeholder="ID de curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idCourse}/>
                  <br/>
                  <TextField id="nameCourse" label="Nombre" placeholder="Nombre de curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameCourse}/>
                  <br/>
                  <TextField id="introCourse" label="Edad" placeholder="Intro de curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.introCourse}/>
                  <br/>

                  <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                  <button className="nav-link btn btn-success" type="submit">Crear curso</button>
                </form>
              </div>
            </div>
            <br/>

            <Tabs value={index} fullWidth="fullWidth" onChange={this.handleChange} style={styles.tabs}>
              <Tab label="Inscripciones"/>
              <Tab label="Módulos"/>
              <Tab label="Cuentas"/>
            </Tabs>
            <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <div className="row">
                  <div className="formAdmin" id="delStudentFromCourse">
                    <form onSubmit={this.deleteSubscription} className="">
                      <h4>
                        Eliminar alumno de un curso
                      </h4>
                      <TextField id="idStudentDSubscription" label="ID estudiante" placeholder="ID del estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentDSubscription}/>
                      <br/>
                      <h7>Curso</h7>
                      <br></br>
                      <select id="idCourseDSubscription" onChange={this.handleChange} value={this.state.idCourseDSubscription}>
                        {
                          this.state.student.map(n => {
                            return (<option value={n.idCourse}>{n.nameCourse}</option>);
                          })
                        }
                      </select>
                      <br/>
                      <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                      <button className="nav-link btn btn-success" type="submit">Dar de baja a alumno</button>
                    </form>
                    <br/>
                    <form onSubmit={this.createSubscription} className="">
                      <h4>
                        Inscribir alumno a un curso
                      </h4>
                      <TextField id="idStudentCSubscription" label="ID estudiante" placeholder="ID del estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentCSubscription}/>
                      <br/>
                      <h7>Curso</h7>
                      <br></br>
                      <select id="idCourseCSubscription" onChange={this.handleChange} value={this.state.idCourseDSubscription}>
                        {
                          this.state.student.map(n => {
                            return (<option value={n.idCourse}>{n.nameCourse}</option>);
                          })
                        }
                      </select>
                      <br/>

                      <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                      <button className="nav-link btn btn-success" type="submit">Inscribir alumno</button>
                    </form>
                  </div>
                </div>
                <br/>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <div className="row">
                  <div className="formAdmin">
                    <form onSubmit={this.deleteModule} className="">
                      <h4>
                        Eliminar módulo
                      </h4>
                      <TextField id="idDeleteModule" label="ID módulo" placeholder="ID del módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idDeleteModule}/>
                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">Eliminar módulo</button>
                    </form>
                    <br/>
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
                    <br/>
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
                    <br/>
                  </div>
                </div>
                <br/>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <div className="row">
                  <div className="formAdmin">
                    <form onSubmit={this.deleteAccount} className="">
                      <h4>
                        Borrar cuenta
                      </h4>
                      <TextField id="idStudentAccountDelete" label="ID " placeholder="ID de estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentAccountDelete}/>
                      <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                      <button className="nav-link btn btn-success" type="submit">Borrar cuenta</button>
                    </form>
                    <br/>

                    <form onSubmit={this.modifyAccount} className="">
                      <h4>
                        Modificar cuenta
                      </h4>
                      <TextField id="idStudentAccountModify" label="ID" placeholder="ID del estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentAccountModify}/>
                      <br/>
                      <TextField id="totalCreditModify" label="Crédito " placeholder="Crédito total" className="textField" margin="normal" onChange={this.handleChange} value={this.state.totalCreditModify}/>
                      <br/>
                      <TextField id="exigibleCreditModify" label="Crédito exigible" placeholder="Crédito exigible" className="textField" margin="normal" onChange={this.handleChange} value={this.state.exigibleCreditModify}/>
                      <br/>
                      <TextField id="interestsModify" label="Intereses" placeholder="Intereses" className="textField" margin="normal" onChange={this.handleChange} value={this.state.interestsModify}/>
                      <br/>
                      <TextField id="limitDateModify" label="Fecha límite" placeholder="Fecha límite" className="textField" margin="normal" onChange={this.handleChange} value={this.state.limitDateModify}/>
                      <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                      <button className="nav-link btn btn-success" type="submit">Modificar cuenta</button>
                    </form>
                    <br/>

                    <form onSubmit={this.createAccount} className="">
                      <h4>
                        Crear cuenta
                      </h4>
                      <TextField id="totalCredit" label="Crédito total " placeholder="Crédito total" className="textField" margin="normal" onChange={this.handleChange} value={this.state.totalCredit}/>
                      <br/>
                      <TextField id="exigibleCredit" label="Crédito exigible" placeholder="Crédito exigible" className="textField" margin="normal" onChange={this.handleChange} value={this.state.exigibleCredit}/>
                      <br/>
                      <TextField id="interests" label="Intereses" placeholder="Intereses" className="textField" margin="normal" onChange={this.handleChange} value={this.state.interests}/>
                      <br/>
                      <TextField id="limitDate" label="Fecha límite" placeholder="Fecha límite" className="textField" margin="normal" onChange={this.handleChange} value={this.state.limitDate}/>
                      <br/>
                      <TextField id="idStudentAccount" label="ID estudiante" placeholder="ID estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentAccount}/>
                      <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                      <button className="nav-link btn btn-success" type="submit">Crear cuenta</button>
                    </form>
                    <br/>
                  </div>
                </div>
                <br/>
              </div>
            </SwipeableViews>
          </div>
        </div>
      </div>

      <div className="upload-file">

        <div className="row divide-row">

          <div className="col-sm-6"></div>

          <div className="col-sm-6"></div>

        </div>

      </div>

    </div>);
  }
}

export default CreateCourse;
