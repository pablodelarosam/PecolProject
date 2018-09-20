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
var styleNone = {
  display: 'none' // 'ms' is the only lowercase vendor prefix
};
class CreateRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rulesPecol: [],
      idRule: "",
      nameRule: "",
      descriptionRule: "",
      idDelete: "",
      idModify: "",
      nameModify: "",
      descriptionModify: ""
    }
  }
  componentDidMount() {
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/rules`).then(res => {
      const rule = res.data;
      console.log("rules", rule)
      this.setState({rulesPecol: rule});
      console.log("rules", this.state.rulesPecol)
    })
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
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }).then((response) => {
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

    axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteRule`, {idDelete: this.state.idDelete}).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
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

    }).then(res => {
      console.log("SUCCESS", res);
      if (res.status == 200) {
        console.log("Student modified successfully")
        alert("Se ha modificado la regla correctamente");
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
  deleteSTD(id) {
    confirmAlert({
      title: 'Confirmar acción',
      message: '¿Deseas borrar este registro?',
      buttons: [
        {
          label: 'Si',
          onClick: () => {
            axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/deleteRule`, {idDelete: id}).then(res => {
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
          <div className="container">
            <h2>
              Administrar reglas
              <a className="btn btn-success" onClick={(e) => this.changeView(1, e)}>+</a>
            </h2>
              <div className="row">
                <Table>
                  <Thead>
                    <Tr>
                      <Th>ID</Th>
                      <Th>Título</Th>
                      <Th>Descripción</Th>
                      <Th></Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      this.state.rulesPecol.map(n => {
                        return (<Tr>
                          <Td>{n.idRule}</Td>
                          <Td>{n.title}</Td>
                          <Td>{n.description}</Td>
                          <Td>
                            <a className="btn btn-info" onClick={(e) => this.changeView(2, e)}>Modificar</a>
                          </Td>
                          <Td>
                            <a className="btn btn-danger" onClick={(e) => this.deleteSTD(n.idRule, e)}>Borrar</a>
                          </Td>
                        </Tr>);
                      })
                    }
                  </Tbody>
                </Table>
              </div>
            <div className="row">
              <div className="formAdmin" id="create" style={styleNone}>
                <form onSubmit={this.handleSubmit}>
                  <h3>
                    Crear regla
                  </h3>
                  <TextField margin="normal" className="textField" id="idRule" placeholder="Id" onChange={this.handleChange} value={this.state.idRule}/>
                  <br/>
                  <TextField margin="normal" className="textField" id="nameRule" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameRule}/>
                  <br/>
                  <TextField margin="normal" className="textField" id="descriptionRule" placeholder="Descripción" onChange={this.handleChange} value={this.state.descriptionRule}/>
                  <br/>
                  <button className="nav-link btn btn-success" type="submit">
                    Crear regla
                  </button>

                </form>
              </div>
              <div className="formAdmin" id="modify" style={styleNone}>
                <form onSubmit={this.modifyRule}>
                  <h3>
                    Modificar regla
                  </h3>
                  <TextField margin="normal" className="textField" id="idModify" placeholder="Id" onChange={this.handleChange} value={this.state.idModify}/>
                  <br/>
                  <TextField margin="normal" className="textField" id="nameModify" placeholder="Nombre" onChange={this.handleChange} value={this.state.nameModify}/>
                  <br/>
                  <TextField margin="normal" className="textField" id="descriptionModify" placeholder="Descripción" onChange={this.handleChange} value={this.state.descriptionModify}/>
                  <br/>
                  <button className="nav-link btn btn-success" type="submit">
                    Modificar regla
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default CreateRule;
