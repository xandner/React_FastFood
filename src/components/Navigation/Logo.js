import logo from '../../assets/images/index.png'
import React from 'react'
import classes from "./Logo.module.css";


const Logo=(props)=>(
    <div className={classes.Logo}>
        <img src={logo} className={classes.LogoImage}/>
    </div>
)
export default Logo;