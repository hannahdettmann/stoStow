import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import router from './components/router';
import './css/App.css';


const App = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={router} />
      </Switch>
    </BrowserRouter>
)

export default App
