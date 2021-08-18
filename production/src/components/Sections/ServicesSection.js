import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import showImage from '../assets/show.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#edebeb'
    },
    textWrapper: {
        paddingRight: '50px',
        paddingLeft: '50px',
        fontSize: '20px',
        fontWeight: 500,
        marginTop: 20,
        marginBottom: 0,
        color: '#000',
        paddingBottom: 100
    },
    image: {
        width: '40%',
        minWidth: '300px',
        margin: 'auto'
    },
    here: {
        color: '#031dba',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
         },
    }
}));

export default function ServicesSection() {

    const classes = useStyles();

    const clickHandler = () => {
        document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });

    }

    return (
    <div className={classes.root}>
        <h1>Services</h1>
        <div className = {classes.textWrapper}>
            <p className = {classes.headerWorkshops}>
                Bring the Fun to You: WEjumpROPE Workshops
            </p>
            <p className = {classes.textWorkshops}>
                WEjumpROPE offers the best jump rope workshops on the planet! Our record-holding members have taught "brand new beginners" and world champions alike at workshops in over 50 cities around the globe! Whether you are looking for a way to get the students in your P.E. class excited to move or an accomplished jump rope team looking to take gold at competitions, our passionate team of expert jumpers are some of the best in the game. Contact us <span className = {classes.here} onClick = {clickHandler}>HERE</span> for workshop inquires!
            </p>
            <img src={showImage} alt='' className = {classes.image}/>
            <p className = {classes.headerPromotional}>
                Promotional Services
            </p>
            <p className = {classes.textPromotional}>
                WEjumpROPE has built up an impressive online following. Across YouTube, Instagram, TikTok, Reddit, Gfycat, Firework, Like, and many more, the group has over half a million followers and over 100 million views. Our experience in video production combined with our unique talents and the promotion of our brand has lead to multiple brand deals including Nike, GymShark, and other fitness and fashion apparel companies. We also have been contracted with several social media companies to create content for their apps. Additionally, our fitness/travel lifestyle videos have been perfect fits for brands in the food industry; WEjumpROPE has worked with energy drink brands to promote their products in a high energy and attention grabbing fashion. If you have a great product and you are looking for an inexpensive and unique way to promote it across a large audience, contact us <span className = {classes.here} onClick = {clickHandler}>HERE</span>.
            </p>
        </div>
    </div>
    );
}