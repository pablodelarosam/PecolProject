import React, {Component} from 'react';
import './Message.css';
import Form from './Form.js';



export default class Message extends Component {

  render() {

      console.log("PROPS MESSAGE", this.props)
    return (
      <div className="message">
                <span className="message__author">
                    {this.props.message.userName}:
                </span>
        {this.props.message.message}
      </div>
    )
  }
}
