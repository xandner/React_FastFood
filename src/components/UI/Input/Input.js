import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    let inputElement = null;
    const inputClasses=['form-group','text-right']
    if (!props.invalid && props.shuldValidation && props.touched){
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case('input'):
            inputElement = <input
                className={'form-control'}
                {...props.elementConfig}
                defaultValue={props.value}
                onChange={props.changed}/>
            break;

        case('textarea'):
            inputElement = <textarea
                className={'form-control'}
                {...props.elementConfig}
                onChange={props.changed}>
            {props.value}
            </textarea>
            break;
        case('select'):
            inputElement = (<select className={'form-control'} defaultValue={props.value} onChange={props.changed}>
                {props.elementConfig.options.map(
                    options=>(
                        <option value={options.value} key={options.value} onChange={props.changed}>{options.label}</option>
                    )
                )}
            </select>)
            break;

        default:
            inputElement = <input className={'form-control'} {...props.elementConfig} defaultValue={props.value}/>

    }
    return (
        <div className={inputClasses.join(' ')}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;
