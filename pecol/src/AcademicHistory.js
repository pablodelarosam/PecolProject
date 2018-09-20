import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './AcademicHistory.css';
import NavBarDash from './NavBarDash.js'
import SideBar from './SideBar.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Signup from './Signup.js'

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    maxWidth: 300
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

const data = [
  createData('La excelencia del liderazgo a través de los valores', 9.0, 9.0, 9.0, 9.0),
  createData('La excelencia del liderazgo a través de los valores', 9.0, 9.0, 9.0, 9.0)
];

class AcademicHistory extends Component {
  constructor(props) {

    super(props);
  }

  render() {
    return (<div className="dashboard-top">
      <div>
        <NavBarDash idStudent={this.props.match.params.id}/>
      </div>
      <div className="academicHistory">
        <div className="row">
          <div className="container">
            <div class="custom-card">
              <div class="">
                Historial académico
              </div>
              <div class="card-body">
                <Paper className={this.props.root}>
                  <Table className={this.props.table}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Asignatura</TableCell>
                        <TableCell numeric="numeric">P1</TableCell>
                        <TableCell numeric="numeric">P2</TableCell>
                        <TableCell numeric="numeric">P3</TableCell>
                        <TableCell numeric="numeric">Calificación</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {
                        data.map(n => {
                          return (<TableRow key={n.id}>
                            <TableCell component="th" scope="row">
                              {n.name}
                            </TableCell>
                            <TableCell numeric="numeric">{n.partial1}</TableCell>
                            <TableCell numeric="numeric">{n.partial2}</TableCell>
                            <TableCell numeric="numeric">{n.partial3}</TableCell>
                            <TableCell numeric="numeric">{n.grade}</TableCell>
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
      </div>
    </div>);
  }

}

export default AcademicHistory;
