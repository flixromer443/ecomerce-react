import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width:"100%",
    backgroundColor:"blue",
    bottom:0,
    position:"fixed",
    height:"130px",
    fontSize:"50px",
 
  },
  icons:{
      color:"white"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <Link to="/" ><BottomNavigationAction label="Home" value="Home" icon={<HomeIcon fontSize="large" className={classes.icons} />} /></Link>
        <Link to="/Pages/Registro"><BottomNavigationAction label="Login" value="Login" icon={<PersonAddIcon fontSize="large"/>}className={classes.icons} /></Link>
        <Link to="/Pages/Login"><BottomNavigationAction label="Registro" value="Registro" icon={<AccountCircleIcon fontSize="large"/>} className={classes.icons}/></Link>
    </BottomNavigation>
  );
}
