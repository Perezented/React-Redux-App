import axios from 'axios'

export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE'

export const fetchImage = () => {
    return dispatch => {
        dispatch({type: FETCH_QUOTE_FAILURE})
        axios.get('https://randomfox.ca/floof/')
        .then(response=> {
            console.log(response)
            //dispatch({type: 'FETCH_QUOTE_SUCCESS', payload: res.data....})
        })
        .catch(err => dispatch({
            type: FETCH_QUOTE_FAILURE,
            payload: `Error ${err.response.status}: ${err.response.data}`
        }))
    }
}