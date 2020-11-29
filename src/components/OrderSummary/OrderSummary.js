import React from 'react'
import Wrapper from "../../hoc/Wrapper/Wrapper";
import classes from './OrderSummary.module.css'
import Button from "../UI/Button/Button";

class OrderSummary extends React.Component{
    componentWillUpdate() {
        console.log('[Ordersummary] will update')
    }

    render() {
        const ingrediantsSummary=Object.keys(this.props.ingrediants).map(
            igKey=>{
                return <li key={igKey}> <span> {igKey}</span>:{this.props.ingrediants[igKey]}</li>
            }
        )
        return(
            <Wrapper>
                <div className={classes.orderMain}>
                    <h4>سفارش شما:</h4>
                    {ingrediantsSummary}
                </div>
                <hr/>
                <p>جهت ادامه انتخاب کنید:</p>
                <div>
                    <Button btnType='btn-success' clicked={this.props.purchaseCheckuot}>پرداخت</Button>
                    <Button btnType='btn-warning pull-left'  clicked={this.props.purchaseContinue}>ادامه خرید</Button>
                </div>
            </Wrapper>
        )
    }
}

export default OrderSummary;