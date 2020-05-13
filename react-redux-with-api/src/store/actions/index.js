import axios from 'axios';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA_START });

        axios
            .get('https://api.ratesapi.io/api/latest?base=USD')
            .then((res) => {
                console.log(res);
                console.log(
                    'yoookiiidddd',
                    Object.keys(res.data.rates),
                    Object.values(res.data.rates)
                );
                dispatch({
                    type: FETCH_DATA_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: FETCH_DATA_FAILURE,
                    payload: err,
                });
            });
    };
};
