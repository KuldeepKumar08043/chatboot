import React, { Component } from 'react';
import './App.css';
import TextMessage from './component/textMessage/text-message';
import MessageList from './component/messageList/messageList';

class App extends Component {
  constructor() {
    super();
  }

  state = {
    rendomMsg: ['Rendom Text 1', 'Rendom Text 2', 'Rendom Text 3', 'Rendom Text 4', 'Rendom Text 5'],
    msgList: [],
    charStatus: false
  }

  addMessageInList = (msg) => {
    this.setState({
      msgList: [...this.state.msgList, msg]
    }, () => {
      this.addDynamicUserMsg();
    });
  }

  addDynamicUserMsg = () => {
    let rendomNum = Math.floor(Math.random() * this.state.rendomMsg.length);
    this.setState({
      msgList: [...this.state.msgList, this.state.rendomMsg[rendomNum]]
    });
  }

  openChatStatus = () => {
    this.setState({
      charStatus: !this.state.charStatus
    });
  }

  render() {
    return (
      <div className="App">
        { this.state.charStatus ? <div className="user">
          <div className="user-info">
            <img className="avtar" src="https://p.kindpng.com/picc/s/630-6306130_avatar-avatar-male-user-icon-hd-png-download.png" />
            <span className="name">User name</span>
          </div>
          <ul className="user-list">
            {
              this.state.msgList && this.state.msgList.map((item, index) => (
                <MessageList key={index} items={item} />
              ))
            }
          </ul>
          <TextMessage handleClick={this.addMessageInList} />
        </div> : ''
        }
        <div className="chatStatus" onClick={this.openChatStatus}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT60OH6Zllm4xPxYQYlrK3jAT9S2G9faoQP-w&usqp=CAU" />
        </div>
      </div>
    );
  }

}

export default App;
