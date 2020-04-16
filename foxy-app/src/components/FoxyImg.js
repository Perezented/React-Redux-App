import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'

import {fetchItem} from '../store/actions'

const RetrieveMe = props => {
    useEffect(()=>{
        props.fetchItem()
    }, [])

    // console.log('This is the no more about foxes: ')
    console.log(props)
    return (     
        <h1>Everyday is a good day!</h1>
        
        )
}

const mapStateToProps = state => {
    console.log(state)
    return{
         quote: state.imagesReducer.quote,
         isFetching: state.imagesReducer.isFetching,
         error: state.imagesReducer.error
    }
}

export default connect(mapStateToProps, {fetchItem})(RetrieveMe)