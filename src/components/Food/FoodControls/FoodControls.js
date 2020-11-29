import React from 'react'
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import FoodControl from './FoodControl/FoodControl'
import classes from './FoodControls.module.css'

const controls = [
    {label: "سالاد", type: "salad"},
    {label: "پنیر", type: "cheese"},
    {label: "هات داگ", type: "hotDog"}
]
const FoodControls = (props) => {
    return (
        <Wrapper>

            <div className={classes.mainBack}>
                <strong>قیمت نهایی :{props.price}تومان</strong>
                {controls.map(ctrl => (
                    <FoodControl key={ctrl.label}
                                 label={ctrl.label}
                                 added={() => props.ingrediantAdd(ctrl.type)}
                                 remove={() => props.ingrediantRemove(ctrl.type)}
                                 disabled={props.disabled[ctrl.type]}
                    />
                ))}
                <button className="btn btn-primary" disabled={!props.purchasable} onClick={props.order}>خرید</button>
            </div>
        </Wrapper>
    )
}

export default FoodControls;
