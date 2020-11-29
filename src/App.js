import logo from './logo.svg';
import './App.css';
import React from 'react'
import Layout from './hoc/Layout/Layout'
import FoodBuilder from './container/FoodBuilder/FoodBuilder'
import Checkout from "./container/Checkout/Checkout";
import {Route,Switch} from 'react-router-dom'



class App extends React.Component{
    // state={
    //     show:true
    // }
    // componentDidMount() {
    //     setTimeout(()=>{
    //         this.setState({show:false})
    //     },5000)
    // }
    render() {
        return (
            <div className="App ">
                <Layout>
                    <Switch>

                        <Route path={'/checkout'} component={Checkout}/>
                        <Route path={'/'} exact component={FoodBuilder}/>
                    </Switch>



                </Layout>
            </div>
        );

    }
}



export default App;
