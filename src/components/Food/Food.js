import React from 'react'
import FoodIngrediant from "./FoodIngredient/FoodIngredeant";
import {withRouter} from 'react-router-dom'

const food = (props) => {
    let transfornIngrediantds = Object.keys(props.ingrediants).map(
        igKey => {
            return [...Array(props.ingrediants[igKey])].map((_, i) => {
                return <FoodIngrediant key={igKey + i} type={igKey}/>
            })
        }
    ).reduce((arr,el)=>{
        return arr .concat(el)
    },[])
    console.log(transfornIngrediantds)

    if (transfornIngrediantds.length===0){
        transfornIngrediantds=<p>لطفا انتخاب کنید</p>
    }
    return (
        <div className="container">
            <FoodIngrediant type="breadLeft"/>
            {transfornIngrediantds}
            <FoodIngrediant type="breadRight"/>
        </div>
    )
}
export default withRouter(food);
