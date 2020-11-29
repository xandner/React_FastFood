import React from 'react'
import classes from './Modal.module.css'
import BackDrop from "../BackDrop/BackDrop";
import Wrapper from "../../../hoc/Wrapper/Wrapper";

class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (nextProps.show !== this.props.show || nextProps.children !== this.props.children)
    }

    componentWillUpdate() {
        console.log('Modal')

    }

    render() {
        return (
            <Wrapper>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-10)',
                    opacity: this.props.show ? '1' : '0',
                    zIndex: this.props.show ? '999' : '-100'
                }}>
                    {this.props.children}

                </div>
            </Wrapper>
        )
    }
}


export default Modal;