import axios from 'axios';
export const FETCH_DATA_START = 'FETCH_DATA_START';

export const fetchData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA_START });

        axios.get('https://api.ratesapi.io/api/latest?base=USD').then((res) => {
            console.log(res.data);
        });
    };
};
