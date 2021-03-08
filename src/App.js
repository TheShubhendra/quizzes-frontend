import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
    <Home />
    </div>
    </Router>
 );
}

export default App;
