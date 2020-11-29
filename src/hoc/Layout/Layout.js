import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import classes from './layout.module.css'
import Toolbar from "../../components/Navigation/Toolbar";
import SlideDrawer from "../../components/Navigation/SlidDrawer/SliderDraw";

class Layout extends React.Component{
   constructor(props) {
       super(props);
       this.state={
           ShowSideDrower:false
       }
   }
    SlideDrowerClosedHandler=()=>{
        this.setState({ShowSideDrower:false})
    }
    DrawerToggleHandler=()=>{
       this.setState((prevState)=>{
           return {ShowSideDrower:!prevState.ShowSideDrower}
       })
    }
render(){
    return(
        <Wrapper>
            <Toolbar DrowerToggleClicked={this.DrawerToggleHandler} />
            <SlideDrawer open={this.state.ShowSideDrower} closed={this.SlideDrowerClosedHandler} />
            <main className={classes.mt}>
                {this.props.children}
            </main>
        </Wrapper>
    )
}


}
export default Layout;