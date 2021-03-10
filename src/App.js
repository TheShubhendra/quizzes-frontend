import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './components/Home';
import FriendshipQuiz from './components/Friendship';

function App() {
  return (
    <div className="App">
    <Switch>

    <Route path="/friendship/">
	  <FriendshipQuiz />
    </Route>
    <Route path="/">
	  <Home />
	  </Route>
    </Switch>
    </div>
 );
}

export default App;
