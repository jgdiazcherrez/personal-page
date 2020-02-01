import ACTION from '../../constants/actions/tech';
import ConfigRoute from '../../ConfigRoute';


const fetchListRequest = () => (
  {
    type: ACTION.FETCH_LIST_TECH_REQUEST,
    list: []
  }
);

const fetListRequestSuccess = (data) => ({
  type: ACTION.FETCH_LIST_TECH_REQUEST_SUCCESS,
  list: data
});

const fetchListRequestError = () => (
  {
    type: ACTION.FETCH_LIST_TECH_REQUEST_ERROR
  }
);


const fetchTechListAction = () => async (dispatch) => {
  dispatch(fetchListRequest());
  fetch(ConfigRoute.api.techList)
    .then((response) => response.json())
    .then((data) => dispatch(fetListRequestSuccess(data)))
    .catch((error) => dispatch(fetchListRequestError()));
};

export default fetchTechListAction;
