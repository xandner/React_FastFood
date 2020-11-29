import Wrapper from "../../hoc/Wrapper/Wrapper";
import React, {Component} from 'react'
import FoodIngrediant from "../../components/Food/FoodIngredient/FoodIngredeant";
import Food from '../../components/Food/Food'
import FoodControls from '../../components/Food/FoodControls/FoodControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIANT_PRISES = {
    hotDog: 7000,
    cheese: 3000,
    salad: 3000
}

class FoodBuildere extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingrediants: {
                hotDog: 0,
                cheese: 0,
                salad: 0
            },
            totalPrice: 0,
            purchasable: false,
            purchasing: false,
            loading: false
        }
    }

    // componentDidMount() {
    //     axios.post('posts').then(response=>{
    //         console.log(response)
    //         // this.setState({ingrediants:response.data})
    //     })
    // }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0);
        this.setState({purchasable: sum > 0})

    }

    purchaseHandeler = () => {
        this.setState({purchasing: true})
    }
    purchesingHandeler = (isOpenModal) => {
        if (isOpenModal === true) {
            this.setState({purchasing: true})
        } else {
            this.setState({purchasing: false})
        }

    }

    addIngrediant = (type) => {
        const oldCount = this.state.ingrediants[type]
        const updatedCount = oldCount + 1
        const updatedIngrediant = {
            ...this.state.ingrediants
        }
        updatedIngrediant[type] = updatedCount
        const priceAddition = INGREDIANT_PRISES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingrediants: updatedIngrediant})
        this.updatePurchaseState(updatedIngrediant)
    }

    removeIngrediant = (type) => {
        const oldCount = this.state.ingrediants[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngrediant = {
            ...this.state.ingrediants
        }
        updatedIngrediant[type] = updatedCount
        const priceAddition = INGREDIANT_PRISES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceAddition
        this.setState({totalPrice: newPrice, ingrediants: updatedIngrediant})
        this.updatePurchaseState(updatedIngrediant)
    }
    purchaseContinue = () => {
        alert('آیا ادامه میدهید؟؟')
    }
    purchaseCheckuot = () => {
        // alert('پرداخت نهایی')
        //     this.setState({loading:true})
        //     const order={
        //         ingrediants: this.state.ingrediants,
        //         price:this.state.totalPrice,
        //         customer:{
        //                 name:'xander',
        //                 addres:'iran,isfahan'
        //         },
        //         email:'xander@xander.com'
        //
        //     }
        //     axios.post('posts',order).then(
        //         repsonse=>{this.setState({loading:false,purchasing:false})
        //                    console.log(repsonse)     }
        //     ).catch(error=> {
        //         this.setState({loading:false,purchasing:false})
        //         console.log(error)
        //     })
        const queryParams = [];
        for (let i in this.state.ingrediants) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingrediants[i]))
        }
        queryParams.push('price='+this.state.totalPrice)
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryString
        })
    }

    render() {

        const disableInfo = {
            ...this.state.ingrediants

        }
        for (let key in disableInfo) {
            // if (disableInfo[key]<=0){
            //     disableInfo[key]=true;
            // }
            disableInfo[key] = disableInfo[key] <= 0;
        }
        let orderSummary = null

        console.log('OrderSummary', orderSummary)
        let burger = <Spinner/>
        if (this.state.ingrediants) {
            burger = (
                <Wrapper>
                    <Food ingrediants={this.state.ingrediants}/>
                    <FoodControls ingrediantAdd={this.addIngrediant}
                                  ingrediantRemove={this.removeIngrediant}
                                  disabled={disableInfo}
                                  price={this.state.totalPrice}
                                  purchasable={this.state.purchasable}
                                  order={() => this.purchesingHandeler(true)}
                    />
                </Wrapper>
            )
            orderSummary = <OrderSummary ingrediants={this.state.ingrediants}
                                         purchaseContinue={this.purchaseContinue}
                                         purchaseCheckuot={this.purchaseCheckuot}
            />
        }
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        return (
            <Wrapper>


                <Modal show={this.state.purchasing} modalClosed={() => this.purchesingHandeler(false)}>
                    {orderSummary}
                </Modal>
                {burger}
            </Wrapper>
        )
    }
}

export default withErrorHandler(FoodBuildere, axios);