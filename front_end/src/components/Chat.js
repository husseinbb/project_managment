import React from 'react'
import Echo from 'laravel-echo';
import Axios from 'axios';

export default function Test() {
    const [message, setMessage] = React.useState({ message: ''})
    const [chat, setChat] = React.useState([])

    React.useEffect(() => {
        echo.private('chat')
        .listen('MessageSentEvent', (e) => {
            console.log(e)
            setChat([...chat,{name:e.user.name, message:e.message.message}])
            
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
            //setChat([...chat,{name:response.data.user, message:response.data.message.message}])
            // chat.push({message: response.data.message.message,
            //             name: response.data.user})

        });
        setMessage('');
      }
    
      const renderChat = () => {
        return chat.map(({ name, message }, index) => (
          <div key={index}>
            <h3>
              {name}: <span>{message}</span>
            </h3>
          </div>
        ))
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
        <button>Send Message</button>
      </form>
      <div >
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
    )
}
