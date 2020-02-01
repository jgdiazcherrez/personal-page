
import type from '../constants/actions/tech';

const initialState = () => ({
  list: []
});

const setTechList = (state, { list }) => ({ ...state, list });

export default (state = initialState(), action) => {
  switch (action.type) {
    case type.FETCH_LIST_TECH_REQUEST:
    case type.FETCH_LIST_TECH_REQUEST_ERROR:
    case type.FETCH_LIST_TECH_REQUEST_SUCCESS:
      return setTechList(state, action);
    default:
      return state;
  }
};
