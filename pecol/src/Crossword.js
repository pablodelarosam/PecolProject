import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './Dashboard.css';
import './Crossword.css';
import NavBar from './NavBar.js'
import carmen from './carmen.png' // relative path to image
import cristi from './imgs/cristi.png'
import frida from './imgs/frida.png'
import gabi from './imgs/gabi.png'
import logoPe from './imgs/xaxa.png'
import acuerdo from './imgs/acuerdo.jpg'
import SideBar from './SideBar.js'
import Signup from './Signup.js'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
class Crossword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qa: [],
      activites: []
    }
  }

  componentDidMount(){
    console.log("Crossword details", this.props)

    console.log("id module", module)

    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/qa/${this.props.idActivity}`)
      .then(res => {
        const qas = res.data;

        this.setState({qa: qas });

       //   console.log("course", this.state.course[0].idCOURSE)
      })


      axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/activitiesOne/${this.props.idModule}/${this.props.idActivity}`)
       .then(res => {
         const activities = res.data;

          this.setState({activites: activities });
            console.log("activites", this.state.activites[0])
       })


  }

  handleChange = event => {
    console.log(this.state)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    var counter = 0;
    var operacion = 0;
  event.preventDefault();
  const formData = {};
      for (const data in this.refs) {
        formData[data] = this.refs[data].value;
      }
    this.state.qa.map((data, index) => {
      console.log(data.answerCrossword, formData[index])
      if(data.answerCrossword == formData[index]){
        counter++;
      }
    }

    )
    operacion = (this.state.qa.length * 100) / counter
    console.log(operacion)
    console.log(formData);

  const [input] = event.target.children
   console.log('Your name is', event.target.value);
   const formDataF = new FormData();
  formDataF.append('grade', operacion)
  formDataF.append('nameActivity', this.state.activites[0].nameActivity)
  formDataF.append('typeActivity', "Crucigrama")
  formDataF.append('idStudent', this.props.idStudent)


  // axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createTeacher`, this.formData)

  axios.post(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/createNormalGrade`, formDataF, {
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
  };

  render() {
    return (


              <div className="">


                  <div className="container container-crossword">
                      <h2>Crucigrama</h2>
                      {this.state.activites.map((data) =>
                        <div>
                        <img className="cross-img" src={data.contentImage}/>

                        </div>
                      )}

                      <div className="row">
                        {this.state.qa.map((data) =>
                        <div className="col-sm-6">



                        </div>
                      )}


                      </div>


                      <div className="row">
                        <form className="form-cross" onSubmit={this.handleSubmit}>
                        {this.state.qa.map((data, index) =>
                        <div className="col-sm-6">

                        <input className="ia"  ref={index} id={`answer-${index}`} name={`answer-${index}`} placeholder={`Respuesta ${index + 1}`} type="text" onChange={this.handleChange}   />

                        </div>
                      )}
                          <button type="submit" className="sub-cross"> Enviar respuestas </button>

                      </form>


                      </div>

                  </div>

              </div>


    );
  }
}

export default Crossword;
