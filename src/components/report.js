import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import Nav from './nav';

function notify(){
  console.log("button clicked!")

}


function Report() {
 
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
      <p className="header-close">report an issue or request a feature</p>

      <form className="full-form">
      <TextField
        id="outlined-input"
        className="outlined-input"
        label="Name"
        //value={values.name}
        margin="normal"
        variant="outlined"
      />
      <br/>
      <TextField
        id="outlined-input"
        className="outlined-input"
        label="Email"
        //value={values.name}
        margin="normal"
        variant="outlined"
      />
      <br/>
      <TextField
        id="outlined-multiline-flexible"
        multiline
        rows="8"
        className="outlined-input"
        label="Message"
        //value={values.name}
        margin="normal"
        variant="outlined"
      />
      <br/>
      <Button id="pink-button" variant="contained" onClick={notify()}>
        SUBMIT
      </Button>
      </form>

      </header>
    </div>
  );
}

export default Report;
