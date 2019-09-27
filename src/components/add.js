import React from 'react';
import Nav from './nav';
import '../css/App.css';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



function Add() {
      const catgs = {
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

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
      <p>add an item to storage</p>
      <Grid container xs={12}
            justify="center"
            alignItems="left">
      <div className="full-form">
        <form >
          <Grid item xs={10}>
        <TextField
          id="outlined-input"
          className="outlined-input"
          label="Item Name / Description"
          //value={values.name}
          margin="normal"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={10}>
        <TextField
          id="outlined-input"
          className="outlined-input"
          label="Count"
          //value={values.name}
          margin="normal"
          variant="outlined"
        />
      <Grid item xs={12}>
      <p className="form-check">Categories</p>
        {Object.keys(catgs).map((c) => (
          <div className="form-check">
             <FormControlLabel
          control={
            
            <Checkbox
              checked={c.isChecked}
              className="check"
              //onChange={handleChange('checkedB')}
              value={c}
            />
        }
        label={catgs[c].description}
      />  
        </div>
        ))};
        </Grid>
        <Grid item xs={12} >

        <p className='form-check'>Location: </p>
        <Grid item xs={12} className="loc">
        <InputLabel htmlFor="age-simple">Aisle</InputLabel>
        <Select
          //value={values.age}
          //onChange={handleChange}
        >
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
          <MenuItem value={'D'}>D</MenuItem>
          <MenuItem value={'E'}>E</MenuItem>
          <MenuItem value={'F'}>F</MenuItem>
          <MenuItem value={'G'}>G</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12} className="loc">
        <InputLabel htmlFor="age-simple">Shelf</InputLabel>
        <Select
          //value={values.age}
          //onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
        </Grid>
        </Grid>
        </Grid>
        <div className="break">
        </div>
        <Button id="pink-button" variant="contained">
          SUBMIT
        </Button>
        </form>
      </div>
        </Grid>
      </header>
    </div>
  );
}

export default Add;
