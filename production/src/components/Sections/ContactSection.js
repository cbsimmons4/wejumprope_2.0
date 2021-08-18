import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ContactForm } from '../Widgets/Widgets';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',  
    ['& > h1']: {
        marginTop: 40,
        marginBottom: 40
    }  
  },
  contentContainer: {
      width: '92%',
      margin: 'auto'
  },
  contact: {
        width: '100%',
        marginBottom: 100,
  } 
}));

export default function ContactSection() {

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <h1>Contact</h1>
        <div className = {classes.contentContainer}>
            <div className = {classes.contact}>
                <ContactForm/>
            </div>
        </div>
    </div>
    );
}