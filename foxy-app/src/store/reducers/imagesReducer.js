const initialState = {
    quote: '',
    isFetching: false,
    error: '',
}

export const imagesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_IMAGE_START':
            return {
                ...state, 
                isFetching: true
            }
            case 'FETCH_IMAGE_SUCCESS': 
            return {
                ...state,
                isFetching: false,
                quote: action.payload,
                error: ''
            }
            case 'FETCH_IMAGE_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
            default:
                return state
    }
}
