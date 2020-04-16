import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'


const FoxyImage = props => {
    useEffect(()=>{
        props.fetchImage()
    }, [])
}
export const FoxyImg =()=>{
    console.log('This is the FoxyImg: ')
    return (     
        <h1>Look at all these foxy images!</h1>

        )
}

const mapStateToProps = state => {
    console.log(state)
}