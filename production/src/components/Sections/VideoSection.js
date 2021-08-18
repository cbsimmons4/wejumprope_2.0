import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IG, YT } from '../Widgets/Widgets';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#000000',
    ['& > h1']: {
        color: '#fff',
        marginBottom: 40
    }
  },
  contentContainer: {
      width: '92%',
      margin: 'auto'
  },
  yt: {
        width: '100%',
        marginBottom: 100
  },
  ig: {
    width: '100%',
    paddingBottom: 100
}
  
}));

export default function VideosSection() {

    const classes = useStyles();

    return (
    <div className={classes.root}>
        <h1>Videos</h1>
        <div className = {classes.contentContainer}>
            <div className = {classes.yt}>
                <YT/>
            </div>
            <div className = {classes.ig}>
                <IG/>
            </div>
        </div>
    </div>
    );
}