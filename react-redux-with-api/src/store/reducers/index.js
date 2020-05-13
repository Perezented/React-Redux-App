import { combineReducers } from 'redux';
import { FETCH_DATA_START } from '../actions';
const initialState = {
    isFetching: false,
    error: '',
    dataArray: [],
};

export const dataFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: '',
                dataArray: action.payload,
            };
        default:
            return state;
    }
};

export default combineReducers({
    dataFetchReducer,
});
