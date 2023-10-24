import React, { useEffect } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";

function App() {

  useEffect(() => {
    const pusher = new Pusher('e0240fc6d04ca0fa9821', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
