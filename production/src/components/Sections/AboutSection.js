import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TJImage from '../assets/devTJtransparent.png';
import crypticImage from '../assets/crypticimage.png';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  image: {
      width: '100%',
      maxWidth: 400,
      margin: 'auto',
      cursor: 'pointer'
  },
  aboutText1: {
      padding: 20,
      fontSize: '20px',
      textAlign: 'left',
      fontWeight: 500
  },
  aboutText2: {
    padding: 20,
    fontSize: '20px',
    textAlign: 'left',
    fontWeight: 500,
    marginTop: 20,
    marginBottom: 50
},
button: {
    width: 300,
    marginBottom: 100,
    background: 'radial-gradient(circle, rgba(251,63,63,1) 0%, rgba(158,35,35,1) 78%, rgba(96,17,17,1) 100%)',
},
modalWrapper: {
    // width: '100%',
    // height: '100%',
    
},
crpyWrapper: {
    width: '100%'
},
crpyimage: {
    display: 'block',
    margin: 'auto',
    width: '80%'
},
crypticMessageWapper: {
    width: '80%',
    margin: 'auto',
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: '10px'
},
inputField: {
    backgroundColor: '#FFF'
},
submitButton: {
    marginTop: '20px'
}
  
}));

export default function AboutSection() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [isIan, setisIan] = useState(false);
    const [input, setInput] = useState('');

    const itIshandleIsIan = () => {
        setisIan(true);
    }

    const itIsNOThandleIsIan = () => {
        setisIan(false);
    }

    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
        itIsNOThandleIsIan();
    };

    const handleSubmit = (answer) => {
        if (answer.toLowerCase().trim() === 'gregnorf') {
            itIshandleIsIan();
        }
    }

    return (
    <div className={classes.root}>
        <h1>About</h1>
        <Grid container spacing={3}>
            <Grid item sm={12} md={4}>
                    <img src={TJImage} alt='' className = {classes.image} onClick = {handleOpen}/>                
            </Grid>
            <Grid item sm={12} md={8}>
                <p className = {classes.aboutText1}>
                    WEjumpROPE is in Orlando, FL performance group, media production company, team of workshop leaders, competitive jump rope team, and above all, a bunch of friends dedicated to spreading their shared passion.
                </p>
                <p className = {classes.aboutText2}>
                    WEjumpROPE started in December of 2014 when it's founding members decided to grow a YouTube channel dedicated to making content for jump rope lovers across the globe. Since then, WEjumpROPE has grown across various media platforms hitting millions of views with viral clips, performed at schools and theatres across the United States, have become world champions in the leading international jump rope organizations, and have taught workshops all over the world. Make sure to follow our social media pages to keep up with our fun adventures!
                </p>
                <Button
                 variant="contained" 
                 color="secondary"
                 className = {classes.button}
                 onClick = {() => {
                    document.getElementById('shop-section').scrollIntoView({ behavior: 'smooth' });
                 }}
                 >
                    Shop!
                </Button>
            </Grid>
        </Grid>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <div className = {classes.crpyWrapper}>
                <ClickAwayListener onClickAway={handleClose}>
                    {!isIan ? 
                        <div className={classes.crypticMessageWapper}>
                            <>
                                <h1>SUPER HIGH-TECH SECURITY THAT ONLY ALLOWS IAN HENRY TO ACCESS</h1>
                                <p>Type in the name of the great captain who had many great pear adventures to continue.<br/><br/>CAPTAIN...</p>
                                <TextField
                                className={classes.inputField}
                                id="standard-basic"
                                placeholder = 'enter here' 
                                value = {input}
                                onChange = { (event) => {setInput(event.target.value)}} />
                                <div>
                                <Button className={classes.submitButton} variant="contained" color="primary" onClick = {() => {handleSubmit(input)}}>
                                    Submit
                                </Button>
                                </div>
                             </>
                        </div>
                    : 
                    <div className={classes.crypticMessageWapper}>
                        <p>Access Granted. Hello Ian Henry...</p>
                        <p>Here is your next clue.</p>
                        <img src={crypticImage} alt='' className = {classes.crpyimage} onClick = {handleOpen}/>
                    </div>
                    }
                </ClickAwayListener>
            </div>
        </Modal>
    </div>
    );
}