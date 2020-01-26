
import type from '../constants/actions/portfolio';

const _initialState = () => ({
    list: [],
    load: false
});

const _setListPortfolio = (state, {list, load}) => ({...state, list, load});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.FETCH_LIST_PORTFOLIO_REQUEST:
        case type.FETCH_LIST_PORTFOLIO_REQUEST_SUCCESS:
        case type.FETCH_LIST_PORTFOLIO_REQUEST_ERROR:
            return _setListPortfolio(state, action);
        default:
            return state;
    }
};
