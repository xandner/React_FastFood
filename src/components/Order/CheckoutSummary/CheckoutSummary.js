import React from 'react'
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Food from '../../Food/Food'
import Button from "../../UI/Button/Button";

const CheckoutSummary=(props)=>{
    return(
        <Wrapper>
            <div className="container">
                <h3>سفارش شما:</h3>
                <div>
                    <Food ingrediants={props.ingrediants} />
                </div>
                <div className="text-right">
                    <Button btnType='btn-success' clicked={props.checkoutFinal}>ادامه خرید</Button>
                    <Button btnType='btn-danger pull-left' clicked={props.checkoutCancel} >انصراف</Button>
                </div>

            </div>
        </Wrapper>
    )
}

export default CheckoutSummary;