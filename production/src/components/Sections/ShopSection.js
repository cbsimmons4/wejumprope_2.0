import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import fannypack from '../assets/shop/fannypack.gif'
import { fannyButton } from '../ShopButtons/ShopButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#edebeb'
  },
  cs: {
      paddingBottom: 100
  },
  shopContainer: {
      marginTop: 100,
      paddingBottom: 100,
      width: '80%',
      minWidth: 400,
      margin: 'auto'
  },
  shopItem: {
      textAlign: 'left',
      maxWidth: 400,
      width: '100%',
      margin: 'auto',
      marginTop: 100
  },
  shopItemImage: {
      width: '100%'
  },
  shopItemTitle: {
      fontSize: 20
  }
}));

export default function ShopSection() {
    const classes = useStyles();

    const createShopItem = (title, buttonHtml, image) => {
        return (
            <div className = {classes.shopItem}>
                <img src={image} alt='item' className={classes.shopItemImage}/>
                <p className={classes.shopItemTitle}> {title}</p>
                <div dangerouslySetInnerHTML={{ __html: buttonHtml }} />
            </div>
        )
    }

    return (
    <div className={classes.root}>
        <h1>Shop</h1>
        <div className = {classes.shopContainer}>
            {createShopItem('WEjumpROPE Fanny Pack ($15)', fannyButton, fannypack)}
            {/* Example: How to add more shop items */}
            {/* {createShopItem('WEjumpROPE Fanny Pack ($15)', fannyButton, fannypack)} */}
        </div>
    </div>
    );
}