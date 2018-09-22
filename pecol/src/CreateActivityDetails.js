import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import NavBar from './NavBar.js'
import carmen from './carmen.jpeg' // relative path to image
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
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
class CreateActivityDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSelected: null,
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

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteVideo`, {idActivityPresentationDelete: this.state.idACTIVITYPresentationDelete}).then(res => {
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

  render() {
    return (<div className="dashboard-top">
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

          <div className="col-sm-6"></div>

          <div className="col-sm-6">

            <form onSubmit={this.handleSubmit}>
              <h3>
                Crear video
              </h3>
              <TextField id="idACTIVITY" placeholder="ID de la actividad" onChange={this.handleChange} value={this.state.idACTIVITY}/>
              <TextField id="urlVideo" placeholder="url de video" onChange={this.handleChange} value={this.state.urlVideo}/>
              <button type="submit">
                Crear video
              </button>

            </form>

            <form>
              <h3>
                Borrar video
              </h3>
              <TextField id="urlVideoDelete" placeholder="id de la actividad" onChange={this.handleChange} value={this.state.urlVideoDelete}/>
              <button type="submit" onClick={this.deleteVideo}>
                Borrar video
              </button>

            </form>

          </div>

          <div>
            <form onSubmit={this.handleSubmitPresentation}>
              <h3>
                Crear presentación
              </h3>
              <TextField id="idACTIVITYPresentation" placeholder="ID de la actividad" onChange={this.handleChange} value={this.state.idACTIVITYPresentation}/>
              <TextField id="urlPresentation" placeholder="url de la presentacion" onChange={this.handleChange} value={this.state.urlPresentation}/>
              <button type="submit">
                Crear presentación
              </button>

            </form>

            <form>
              <h3>
                Borrar presentación
              </h3>
              <TextField id="idACTIVITYPresentationDelete" placeholder="ID de la actividad" onChange={this.handleChange} value={this.state.idACTIVITYPresentationDelete}/>
              <button type="submit" onClick={this.deletePresentation}>
                Borrar presentación
              </button>

            </form>

          </div>

          <div>

            <form onSubmit={this.handleSubmitQuestionFree}>
              <h3>
                Crucigrama y Evaluación
              </h3>
              <TextField id="idACTIVITYQuestion" placeholder="ID de la actividad" onChange={this.handleChange} value={this.state.idACTIVITYQuestion}/>
              <TextField id="question" placeholder="pista o pregunta" onChange={this.handleChange} value={this.state.question}/>
              <button type="submit">
                Agregar pregunta o pista
              </button>

            </form>

            <form>
              <h3>
                Crucigrama y Evaluación
              </h3>
              <TextField id="idactivityquestion" placeholder="ID de la actividad" onChange={this.handleChange} value={this.state.idactivityquestion}/>
              <button type="submit" onClick={this.deleteQuestion}>
                Borrar preguntas
              </button>

            </form>

          </div>

        </div>
      </div>

    </div>);
  }
}

export default CreateActivityDetails;
