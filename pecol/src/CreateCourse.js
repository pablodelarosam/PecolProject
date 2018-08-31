import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './CreateCourse.css';
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
class CreateCourse extends Component {
  constructor(props) {
      super(props);
    this.state = {
      idCOURSE: "",
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


  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  componentDidMount() {
    console.log("State", this.state)
  }

  handleSubmit = event => {
  event.preventDefault();


axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createCourse`, {
  idCOURSE: this.state.idCOURSE,
  nameCourse: this.state.nameCourse,
  introCourse: this.state.introCourse

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


 createSubscription = event => {
 event.preventDefault();


axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createSubscription`, {
 idStudentCSubscription: this.state.idStudentCSubscription,
 idCourseCSubscription: this.state.idCourseCSubscription

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


 deleteCourse = event => {
   event.preventDefault();


   axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteCourse`, {
     idDelete: this.state.idDelete,



    })
        .then(res => {
          console.log("SUCCESS", res);
          if(res.status == 200) {
              console.log("Student deleted successfully")
          //  browserHistory.replace("/login")
          //  store.set('loggedIn', true);
          //this.props.history.push("/");

          }
        })
 }


 deleteSubscription = event => {
   event.preventDefault();


   axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteSubscription`, {
     idStudentDSubscription: this.state.idStudentDSubscription,
     idCourseDSubscription: this.state.idCourseDSubscription,


    })
        .then(res => {
          console.log("SUCCESS", res);
          if(res.status == 200) {
              console.log("Student deleted successfully")
          //  browserHistory.replace("/login")
          //  store.set('loggedIn', true);
          //this.props.history.push("/");

          }
        })
 }

 modifyCourse = event => {
   event.preventDefault();

   axios.put(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyCourse`, {
     idModify: this.state.idModify,
     nameModify: this.state.nameModify


    })
        .then(res => {
          console.log("SUCCESS", res);
          if(res.status == 200) {
              console.log("Student modified successfully")
          //  browserHistory.replace("/login")
          //  store.set('loggedIn', true);
          //this.props.history.push("/");

          }
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

 deleteModule = event => {
   event.preventDefault();


   axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteModule`, {
     idDeleteModule: this.state.idDeleteModule,



    })
        .then(res => {
          console.log("SUCCESS", res);
          if(res.status == 200) {
              console.log("Student deleted successfully")
          //  browserHistory.replace("/login")
          //  store.set('loggedIn', true);
          //this.props.history.push("/");

          }
        })
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

 createAccount = event => {
   event.preventDefault();


 axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createAccount`, {
   totalCredit: this.state.totalCredit,
   exigibleCredit: this.state.exigibleCredit,
   interests: this.state.introCourse,
   limitDate: this.state.limitDate ,
   idStudentAccount: this.state.idStudentAccount

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

 deleteAccount = event => {
   event.preventDefault();


 axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteAccount`, {
   idStudentAccountDelete: this.state.idStudentAccountDelete

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

 modifyAccount = event => {
   event.preventDefault();


 axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyAccount`, {
   totalCreditModify: this.state.totalCreditModify,
   exigibleCreditModify: this.state.exigibleCreditModify,
   interestsModify: this.state.interestsModify,
   limitDateModify: this.state.limitDateModify ,
   idStudentAccountModify: this.state.idStudentAccountModify



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

        <div className="row divide-row">
          <div className="col-sm-6">
          <h4> Eliminar curso </h4>
          <form onSubmit={this.deleteCourse} className="formCourse">
            <TextField id="idDelete" label="Id" placeholder="Curso a eliminar" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idDelete}  />
            <br />


            <br />
            {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
            <button className="nav-link btn btn-success" type="submit">Crear curso</button>
          </form>

            <h4> Modificar curso </h4>
            <form onSubmit={this.modifyCourse} className="formCourse">
              <TextField id="idModify" label="Id" placeholder="Curso a modificar" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModify}  />
              <br />
              <TextField id="nameModify" label="Nombre" placeholder="Nombre del curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModify}  />


              <br />
              {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
              <button className="nav-link btn btn-success" type="submit">Modificar curso</button>
            </form>

          </div>

          <div className="col-sm-6">

            <h4> Crear curso </h4>

          <form onSubmit={this.handleSubmit} className="formCourse">
            <TextField id="idCOURSE" label="Id" placeholder="Id de curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idCOURSE}  />
            <br />
            <TextField id="nameCourse" label="Nombre" placeholder="Nombre de curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameCourse} />
            <br />
            <TextField id="introCourse" label="Edad" placeholder="Intro de curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.introCourse} />
            <br />

            <br />
            {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
            <button className="nav-link btn btn-success" type="submit">Crear curso</button>
          </form>



          </div>
          </div>
          <div>
            <h3> Inscripciones </h3>
          </div>
            <div className="row divide-row">



              <div className="col-sm-6">
                <h4> Eliminar alumno de un curso </h4>

                <form onSubmit={this.deleteSubscription} className="formCourse">
                  <TextField id="idStudentDSubscription" label="Id" placeholder="Id del estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentDSubscription}  />
                  <br />
                  <TextField id="idCourseDSubscription" label="Nombre" placeholder="Id del curso" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idCourseDSubscription}  />


                  <br />
                  {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
                  <button className="nav-link btn btn-success" type="submit">Dar de baja a alumno</button>
                </form>
              </div>

              <div className="col-sm-6">
                <h4> Inscribir alumno a un curso </h4>

                <form onSubmit={this.createSubscription} className="formCourse">
                  <TextField id="idStudentCSubscription" label="Id" placeholder="Estudiante a inscribir" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentCSubscription}  />
                  <br />
                  <TextField id="idCourseCSubscription" label="Nombre" placeholder="Curso a inscribir" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idCourseCSubscription}  />


                  <br />
                  {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
                  <button className="nav-link btn btn-success" type="submit">Inscribir alumno</button>
                </form>
              </div>

            </div>

            <div>
              <h3> Módulo </h3>
            </div>


            <div className="row divide-row">



              <div className="col-sm-6">
                <h4> Eliminar un módulo </h4>

                <form onSubmit={this.deleteModule} className="formCourse">
                  <TextField id="idDeleteModule" label="Id" placeholder="Id del estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idDeleteModule}  />
                  <br />


                  <br />
                  {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
                  <button className="nav-link btn btn-success" type="submit">Eliminar módulo</button>
                </form>

                <h4> Modificar un módulo </h4>

                <form onSubmit={this.modifyModule} className="formCourse">
                <TextField id="idModifyModule" label="Id " placeholder="ID de módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModifyModule}  />
                <br />
                <TextField id="nameModifyModule" label="Nombre" placeholder="Nombre de módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModifyModule}  />
                <br />
                <textarea style={{color:'black'}} className="texta" id="moduleModifyDescription" label="Id" placeholder="Descripción" className="textField" margin="normal" onChange={this.handleChange} value={this.state.moduleModifyDescription}  />
                <br />
                <TextField id="idModifyModuleCourse" label="Nombre" placeholder="Curso asociado" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModifyModuleCourse}  />
                <br />
                <input type="file" onChange={this.fileSelectedHandlerModify} />


                {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
                <button className="nav-link btn btn-success" type="submit">Modificar módulo</button>
                </form>


              </div>

              <div className="col-sm-6">
                <h4> Crear módulo </h4>

                <form onSubmit={this.createModule} className="formCourse">
                  <TextField id="idModule" label="Id " placeholder="ID de módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModule}  />
                  <br />
                  <TextField id="nameModule" label="Nombre" placeholder="Nombre de módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModule}  />
                  <br />
                  <textarea style={{color:'black'}} className="texta" id="moduleDescription" label="Id" placeholder="Descripción" className="textField" margin="normal" onChange={this.handleChange} value={this.state.moduleDescription}  />
                  <br />
                  <TextField id="idCourseModule" label="Nombre" placeholder="Curso asociado" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idCourseModule}  />
                  <br />
                  <input type="file" onChange={this.fileSelectedHandler} />


                  {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
                  <button className="nav-link btn btn-success" type="submit">Crear módulo</button>
                </form>
              </div>

            </div>

            <div>
              <h3> Cuenta </h3>
            </div>

  <div className="row divide-row">
  <div className="col-sm-6">

    <h4> Borrar cuenta </h4>

    <form onSubmit={this.deleteAccount} className="formCourse">
      <TextField id="idStudentAccountDelete" label="Id " placeholder="ID de estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentAccountDelete}  />
      <br />



      {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
      <button className="nav-link btn btn-success" type="submit">Borrar cuenta</button>
    </form>


      <h4> Modificar cuenta </h4>

      <form onSubmit={this.modifyAccount} className="formCourse">
      <TextField id="idStudentAccountModify" label="Id" placeholder="Id del estudiante" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentAccountModify}  />
      <br />
        <TextField id="totalCreditModify" label="Crédito " placeholder="Crédito total" className="textField" margin="normal" onChange={this.handleChange} value={this.state.totalCreditModify}  />
        <br />
        <TextField id="exigibleCreditModify" label="Crédito exigible" placeholder="Crédito exigible" className="textField" margin="normal" onChange={this.handleChange} value={this.state.exigibleCreditModify}  />
        <br />
        <TextField id="interestsModify" label="Intereses" placeholder="Intereses" className="textField" margin="normal" onChange={this.handleChange} value={this.state.interestsModify}  />
        <br />
        <TextField id="limitDateModify" label="Fecha límite" placeholder="Fecha límite" className="textField" margin="normal" onChange={this.handleChange} value={this.state.limitDateModify}  />
        <br />




        {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
        <button className="nav-link btn btn-success" type="submit">Modificar cuenta</button>

        </form>

  </div>


  <div className="col-sm-6">

  <h4> Crear cuenta </h4>

  <form onSubmit={this.createAccount} className="formCourse">
    <TextField id="totalCredit" label="Id " placeholder="ID de módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.totalCredit}  />
    <br />
    <TextField id="exigibleCredit" label="Nombre" placeholder="Nombre de módulo" className="textField" margin="normal" onChange={this.handleChange} value={this.state.exigibleCredit}  />
    <br />
    <TextField id="interests" label="Nombre" placeholder="Curso asociado" className="textField" margin="normal" onChange={this.handleChange} value={this.state.interests}  />
    <br />
    <TextField id="limitDate" label="Nombre" placeholder="Curso asociado" className="textField" margin="normal" onChange={this.handleChange} value={this.state.limitDate}  />
    <br />
    <TextField id="idStudentAccount" label="Nombre" placeholder="Curso asociado" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudentAccount}  />
    <br />



    {/*<input type="submit" className="btn btn-success" value="Iniciar sesión" />*/}
    <button className="nav-link btn btn-success" type="submit">Crear cuenta</button>
  </form>

  </div>

  </div>




        </div>



      </div>

    );
  }
}

export default CreateCourse;
