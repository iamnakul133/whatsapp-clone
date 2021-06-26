import React, { useEffect, useState} from 'react';
import "./App.css";

import Sidebar from "./sidebar"
import Chat from "./Chat"
import Pusher from "pusher-js"
import axios from "./axios"

function App() {
  const [message,setMessages] = useState([]);

  useEffect(() => {
    axios.get('./messages/sync')
      .then(response => {
        setMessages(response.data);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('51500df75a018f3515d1', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage) => {
      setMessages([...message,newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[message]);

  console.log(message);
  return (
    <div className="app">
      <div className="app_body">
      <Sidebar />
      <Chat />
      </div>
     
    </div>
   

  );
}

export default App;
