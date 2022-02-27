import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { makeStyles } from '@material-ui/core';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom'


const useStyles = makeStyles({
    root:{
        width:'100%',
        position:"fixed",
        bottom:0,
         backgroundColor:'black',
        zIndex:100,
        

    }
})

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const history = useNavigate();

  useEffect(()=>{
      if(value === 0) history("/");
      else if(value === 1) history("/movies");
      else if(value === 2) history("/series");
      else if(value === 3) history("/search");

  },[value,history])

  return (
    <Box >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
        style={{backgroundColor:'rgb(7, 7, 7)'}}
      >
        <BottomNavigationAction  style={{color:'white'}} label="Trending" icon={<WhatshotIcon />}  />
        <BottomNavigationAction  style={{color:'white'}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction  style={{color:'white'}} label="TV Serries" icon={<TvIcon />} />
        <BottomNavigationAction  style={{color:'white'}} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}
