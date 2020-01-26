
import type from '../constants/actions/tech';

const _initialState = () => ({
    list: [],
    load: false
});

const _setTechList = (state, {list, load}) => ({...state, list, load});

export default (state = _initialState(), action) => {
    switch (action.type) {
        case type.FETCH_LIST_TECH_REQUEST:
        case type.FETCH_LIST_TECH_REQUEST_ERROR:
        case type.FETCH_LIST_TECH_REQUEST_SUCCESS:
            return _setTechList(state, action);
        default:
            return state;
    }
};
