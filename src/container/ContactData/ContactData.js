import React from 'react'
import Button from "../../components/UI/Button/Button";
import axios from '../../axios-orders'
import Spinner from "../../components/UI/Spinner/Spinner";
import Input from "../../components/UI/Input/Input";


class ContactData extends React.Component {
    state = {
        orderForm: {
            name: {
                label: 'نام و نام خانوادگی',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'نام و نام خانوادگی'
                },
                value: '',
                validation:{
                    required:true,
                    minLength:5,
                    maxLength:10
                },
                valid:false,
                touched:false
            },
            email: {
                label: 'ایمیل',
                elementType: 'input',
                elementConfig: {
                    type: 'emil',
                    placeholder: 'پست الکترونیک'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            address: {
                label: 'address',
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'آدرس'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            deliveryMethod: {
                label: 'نوع ارسال',
                elementType: 'select',
                elementConfig: {
                    options: [
                        {label: "ارسال با پست پیشتاز", value: 'pistaz'},
                        {label: "ارسال با پست اکسپس", value: 'express'}
                    ]
                },
                value: '',
                valid:true,
                validation:{}

            }
        },
        loading: false,
        formIsValid:false
    }
    orderHandler = (event) => {
        event.preventDefault()

        this.setState({loading: true})
        const formData = {};
        for (let formEIf in this.state.orderForm) {
            formData[formEIf] = this.state.orderForm[formEIf].value
        }

        console.log('OrederForm:',this.state.orderForm)


        const order = {
            ingrediants: this.props.ingrediants,
            price: this.props.totalPrice,
            Order: formData

        }
        // alert(this.state.orderForm)
        axios.post('posts', order).then(
            repsonse => {
                this.setState(
                    {loading: false})
                this.props.history.push('/')


                console.log(repsonse)
            }
        ).catch(error => {
            this.setState({loading: false})
            console.log(error)
        })
    }
    checkValidity(value,rules){
        let isValid=true;
        if (!rules){
            return true
        }

        if (rules.required){
            isValid=value.trim()!=='' && isValid
        }
        if (rules.minLength){
            isValid=value.length >= rules.minLength && isValid
        }
        if (rules.maxLength){
            isValid=value.length <= rules.maxLength && isValid
        }
        return isValid
    }
    inputHandler = (event, inputIdentyfire) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updateFormElement = {
            ...updatedOrderForm[inputIdentyfire]
        }
        updateFormElement.value = event.target.value
        updateFormElement.valid=this.checkValidity(updateFormElement.value,updateFormElement.validation)
        updateFormElement.touched=true
        updatedOrderForm[inputIdentyfire] = updateFormElement
        let formIsValid=true
        for(let inputIF in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIF].valid && formIsValid
        }
        this.setState({orderForm: updatedOrderForm , formIsValid:formIsValid})

    }

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                <h4>اطلاعات خود را وارد کنید</h4>
                <div className="form-group">
                    {formElementArray.map(formElement => (
                        <Input
                            label={formElement.config.label}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            key={formElement.id}
                            changed={(event) => this.inputHandler(event, formElement.id)}
                            invalid={formElement.config.valid}
                            shuldValidation={formElement.config.validation}
                            touched={formElement.config.touched}
                        />
                    ))}
                    {/*<Input inputtype={'input'} className={'form-control'} type="text" name={'name'} placeholder={'آدرس'}/>*/}

                </div>

                <Button btnType={'btn-success'} clicked={this.orderHandler} disabled={!this.state.formIsValid}>پرداخت نهایی </Button>

            </form>)
        if (this.state.loading) {
            form = <Spinner/>
        }
        return (
            <div className={'container'}>

                {form}
            </div>
        )
    }
}

export default ContactData;