import axios from 'axios'

export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE'

export const fetchImage = () => {
    return dispatch => {
        dispatch({type: 'FETCH_IMAGE_START'})
        axios.get('https://randomfox.ca/floof/')
        .then(response=> {
            console.log(response)
            //dispatch({type: 'FETCH_QUOTE_SUCCESS', payload: res.data....})
        })
        .catch(err => dispatch({
            type: FETCH_IMAGE_FAILURE,
            payload: `Error: ${console.log(err)}`
        }))
    }
}