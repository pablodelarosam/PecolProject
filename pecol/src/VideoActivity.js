import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './VideoActivity.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
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
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class VideoActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkPecol: []
    }
  }


  componentDidMount() {
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/getVideo/${this.props.idActivity}`)
     .then(res => {
       const rule = res.data;
       console.log("links", rule)
       this.setState({linkPecol: rule });
        console.log("links", this.state.linkPecol)
     })
  }

  render() {
    return (
      <div className="dashboard-top">
        <div>

        </div>
        <div className="row">

            <div className="col-sm-12 sideBar-left">
              <h2>Video</h2>
              <div className="container">

                  <div className="row">

                      {this.state.linkPecol.map((data) =>
                    <div className="col-sm-12" >

                  <iframe className="iframe" width="800" height="500" src={data.urlVideo} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                  )}







                </div>




              </div>
            </div>

        </div>

        </div>


    );
  }
}

export default VideoActivity;
