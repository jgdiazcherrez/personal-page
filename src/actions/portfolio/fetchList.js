import ACTION from '../../constants/actions/portfolio';
import fetchData from '../../assets/resource/portfolio.json';

const fetchListRequest = () => ({
  type: ACTION.FETCH_LIST_PORTFOLIO_REQUEST,
  list: []
});

const fetListRequestSuccess = (data) => ({
  type: ACTION.FETCH_LIST_PORTFOLIO_REQUEST_SUCCESS,
  list: data
});

const fetchListRequestError = (message) => ({
  type: ACTION.FETCH_LIST_PORTFOLIO_REQUEST_ERROR,
  message
});

export const fetchListAction = () => async (dispatch) => {
  dispatch(fetchListRequest());
  setTimeout(() => {
    dispatch(fetListRequestSuccess(fetchData));
  }, 0);
};

export default fetchListAction;
