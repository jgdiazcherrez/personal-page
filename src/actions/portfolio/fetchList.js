import ACTION from '../../constants/actions/portfolio';
import ConfigRoute from '../../ConfigRoute';


const fetchListRequest = () => (
  {
    type: ACTION.FETCH_LIST_PORTFOLIO_REQUEST,
    list: []
  }
);

const fetListRequestSuccess = (data) => ({
  type: ACTION.FETCH_LIST_PORTFOLIO_REQUEST_SUCCESS,
  list: data
});

const fetchListRequestError = (message) => (
  {
    type: ACTION.FETCH_LIST_PORTFOLIO_REQUEST_ERROR,
    message
  }
);


export const fetchListAction = () => async (dispatch) => {
  dispatch(fetchListRequest());
  fetch(ConfigRoute.api.portfolioList)
    .then((response) => response.json())
    .then((data) => dispatch(fetListRequestSuccess(data)))
    .catch((error) => dispatch(fetchListRequestError(error)));
};

export default fetchListAction;
