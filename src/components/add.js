import React,{Component} from 'react';
import Nav from './nav';
import '../css/App.css';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default class Item extends Component{

  constructor(props){ 
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCount = this.onChangeCount.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      count: '',
      category:[],
      location:'',
      catgs : {data:["consumables","nonConsumables",
      "artSuuplies","food","dinner","clothing","decor","campfire",
      "outdoorActivities","games","themedEvents","wrappingPaper",
      "lights","glowStuff","seasonalDecor"]}  
    }
  }
  onChangeLocation(e){
    this.setState({
      location: e.target.value
    })
  }
  onChangeName(e){
    this.setState({
      name: e.target.value
    });
  }
  onChangeCount(e){
    this.setState({
      count: e.target.value
    });
  }
  onChangeCategory(e){
    console.log(e.target.value)
    if(e.target.checked){
      //category.push(+e.target.value);
      var joined = this.state.category.concat(e.target.value)
      this.setState({category:joined});
    }
    else{
      this.setState({category: this.state.category.filter(category =>{
        return category !== e.target.value
      })});
    }
  }
  onSubmit(e){
    e.preventDefault();

      const item = {
        name: this.state.name,
        count: this.state.count,
        category: this.state.category,
        location: this.state.location
      }
      console.log(item);
      fetch('http://localhost:27017/api/add-item', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json'
      }
      }).then(res=>{
        return res.json();
      }).catch(err =>{
          console.log("didnt generate report");
        });
      window.location = '/add';
  }
  catgs = {
    consumables: {
      isChecked: false,
      description: 'consumables'
    },
    nonConsumables: {
      isChecked: false,
      description: 'non consumables'
    },
    artSupplies: {
      isChecked: false,
      description: 'art supplies'
    },
    food: {
      isChecked: false,
      description: 'food',
    },
    dinner: {
      isChecked: false,
      description: 'dining ware'
    },
    clothing: {
      isChecked: false,
      description: 'clothing'
    },
    decor: {
      isChecked: false,
      description: 'decor'
    },
    campfire: {
      isChecked: false,
      description: 'campfire equipment'
    },
    outdoorActivities: {
      isChecked: false,
      description: 'outdoor activities'
    },
    games: {
      isChecked: false,
      description: 'games'
    },
    themedEvents: {
      isChecked: false,
      description: 'themed events'
    },
    wrappingPaper: {
      isChecked: false,
      description: 'wrapping paper'
    },
    lights: {
      isChecked: false,
      description: 'lights'
    },
    glowStuff: {
      isChecked: false,
      description: 'glow in the dark'
    },
    seasonalDecor: {
      isChecked: false,
      description: 'seasonal decor'
    },
  };

  render() {
  return (
    <div className="App">
      <Nav />
      <body className="App-header">
        <br />
        <br />
        <br />
      <h3>add an item to storage</h3>
      <Grid container xs={12}
            justify="center"
            alignItems="left">
      <div className="full-form-add">
        <form >
          <Grid item xs={12}>
          <Grid item xs={12}>
          <Grid item xs={12}>
            <TextField
              id="outlined-input"
              className="outlined-input"
              label="Item Name / Description"
              value = {this.state.name}
              onChange = {this.onChangeName}
              margin="normal"
              variant="outlined"
            />
        </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-input"
              className="outlined-input"
              label="Count"
              value = {this.state.count}
              onChange = {this.onChangeCount}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      <Grid item xs={12}>
      <p className="form-text">Categories: </p>
      <br />
      </Grid>
      <Grid item xs={12}>
        {Object.keys(this.state.catgs.data).map((c) => (
          <div className="form-check">
             <FormControlLabel
          control={
            
            <Checkbox
              //checked={c.isChecked}
              className="check"
              onChange={this.onChangeCategory}
              value={this.state.catgs.data[c]}
            />
        }
        label={this.state.catgs.data[c]}
      />  
        </div>
        ))};
        </Grid>
        <Grid item xs={12} >
          <TextField
            id="outlined-input"
            className="outlined-input"
            label="location"
            value = {this.state.location}
            onChange = {this.onChangeLocation}
            margin="normal"
            variant="outlined"
          />
        </Grid>
       
        <Button id="pink-button" variant="contained" onClick={this.onSubmit}>
          SUBMIT
        </Button>
        <br />
        </Grid>
        </form>
      </div>
        </Grid>
      </body>
    </div>
  );

      }
    }
