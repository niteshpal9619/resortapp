// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional: For performance measuring
import {RoomProvider} from './context'

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root element for rendering the app
root.render(
  <RoomProvider>
    <Router>
        <App />
    </Router>
  </RoomProvider>
);

// Optional: If you want to start measuring performance in your app, pass a function to log results
reportWebVitals();
