import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const Hats = props => {
  console.log(props);
  return (
    <div>Hats</div>
  )
}




function App(props) {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hats' component={Hats}/>
    </div>
  );
}

export default App;
