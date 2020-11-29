import React from 'react'
import Wrapper from "../../../../hoc/Wrapper/Wrapper";
import classes from './FoodControl.module.css'

const FoodControl=(props)=>{
    return(
        <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
                <div className="form-group row">
                    <div className="col-sm-6">
                        <button className="btn btn-sm btn-success ml" onClick={props.added}>افزایش</button>
                        <button className="btn btn-sm btn-danger ml" disabled={props.disabled} onClick={props.remove}>کاهش</button>
                    </div>
                    <lable className="col-sm-6 mt-5">{props.label}</lable>
                </div>
            </div>
        </div>
    )
}

export default FoodControl;
