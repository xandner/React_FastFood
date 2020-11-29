import React from 'react'
// import './Spinner.module.css'
import loader from 'react-loader-spinner'
export default class App extends React.Component {
        //other logic
        render() {
            console.log('Spinner')
                return(
                    <loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs

                    />
                );
        }
}
