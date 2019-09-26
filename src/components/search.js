import React from 'react';
import '../css/App.css';
import Nav from './nav';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    border: 0,
    height: 48,
    color: '#DD7E6A'
  },
  input: {
    color: 'whitesmoke'
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DD7E6A',
      light: '#DD7E6A',
      dark: '#DD7E6A',
      contrastText: '#DD7E6A'
    }
  }
})

function Search() {
  const classes = useStyles();
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <TextField
            id="standard-input"
            placeholder="Search..."
            type="standard"
            InputProps={{
              className: classes.input,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon className="search-icon"/>
                </InputAdornment>
              )
            }}
          />
        </ThemeProvider>        
      </header>
    </div>
  );
}

export default Search;
