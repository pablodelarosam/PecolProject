import React, {Component} from 'react';

import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Account.css';
import NavBarDash from './NavBarDash.js';

import carmen from './carmen.jpeg' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Signup from './Signup.js'
import axios from 'axios';

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

const data = [createData('La excelencia del liderazgo a través de los valores', 9.0, 9.0, 9.0, 9.0)];

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: []
    }

  }

  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/getPersonnelAccount/${idC}`).then(res => {
      const accounts = res.data;

      this.setState({account: accounts});
      //   console.log("course", this.state.course[0].idCOURSE)
    })
  }

  render() {

    return (<div className="dashboard-top">
      <div>
        <NavBarDash idStudent={this.props.match.params.id}/>
      </div>
      <div className="row">
          <h2>Estado de cuenta</h2>
          <div className="container">
            <div class="card custom-card">
              <div class="card-header text-center">
                Estado de pagos
              </div>
              <div class="card-body">
                <Paper className={this.props.root}>
                  <Table className={this.props.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Alumno</TableCell>

                        <TableCell numeric="numeric">Saldo total</TableCell>
                        <TableCell numeric="numeric">Exigible a la fecha</TableCell>
                        <TableCell numeric="numeric">Pago para no generar intereses</TableCell>
                        <TableCell numeric="numeric">Fecha límite</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {
                        this.state.account.map(n => {
                          return (<TableRow key={n.idStudent}>
                            <TableCell component="th" scope="row">
                              {n.idStudent}
                            </TableCell>
                            <TableCell numeric="numeric">{n.saldoTotal}</TableCell>
                            <TableCell numeric="numeric">{n.saldoExigible}</TableCell>
                            <TableCell numeric="numeric">{n.intereses}</TableCell>
                            <TableCell numeric="numeric">{n.limitDate}</TableCell>

                          </TableRow>);
                        })
                      }
                    </TableBody>

                  </Table>
                </Paper>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
      </div>
    </div>);
  }
}
export default Account;
