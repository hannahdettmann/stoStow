import React from 'react';
import { 
    AppBar, 
    Toolbar,
    List, 
    ListItem,
    ListItemIcon
} from '@material-ui/core'
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Home } from '@material-ui/icons';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { Link } from 'react-router-dom';
import '../css/App.css';
import Grid from '@material-ui/core/Grid';

const Nav = () => {
    return (
        <div>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Grid container spacing={2}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}>
                        <Link to="/">
                            <Home className="nav_icon fab" />
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link to="/search">
                            <SearchIcon className="nav_icon fab" />
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link to="/add">
                            <AddCircleOutlinedIcon className="nav_icon fab "/>
                        </Link>
                        </Grid>
                        <Grid item xs={2}>
                        <Link to="/about">
                            <HelpOutlinedIcon className="nav_icon fab" />
                        </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav;