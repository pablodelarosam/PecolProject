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
import SwipeableViews from 'react-swipeable-views';
import XLSX from 'xlsx';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Select from '@material-ui/core/Select';
import Dropzone from 'react-dropzone';
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
const rABS = true;
var styleNone = {
  display: 'none' // 'ms' is the only lowercase vendor prefix
};
let id = 0;
var companiesCount = 0;
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
class CreateCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      companiesCount: 0,
      company: [],
      autoplay: true,
      id: "",
      nameCompany: "",
      description: "",
      phone: "",
      password: "",
      idDelete: "",
      idModify: "",
      nameModify: "",
      descriptionModify: "",
      phoneModify: ""
    };
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
  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/allCompanies`).then(res => {
      const accounts = res.data;

      this.setState({company: accounts});
      //   console.log("course", this.state.course[0].idCOURSE)
      companiesCount = this.state.company.length;
      var badge = document.getElementById("qtyRecords");
      badge.textContent = "(Total: " + companiesCount + ")";
    })

  }
  handleSubmit = event => {
    event.preventDefault();

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createCompany`, {
      idCompany: this.state.id,
      nameCompany: this.state.nameCompany,
      description: this.state.description,
      phone: this.state.phone

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {

        this.setState({
          isLoggedIn: !(this.state.isLoggedIn)
        });
        alert("Se ha registrado la empresa correctamente");
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
  modifyStudent = event => {
    event.preventDefault();

    axios.put(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/modifyCompany`, {
      idModify: this.state.idModify,
      nameModify: this.state.nameModify,
      descriptionModify: this.state.descriptionModify,
      phoneModify: this.state.phoneModify

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
            axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteCompany`, {idDelete: id}).then(res => {
              console.log("SUCCESS", res);
              if (res.status == 200) {
                console.log("Student deleted successfully")
                alert("Se ha eliminado la empresa correctamente");
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
          <h2>
            Administrar empresas <span className="badge" id="qtyRecords"></span>
            <a className="btn btn-success" onClick={(e) => this.changeView(1, e)}>+</a>
          </h2>
          <div className="container">
            <div className="row">
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Nombre</Th>
                    <Th>Descripcion</Th>
                    <Th>Telefono</Th>
                    <Th></Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    this.state.company.map(n => {
                      return (<Tr>
                        <Td>{n.idCompany}</Td>
                        <Td>{n.nameCompany}</Td>
                        <Td>{n.description}</Td>
                        <Td>{n.phone}</Td>
                        <Td>
                          <Link className="customgoto" to={`/studentsCompany/${n.id}`}>
                            Ver
                          </Link>
                        </Td>
                        <Td>
                          <a className="btn btn-info" onClick={(e) => this.changeView(2, e)}>Modificar</a>
                        </Td>
                        <Td>
                          <a className="btn btn-danger" onClick={(e) => this.deleteSTD(n.id, e)}>Borrar</a>
                        </Td>
                      </Tr>);
                    })
                  }
                </Tbody>
              </Table>
            </div>
            <div className="row">
              <div className="formAdmin" id="modify" style={styleNone}>
                <form onSubmit={this.modifyCompany}>
                  <h4>
                    Modificar empresa
                  </h4>
                  <TextField id="idModify" label="ID empresa" placeholder="ID Empresa" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idModify}/>
                  <br/>
                  <TextField id="nameModify" label="Nombre" placeholder="Nombre" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameModify}/>
                  <br/>
                  <TextField id="descriptionModify" label="Descripcion" placeholder="Descripcion" className="textField" margin="normal" onChange={this.handleChange} value={this.state.descriptionModify}/>
                  <br/>
                  <TextField id="phoneModify" label="Telefono" placeholder="Telefono" className="textField" margin="normal" onChange={this.handleChange} value={this.state.phoneModify}/>
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
                <Tabs value={index} fullWidth="fullWidth" onChange={this.handleChange1} style={styles.tabs}>
                  <Tab label="Enlaces"/>
                </Tabs>
                <br/>
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                  <div style={Object.assign({}, styles.slide, styles.slide2)}>
                    <form onSubmit={this.handleSubmit} className="dropzone">
                      <h4>
                        Crear empresa
                      </h4>
                      <TextField id="idCompany" label="ID Empresa" placeholder="ID empresa" className="textField" margin="normal" onChange={this.handleChange} value={this.state.idStudent}/>
                      <br/>
                      <TextField id="nameCompany" label="Nombre" placeholder="Nombre" className="textField" margin="normal" onChange={this.handleChange} value={this.state.nameStudent}/>
                      <br/>
                      <TextField id="description" label="Descripcion" placeholder="Descripcion" className="textField" margin="normal" onChange={this.handleChange} value={this.state.description}/>
                      <br/>
                      <TextField id="phone" label="Telefono" placeholder="Telefono" className="textField" margin="normal" onChange={this.handleChange} value={this.state.phone}/>
                      <br/>
                      <br/> {/* <input type="submit" className="btn btn-success" value="Iniciar sesión" /> */}
                      <button className="nav-link btn btn-success" type="submit">Registrar</button>
                    </form>
                  </div>
                </SwipeableViews>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default CreateCompany;
