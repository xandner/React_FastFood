import React from 'react'
import Wrapper from "../Wrapper/Wrapper";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }

        componentWillMount() {
           this.reqInterceptors=axios.interceptors.request.use(req=>{
               this.setState({error:null})
           })
            this.resInterseptors=axios.interceptors.request.use(res=>res, error => {
                console.log('error was set')
                this.setState({error: error})
            })

        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterseptors)
        }

        errorConfirmedHandler = () => {
            console.log('error was null')
            this.setState({error: null})
        }




        render() {
            console.log('Error...',this.state.error)
            return (
                <Wrapper>
                    <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>

                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Wrapper>
            )
        }
    }
}
export default withErrorHandler