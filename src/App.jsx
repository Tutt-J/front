import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Faire une requête GET vers le serveur Node.js
    axios.get('http://localhost:3000/api')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the message!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Message from Node.js:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
