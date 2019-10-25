import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import Nav from './nav';
import axios from 'axios';
export default class Report extends Component{

  constructor(props){ 
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

    notify(){
      console.log("button clicked!");
    }
    onChangeName(e){
      this.setState({
        name: e.target.value
      });
    }
    onChangeEmail(e){
      this.setState({
        email: e.target.value
      });
    }
    onChangeMessage(e){
      this.setState({
        message: e.target.value
      });
    }
    onSubmit(e){
      e.preventDefault();

      const report = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
      console.log(report);
      fetch('http://localhost:27017/api/add-report', {
        method: 'POST',
        body: JSON.stringify(report),
        headers: {
          'Content-Type': 'application/json'
      }
      }).then(res=>{
        return res.json();
      }).catch(err =>{
          console.log("didnt generate report");
        });
      window.location = '/report';
    }
    render() {
 
      return (
        <div className="App">
          <Nav />
          <body className="App-header">
          <p className="header-close">report an issue or request a feature</p>
    
          <form action="/api/add-report" method="POST" onSubmit={this.onSubmit} className="full-form">
          <TextField
            id="outlined-input"
            className="outlined-input"
            label="Name"
            value = {this.state.name}
            onChange={this.onChangeName}
            margin="normal"
            variant="outlined"
          />
          <br/>
          <TextField
            id="outlined-input"
            className="outlined-input"
            label="Email"
            value = {this.state.email}
            onChange={this.onChangeEmail}
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
            value = {this.state.message}
            onChange={this.onChangeMessage}
            //value={values.name}
            margin="normal"
            variant="outlined"
          />
          <br/>
          <div className="form-group">
          <input type="submit" id="pink-button" variant="contained" className="btn btn-primary"></input>
          </div>      
          </form>
    
          </body>
        </div>
      );
    } 
}

