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
  },
  slide4: {
    backgroundColor: '#FFF'
  }
};
class CreateActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      student: [],
      fileSelected: null,
      idACTIVITY: "",
      nameActivity: "",
      typeActivity: "",
      idModule: "",
      numero: "",
      idACTIVITY: "",
      urlVideo: "",
      urlVideoDelete: "",
      urlPresentation: "",
      idACTIVITYPresentation: "",
      idACTIVITYPresentationDelete: "",
      idACTIVITYQuestion: "",
      question: "",
      idactivityquestion: ""
    };
  }

  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/AllCourses`).then(res => {
      const activities = res.data;
      this.setState({student: activities});
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

  handleChange1 = (event, value) => {
    this.setState({index: value});
  };
  handleChangeIndex = index => {
    this.setState({index});
  };

  handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.fileSelected)
    formData.append('idACTIVITY', this.state.idACTIVITY)
    formData.append('nameActivity', this.state.nameActivity)
    formData.append('typeActivity', this.state.typeActivity)
    formData.append('idModule', this.state.idModule)
    formData.append('order', this.state.numero)

    // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/allActivities`, formData, {
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

  submitVideo = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.fileSelected)
    formData.append('idACTIVITY', this.state.idACTIVITY)
    formData.append('urlVideo', this.state.urlVideo)

    // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createVideo`, formData, {
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

  handleSubmitPresentation = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.fileSelected)
    formData.append('idACTIVITYPresentation', this.state.idACTIVITYPresentation)
    formData.append('urlPresentation', this.state.urlPresentation)

    // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createPresentation`, formData, {
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

  handleSubmitQuestionFree = event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.fileSelected)
    formData.append('idACTIVITYQuestion', this.state.idACTIVITYQuestion)
    formData.append('question', this.state.question)

    // axios.post(`http://ec2-34-212-223-202.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createCrossword`, formData, {
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

  deleteVideo = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteVideo`, {urlVideo: this.state.urlVideoDelete}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    })
  }

  deletePresentation = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deletePresentation`, {idActivityPresentationDelete: this.state.idACTIVITYPresentationDelete}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    })
  }

  deleteQuestion = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteCrossword`, {idactivityquestion: this.state.idactivityquestion}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    })
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
              Administrar actividades
              <a className="btn btn-success" onClick={(e) => this.changeView(1, e)}>+</a>
            </h2>
            <div className="row">
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Nombre</Th>
                    <Th>Tipo</Th>
                    <Th>ID módulo</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    this.state.student.map(n => {
                      return (<Tr>
                        <Td>{n.idActivity}</Td>
                        <Td>{n.nameActivity}</Td>
                        <Td>{n.typeActivity}</Td>
                        <Td>{n.idModule}</Td>
                        <Td>
                          <a className="btn btn-info" onClick={(e) => this.changeView(2, e)}>Modificar</a>
                        </Td>
                      </Tr>);
                    })
                  }
                </Tbody>
              </Table>
            </div>
            <div className="row">
              <div className="formAdmin" id="create" style={styleNone}>
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
              <div className="formAdmin" id="modify" style={styleNone}>
                <form onSubmit={this.modifyModule} className="">
                  <h4>
                    Modificar actividad
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
              <Tab label="Video"/>
              <Tab label="Presentación"/>
              <Tab label="Crucigrama"/>
              <Tab label="Pregunta"/>
            </Tabs>
            <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <div className="row">
                  <div className="formAdmin col-md-6">
                    <form onSubmit={this.submitVideo}>
                      <h3>
                        Crear video
                      </h3>
                      <TextField id="idACTIVITY" label="ID Actividad" placeholder="ID de la actividad" onChange={this.handleChange} value={this.state.idACTIVITY}/>
                      <br/>
                      <TextField id="urlVideo" label="URL Actividad" placeholder="URL de video" onChange={this.handleChange} value={this.state.urlVideo}/>
                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">
                        Crear enlace
                      </button>
                    </form>
                  </div>
                  <div className="formAdmin col-md-6">

                    <form>
                      <h3>
                        Borrar video
                      </h3>
                      <TextField id="urlVideoDelete" label="ID Actividad" placeholder="ID actividad" onChange={this.handleChange} value={this.state.urlVideoDelete}/>
                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit" onClick={this.deleteVideo}>
                        Borrar video
                      </button>

                    </form>
                  </div>
                </div>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                <div className="row">
                  <div className="formAdmin col-md-6">
                    <form onSubmit={this.handleSubmitPresentation}>
                      <h3>
                        Crear presentación
                      </h3>
                      <TextField id="idACTIVITYPresentation" label="ID Actividad" placeholder="ID actividad" onChange={this.handleChange} value={this.state.idACTIVITYPresentation}/>
                      <br/>
                      <TextField id="urlPresentation" label="URL presentación" placeholder="URL presentacion" onChange={this.handleChange} value={this.state.urlPresentation}/>

                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">
                        Crear presentación
                      </button>
                    </form>
                  </div>
                  <div className="formAdmin col-md-6">

                    <form>
                      <h3>
                        Borrar presentación
                      </h3>
                      <TextField id="idACTIVITYPresentationDelete" label="ID Actividad" placeholder="ID Actividad" onChange={this.handleChange} value={this.state.idACTIVITYPresentationDelete}/>
                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit" onClick={this.deletePresentation}>
                        Borrar presentación
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <div className="row">
                  <div className="formAdmin col-md-6">
                    <form onSubmit={this.handleSubmitQuestionFree}>
                      <h3>
                        Agregar pregunta
                      </h3>
                      <TextField id="idACTIVITYQuestion" label="ID Actividad" placeholder="ID Actividad" onChange={this.handleChange} value={this.state.idACTIVITYQuestion}/>

                      <br/><TextField id="question" label="Pista o pregunta" placeholder="Pista o pregunta" onChange={this.handleChange} value={this.state.question}/>
                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">
                        Agregar
                      </button>

                    </form>
                  </div>
                  <div className="formAdmin col-md-6">

                    <form onSubmit={this.deleteQuestion}>
                      <h3>
                        Borrar
                      </h3>
                      <TextField id="idactivityquestion" label="ID Actividad" placeholder="ID Actividad" onChange={this.handleChange} value={this.state.idactivityquestion}/>
                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">
                        Borrar preguntas
                      </button>

                    </form>

                  </div>
                </div>
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3)}>
                <div className="row">
                  <div className="formAdmin col-md-6">
                    <form onSubmit={this.handleSubmitQuestionFree}>
                      <h3>
                        Agregar pregunta
                      </h3>
                      <TextField id="idACTIVITYQuestion" label="ID Actividad" placeholder="ID Actividad" onChange={this.handleChange} value={this.state.idACTIVITYQuestion}/>

                      <br/><TextField id="question" label="Pista o pregunta" placeholder="Pista o pregunta" onChange={this.handleChange} value={this.state.question}/>
                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">
                        Agregar
                      </button>

                    </form>
                  </div>
                  <div className="formAdmin col-md-6">

                    <form onSubmit={this.deleteQuestion}>
                      <h3>
                        Borrar
                      </h3>
                      <TextField id="idactivityquestion" label="ID Actividad" placeholder="ID Actividad" onChange={this.handleChange} value={this.state.idactivityquestion}/>
                      <br/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">
                        Borrar preguntas
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

export default CreateActivity;
