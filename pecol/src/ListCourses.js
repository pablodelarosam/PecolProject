import React, {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './ListCourses.css';
import NavBarDash from './NavBarDash.js';
import axios from 'axios';
import human from './imgs/human.jpg'

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
};

class ListCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: []
    };
  }

  componentDidMount() {
    const idC = this.props.match.params.id
    console.log("PROPS", this.props.match.params.id, idC)
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/ListCourses/${idC}`).then(res => {
      const courses = res.data;
      this.setState({course: courses});
      console.log("course", this.state.course[0])
    })
  }

  gotoCourseDetails() {
    console.log("clicked")
  }

  render() {

    return (<div className="dashboard-top">
      <div>
        <NavBarDash idStudent={this.props.match.params.id}/>
      </div>
      <div className="row">
        <div className="mainContent">
          <div className="col-sm-12">
            <h2>Cursos</h2>
            <div className="container">
              <div className="row">
                {
                  this.state.course.map((data, index) => <div className="col-sm-12" key={data.idCOURSE}>
                    <div className="card col-md-3 course-card">
                      <img className="card-img-top" src={human} alt="Card image cap"/>
                      <div className="card-body">
                        <h5 className="card-title">{data.nameCourse}</h5>
                        <Link className="customgoto" to={`/courseDetails/${this.props.match.params.id}/${data.idCourse}`}>
                          Ir al curso
                        </Link>
                      </div>
                    </div>
                  </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default ListCourses;
