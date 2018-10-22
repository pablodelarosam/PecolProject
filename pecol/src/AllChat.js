import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './AcademicHistory.css';
import './AllTeacher.css';
import './AllChat.css';
import carmen from './carmen.png' // relative path to image
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
import axios from 'axios';
import firebase from 'firebase';
import Signup from './Signup.js'
import {StyleSheet, View, Button, Alert} from 'react';

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
var copyarray;
class AllChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      student: [],
      badget: 0
    }

  }

  componentDidMount() {
    let _this = this;
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://localhost:3004/allStudent`).then(res => {
      const accounts = res.data;
      copyarray = accounts

      //  console.log("course", copyarray)
      //copyarray = this.state.student

      for (var i = 0; i < copyarray.length; i++) {
        copyarray[i].badget = 0;

        //
        this.messageRef = firebase.database().ref().child(copyarray[i].idstudent);
        //
        this.messageRef.orderByKey().limitToLast(1).on('child_added', function(snapshot) {
          //  console.log('new record', snapshot.val().badget);
          for (var i = 0; i < copyarray.length; i++) {
            //this.state.student[i].badget = snapshot.val().badget;
            if (copyarray[i].nameStudent == snapshot.val().userName) {
              //    console.log("same issue")
              if (snapshot.val().badget != null && snapshot.val().badget != undefined) {
                copyarray[i].badget = snapshot.val().badget;
              }

            }
          }

        });

      }
      // console.log("To sort descending/highest first, use operator '<'");
      //
      // copyarray.sort(function(a, b) {
      //   return a.badget.valueOf() < b.badget.valueOf();
      // });
      //
      // console.log(copyarray);

      console.log("To sort ascending/lowest first, use operator '>'");

      // copyarray.sort(function(a, b) {
      //   return a.badget.valueOf() > b.badget.valueOf();
      // });

      console.log(copyarray.sort(this.sorterPriceAsc));

    //  console.log("sortedobd", copyarray.sort(this.comparator))
      setTimeout(function() {
        _this.setState({student: copyarray});
        //  console.log("students", _this.state.student)

      }, 10000);

    })
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

    sorterPriceAsc(a,b) {
    return parseInt(a['badget']) - parseInt(b['badget']);
}

  compare(a, b) {
    if (a.badget < b.badget)
      return -1;
    if (a.badget > b.badget)
      return 1;
    return 0;
  }

  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result = (a[property] < b[property])
        ? -1
        : (a[property] > b[property])
          ? 1
          : 0;
      return result * sortOrder;
    }
  }

  comparator(a, b) {
    return parseInt(a["price"], 10) - parseInt(b["price"], 10);
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
          </nav>
        </div>
        <div className="row">
          <div className="col-sm-3 sideBar-left"></div>

          <div className="col-sm-12 sideBar-left">
            <h2>Chats</h2>
            <div className="container">
              <div class="card custom-card  ">

                <div class="card-body">
                  <Paper className={this.props.root}>
                    <Table className={this.props.table}>
                      <TableHead>

                        <TableRow>
                          <TableCell>ID</TableCell>

                          <TableCell numeric="numeric">Nombre</TableCell>
                          <TableCell numeric="numeric"></TableCell>
                          <TableCell numeric="numeric"></TableCell>
                          <TableCell numeric="numeric"></TableCell>

                          <TableCell numeric="numeric">Mensajes sin leer</TableCell>

                        </TableRow>

                      </TableHead>

                      <TableBody>

                        {this.state.student.map(n => {

                          console.log("badgte", n.badget)

                          return (
                            <Link className="link-custom" to={`/messagesPersonnel/${n.idstudent}`}>
                              <TableRow key={n.idStudent}>
                                <TableCell component="th" scope="row">
                                  {n.idstudent}
                                </TableCell>

                                <TableCell numeric>{n.nameStudent}</TableCell>

                                <TableCell numeric>{n.badget}</TableCell>

                              </TableRow>
                            </Link>
                          );
                        })}
                      </TableBody>

                    </Table>
                  </Paper>
                </div>
                <div class="card-footer text-muted"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    );

  }

}

export default AllChat;
