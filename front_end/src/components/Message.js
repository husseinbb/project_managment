import React from 'react'

export default function Message(props) {
    const chats = props.chat;
  return (
    <ul>
      {chats.map(({message,name}, index) => (
          <div key={index}>
            <h3>
            {name}: <span>{message}</span>
            </h3>
          </div>
      ))}
    </ul>
  );
}
