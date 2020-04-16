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
    return (<>
        <h1>Everyday is a great day!</h1>
      {props.quote && <h3>{props.quote}</h3>}
        {props.isFetching && (
            <Loader type="Circles" color="#00BFFF" height={80} width={80} />      )}
      <button onClick={props.fetchItem}>Get a different refreshing quote!</button>

    </>
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