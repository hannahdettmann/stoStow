import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import search from './search';
import add from './add';
import Homepage from './homepage';


function Layout() {    
    return (
      <div>    
       
        <div >
              {/* routes */}
              <Router>
              <Switch>
                <Route exact path="/" component={Homepage} /> 
                <Route exact path="/search" component={withRouter(search)} />
                <Route exact path="/add" component={withRouter(add)} />
              </Switch>
              </Router>
        </div>
      </div>
    )
}



export default Layout