import React from 'react'

import Wrapper from "../../../hoc/Wrapper/Wrapper";
import classes from './FoodIngrediant.module.css'
import propTypes from 'prop-types'

class FoodIngrediant extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let ingredients = null;
        switch (this.props.type) {
            case('breadLeft'):
                ingredients = <div className={classes.bread}>نان چپ</div>
                break
            case('breadRight'):
                ingredients = <div className={classes.bread}>نان راست</div>
                break
            case ('hotDog'):
                ingredients = <div className={classes.hotDog}>هات داگ</div>
                break;
            case ('cheese'):
                ingredients = <div className={classes.cheese}>پنیر</div>
                break
            case ('salad'):
                ingredients = <div className={classes.salad}>سالاد</div>
                break
            default:
                ingredients = null

        }
        return ingredients;

    }
}

FoodIngrediant.prototypes = {
    type: propTypes.string.isRequired
}
export default FoodIngrediant;