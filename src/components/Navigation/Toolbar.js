import React from 'react'
import Wrapper from "../../hoc/Wrapper/Wrapper";
import classes from './Toolbar.module.css';

import NavigationItems from "./NavigationsItems/NavigationItems";
import BackDrop from "../UI/BackDrop/BackDrop";
import DrowerToggle from "./SlidDrawer/DrowerToggle/DrowerToggle";
import Logo from "./Logo";


const Toolbar=(props)=>{
    return(
        <Wrapper>
            <header className={classes.Toolbar}>
                <nav className={[classes.navItem,classes.DesktopOnly].join(' ')}>
                <NavigationItems/>

            </nav>
                <div className={[classes.DivLogo,classes.DesktopOnly].join(' ')}>
                    <Logo/>
                </div>
                <div className={classes.MobileOnly}>
                    <DrowerToggle clicked={props.DrowerToggleClicked}/>
                </div>


            </header>

        </Wrapper>
    )
}
export default Toolbar;