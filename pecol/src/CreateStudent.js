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
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import NavBarAdmin from './NavBarAdmin.js'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import FormData from 'form-data'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});
var styleNone = {
  display: 'none' // 'ms' is the only lowercase vendor prefix
};
let id = 0;
function createData(name, partial1, partial2, partial3, grade) {
  id += 1;

  return {
    id,
    name,
    partial1,
    partial2,
    partial3,
    grade
  };

}
class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: [],
      autoplay: true,
      id: "",
      nameStudent: "",
      age: "",
      email: "",
      password: "",
      idDelete: "",
      idModify: "",
      nameModify: "",
      ageModify: "",
      emailModify: "",
      passwordModify: ""
    };
  }
  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/allStudent`).then(res => {
      const accounts = res.data;

      this.setState({student: accounts});
      //   console.log("course", this.state.course[0].idCOURSE)
    })
  }
  handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/signupStudent`, {
      id: this.state.id,
      nameStudent: this.state.nameStudent,
      age: this.state.age,
      email: this.state.email,
      password: this.state.password

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        this.setState({
          isLoggedIn: !(this.state.isLoggedIn)
        });
        console.log('Successfully Login', this.state);
        alert("Se ha registrado el estudiante correctamente");
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
  deleteStudent = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteStudent`, {idDelete: this.state.idDelete}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        console.log("Student deleted successfully")
        alert("Se ha eliminado el estudiante correctamente");
        //  browserHistory.replace("/login")
        //  store.set('loggedIn', true);
        //this.props.history.push("/");

      }
    }).catch((error) => {
      //handle error
      alert("Hubo un problema, intente nuevamente");
    });
  }
  modifyStudent = event => {
    event.preventDefault();

    axios.put(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyStudent`, {
      idModify: this.state.idModify,
      nameModify: this.state.nameModify,
      ageModify: this.state.ageModify,
      emailModify: this.state.emailModify,
      passwordModify: this.state.passwordModify

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        console.log("Student modified successfully")
        alert("Se ha modificado el estudiante correctamente");
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
            axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteStudent`, {idDelete: id}).then(res => {
              console.log("SUCCESS", res);
              if (res.status == 200) {
                console.log("Student deleted successfully")
                alert("Se ha eliminado el estudiante correctamente");
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
          <h2>
            Administrar estudiantes
            <a className="btn btn-success" onClick={(e) => this.changeView(1, e)}>+</a>
          </h2>
          <div className="container">
            <div className="row">
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Nombre</Th>
                    <Th>Email</Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    this.state.student.map(n => {
                      return (<Tr>
                        <Td>{n.idstudent}</Td>
                        <Td>{n.nameStudent}</Td>
                        <Td>{n.email}</Td>
                        <Td>
                          <a className="btn btn-info" onClick={(e) => this.changeView(2, e)}>Modificar</a>
                        </Td>
                        <Td>
                          <a className="btn btn-danger" onClick={(e) => this.deleteSTD(n.idstudent, e)}>Borrar</a>
                        </Td>
                      </Tr>);
                    })
                  }
                </Tbody>
              </Table>
            </div>
            <div className="row">
              <div className="formAdmin" id="modify" style={styleNone}>
                <form onSubmit={this.modifyStudent}>
                  <h4>
                    Modificar estudiante
                  </h4>
                  <TextField id="idModify" label="Id" placeholder="Estudiante a modificar" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModify}/>
                  <br/>
                  <TextField id="nameModify" label="Nombre" placeholder="Nombre" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModify}/>
                  <br/>
                  <TextField id="ageModify" label="Edad" placeholder="Edad" className="textField" margin="normal" onChange={this.handleChange} value={this.state.ageModify}/>
                  <br/>
                  <TextField id="emailModify" label="E-mail" placeholder="E-mail" className="textField" margin="normal" onChange={this.handleChange} value={this.state.emailModify}/>
                  <br/>
                  <TextField id="passwordModify" label="Contraseña" type="password" placeholder="Contraseña" className="textField" margin="normal" onChange={this.handleChange} value={this.state.passwordModify}/>
                  <br/>
                  <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                  <button className="nav-link btn btn-success" type="submit">Modificar</button>
                </form>
              </div>
              {/*<div className="col-sm-12 formAdmin">
                    <h4>
                      Borrar estudiante
                    </h4>
                    <form onSubmit={this.deleteStudent} className="formCourse">
                      <TextField id="idDelete" label="Id" placeholder="Id" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idDelete}/>
                      <br/>
                      <button className="nav-link btn btn-success" type="submit">Borrar estudiante</button>

                    </form>
                  </div>*/
              }

              <div className="formAdmin" id="create" style={styleNone}>
                <form onSubmit={this.handleSubmit}>
                  <h4>
                    Crear estudiante
                  </h4>
                  <TextField id="id" label="Id" placeholder="Id" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudent}/>
                  <br/>
                  <TextField id="nameStudent" label="Nombre" placeholder="Nombre" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameStudent}/>
                  <br/>
                  <TextField id="age" label="Edad" placeholder="Edad" className="textField" margin="normal" onChange={this.handleChange} value={this.state.age}/>
                  <br/>
                  <TextField id="email" label="E-mail" placeholder="E-mail" className="textField" margin="normal" onChange={this.handleChange} value={this.state.email}/>
                  <br/>
                  <TextField id="password" label="Contraseña" type="password" placeholder="Contraseña" className="textField" margin="normal" onChange={this.handleChange} value={this.state.password}/>
                  <br/>
                  <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                  <button className="nav-link btn btn-success" type="submit">Registrar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default CreateStudent;
