import type from '../constants/actions/portfolio';

const initialState = () => ({
  list: []
});

const setListPortfolio = (state, { list }) => ({ ...state, list });

export default (state = initialState(), action) => {
  switch (action.type) {
    case type.FETCH_LIST_PORTFOLIO_REQUEST:
    case type.FETCH_LIST_PORTFOLIO_REQUEST_SUCCESS:
    case type.FETCH_LIST_PORTFOLIO_REQUEST_ERROR:
      return setListPortfolio(state, action);
    default:
      return state;
  }
};
