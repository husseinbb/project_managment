
import Echo from 'laravel-echo';
import Axios from 'axios';
import Message from './Message'

import React, { Component } from 'react'


export default function Chat() {
    const [message, setMessage] = React.useState({ message: ''})
    const [chat, setChat] = React.useState([])
    console.log(chat);

    React.useEffect(() => {


        echo.private('chat')
        .listen('MessageSentEvent', (e) => {
            setChat(prevState => [...prevState,{name:e.employee.name, message:e.message.message}])
            
        },[]);           
      });

      const onTextChange = e => {
        setMessage({ ...message, [e.target.name]: e.target.value })
      }
    
      const onMessageSubmit = e => {
        e.preventDefault()
        Axios.post('/api/messages', {
            message
        }).then(response => {
          setChat(prevState => [...prevState, {name:response.data.user.name, message:response.data.message.message}]);


        });
        // setMessage('');
      }

      window.Pusher = require('pusher-js');
      let echo = new Echo({
          broadcaster: "pusher",
          cluster: 'ap2',
          encrypted: true,
          key:'f06b56dfd0ad241492b8',
          authorizer: (channel, options) => {
              return {
                  authorize: (socketId, callback) => {
                      Axios.post('/api/broadcasting/auth', {
                          socket_id: socketId,
                          channel_name: channel.name
                      })
                      .then(response => {
                          callback(false, response.data);
                      })
                      .catch(error => {
                          callback(true, error);
                      });
                  }
              };
          },
      })


    return (
        <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>

        <div>
          <input
            name="message"
            onChange={e => onTextChange(e)}
            value={message.message}
            label="Message"
          />
        </div>
        <input type='submit' value='Send Message'/>
      </form>
      <div >
        <h1>Chat Log</h1>
        <Message chat={chat}/>
      </div>
    </div>
    )
}
