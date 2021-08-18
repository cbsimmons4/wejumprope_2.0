import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WeJumpRopeLogo from '../assets/WEjumpROPE-white.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingBottom: 5,
    backgroundColor: '#000'
  },
  image: {
      width: 200,
  },
  text: {
      fontSize: 10,
      padding: 0,
      margin: 0,
      color: '#fff'
  }
  
}));

export default function FooterSection() {

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <img src={WeJumpRopeLogo} alt='' className = {classes.image}/>
        <p className = {classes.text}>{`© 2021 WEjumpROPE, LLC`}</p>
    </div>
    );
}