import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ImageSlideShow } from '../Widgets/Widgets';
import WeJumpRopeLogo from '../assets/WEjumpROPE-white.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    background: 'rgb(251,63,63)',
    background: 'radial-gradient(circle, rgba(251,63,63,1) 0%, rgba(158,35,35,1) 78%, rgba(96,17,17,1) 100%)'
  },
  imageWrapper: {
      width: '50%',
      margin: 'auto',
      marginBottom: -50
  },
  image: {
      width: '100%'
  }
}));

export default function HeaderSection() {

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <div className={classes.imageWrapper}>
            <img src={WeJumpRopeLogo} alt='WEjumpROPE' className={classes.image}/>
        </div>
        <ImageSlideShow/>
    </div>
    );
}