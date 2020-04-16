import axios from 'axios'

export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE'

export const fetchItem = () => {
    return dispatch => {
        dispatch({type: 'FETCH_IMAGE_START'})
        axios
        .get('https://api.adviceslip.com/advice')
        .then(response=> {
            console.log(response.data.slip.advice, response)
            dispatch({type: 'FETCH_IMAGE_SUCCESS', payload: response.data.slip.advice})
        })
        .catch(err => dispatch({
            type: 'FETCH_IMAGE_FAILURE',
            payload: `Error: ${console.log(err)}`
        }))
    }
}