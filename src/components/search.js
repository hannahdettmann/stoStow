import React,{Component} from 'react';
import '../css/App.css';
import Nav from './nav';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

export default class Search extends Component{
  constructor(props){
    super(props);
    this.token = null;
    this.onChange = this.onChange.bind(this);
    this.Search = this.Search.bind(this);
    this.state = {
      query:'',
      item: []
      }
    }
    

    onChange(e){
      this.setState({
        query: e.target.value
      });
    }
    Search(e){
      if(e.key === 'enter'){
        e.preventDefault();
        const url = 'http://localhost:27017/api/get-item';
        const token = {};
        this.token = token;

        fetch(url)
          .then(results => results.json())
          .then(data =>{
            if(this.token == token){
              this.setState({item: data.results});
            }
          });
          //remove after prod
          console.log(this.state.item);    
      }
    }

  
  render() {
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
    });
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
          <ThemeProvider theme={theme}>
            <TextField
              id="standard-input"
              onChange = {this.onChange}
              onKeyDown = {this.Search}
              placeholder="Search..."
              type="standard"
              InputProps={{
                className: useStyles.input,
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
}

