import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import Crossword from './Crossword.js'
import MultipleQuestion from './MultipleQuestion.js'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class ActivityDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qa: [],
      activites: []
    }
  }

  componentWillMount() {
    const type = this.props.match.params.type
    const idStu = this.props.match.params.idStudent
    const idActivity = this.props.match.params.idActivity
    const module = this.props.match.params.idModule
    console.log("id module", module)

    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/qa/${idActivity}`)
      .then(res => {
        const qas = res.data;

        this.setState({qa: qas });

       //   console.log("course", this.state.course[0].idCOURSE)
      })


      axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/activities/${module}`)
       .then(res => {
         const activities = res.data;

          this.setState({activites: activities });
            console.log("activites", this.state.activites[0])
       })


  }

  render() {
    const type = this.props.match.params.type
    const idStu = this.props.match.params.idStudent
    console.log("ALL Questions", this.state.qa)
    if(type == "Crucigrama"){
          return (
      <Crossword qa={this.state.qa} activities={this.state.activites} />

    )
    } else if(type == "Libre") {

    } else if(type == "Multiple") {
      return (
      <MultipleQuestion/>
    )
    }

  }
}

export default ActivityDetails;
