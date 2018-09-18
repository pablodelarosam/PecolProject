import React, { Component } from 'react';
import './Form.css';
import Message from './Message.js';
 import firebase from 'firebase';
 import axios from 'axios';
// import firebaseConfig from './config';
//
// const config = {
//   apiKey: "AIzaSyDXu72fg2m3VXrVKlfuoXgx_KvuBjlFV0Y",
//   authDomain: "pecol-307dd.firebaseapp.com",
//   databaseURL: "https://pecol-307dd.firebaseio.com",
//   projectId: "pecol-307dd",
//   storageBucket: "pecol-307dd.appspot.com",
//   messagingSenderId: "299288601847"
// }
//
// firebase.initializeApp(config)

export default class FormStudentMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Student',
      message: '',
      list: [],
    };
      var countm = 0;
    this.messageRef = firebase.database().ref().child(this.props.match.params.id);
//    this.messageRef.on("value", function(snapshot) {
//
//   console.log("There are "+snapshot.numChildren()+" messages");
//   countm = snapshot.numChildren();
//
//   return snapshot.numChildren();
// })

    console.log("mesagref", countm)


        this.listenMessages();


  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user) {
      this.setState({'userName': nextProps.user.displayName});
    }
  }

  componentDidMount() {
    console.log("PROSP MEESANGES", this.props.match.params)
    const idC = this.props.match.params.id
    axios.get(`http://ec2-54-187-156-131.us-west-2.compute.amazonaws.com:3004/student/${idC}`)
     .then(res => {
       const teacher = res.data;
       console.log("student info", teacher)
       this.setState({userName: teacher[0].nameStudent });
       this.listenMessages();
     })
  }



  handleChange(event) {
    this.setState({message: event.target.value});
  }
  handleSend() {
    if (this.state.message) {
      var newItem = {
        userName: this.state.userName,
        message: this.state.message,
      }
      this.messageRef.push(newItem);
      this.setState({ message: '' });
    }
  }
  handleKeyPress(event) {
    if (event.key !== 'Enter') return;
    this.handleSend();
  }
  listenMessages() {
    this.messageRef
      .limitToLast(10)
      .on('value', message => {
        console.log("m", message.numChildren())
        if( message.numChildren() > 0){
          if(Object.values(message.val()).length > 0 && Object.values(message.val()) != undefined && Object.values(message.val()) != null  ) {
            console.log(true)
            this.setState({
              list: Object.values(message.val()),
            });
          }
        }


      });
  }
  render() {
    return (
      <div className="form">
        <div className="form__message">
          { this.state.list.map((item, index) =>
            <Message key={index} message={item} />
          )}
        </div>
        <div className="form__row">
          <input
            className="form__input"
            type="text"
            placeholder="Escribe un mensaje"
            value={this.state.message}
            onChange={this.handleChange.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button
            className="form__button"
            onClick={this.handleSend.bind(this)}
          >
            send
          </button>
        </div>
      </div>
    );
  }
}
