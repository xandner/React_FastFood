import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from "./NavigationItem/NavigationItem";


const NanigationItems=(props)=>(

        <ul className={classes.NavigationItems}>
           <NavigationItem link="/" exact >صفحه اصلی</NavigationItem>
           <NavigationItem link="/checkout" >پرداخت</NavigationItem>
        </ul>

)
export default NanigationItems;
