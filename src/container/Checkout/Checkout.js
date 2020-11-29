import React from 'react'
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from 'react-router-dom'
import ContactData from "../ContactData/ContactData";

class Checkout extends React.Component{
    state={
        ingrediants:null,
        totalPrice:0
    }
    checkoutcFinalHandler=()=>{
        this.props.history.replace('/checkout/contact-data')
    }
    checkoutcCancelHandler=()=>{
        this.props.history.goBack()
    }
    componentWillMount() {
        const query=new URLSearchParams(this.props.location.search);
        const ingrediants=[];
        let price=0

        for (let param of query.entries()){
            if (param[0]==='price'){
                price=param[1]
            }else {
                ingrediants[[param[0]]]=+param[1]
            }

        }
        this.setState({ingrediants:ingrediants,totalPrice:price})
        console.log('ingrediants',ingrediants)
    }

    render() {
        return(
            <div>
                <CheckoutSummary ingrediants={this.state.ingrediants }
                                 checkoutFinal={this.checkoutcFinalHandler}
                                 checkoutCancel={this.checkoutcCancelHandler}


                />
                <Route path={this.props.match.path+'/contact-data'} render={(props)=>(<ContactData ingrediants={this.state.ingrediants} totalPrice={this.state.totalPrice} {...props}/>)} />
            </div>
        )
    }

}

export default Checkout;