import React from 'react'
import Logo from "../Logo";
import NavigationItems from "../NavigationsItems/NavigationItems";
import classes from './SlidDrawer.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";
import Wrapper from "../../../hoc/Wrapper/Wrapper";

const SlideDrawer=(props)=>{
    let attachedClasses=[classes.SlidDrawer, classes.close]
    if (props.open){
        attachedClasses=[classes.SlidDrawer, classes.open]
    }
    return(
        <Wrapper>
        <BackDrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Wrapper>
    )

}
export default SlideDrawer;