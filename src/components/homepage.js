import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import StorageIcon from '@material-ui/icons/Storage';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import { Link } from 'react-router-dom'
import '../css/App.css';

function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <h2>
            StoStorage
          </h2>
          <br />
        </Grid>
        
        <Grid item xs={12}>
        <StorageIcon className="big_icon"/>
        </Grid>
        
        <Grid item xs={12}>
        <br />
        <p>
          a virtrual storage experience!
        </p>
        <br />
        </Grid>

        <Grid item xs={4}>
            <Link to="/search">
                <IconButton aria-label="add" color="secondary">
                <SearchIcon className="med_icon fab" />
                </IconButton>
            </Link>
            <p>search an item</p>
        </Grid>

        <Grid item xs={4}>
        <Link to="/add">
        <IconButton aria-label="add" color="secondary">
          <AddCircleOutlinedIcon className="med_icon" />
        </IconButton>
        </Link>
          <p>add an item</p>
        </Grid>

        <Grid item xs={4}>
            <Link to="/report">
        <IconButton aria-label="add" color="secondary">
          <HelpOutlinedIcon className="med_icon" />
        </IconButton>
        </Link>
          <p>what is this</p> 
        </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default Homepage;
