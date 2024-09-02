import ACTION from '../../constants/actions/tech';
import fetchData from '../../assets/resource/technologies.json';

const fetchListRequest = () => ({
  type: ACTION.FETCH_LIST_TECH_REQUEST,
  list: []
});

const fetListRequestSuccess = (data) => ({
  type: ACTION.FETCH_LIST_TECH_REQUEST_SUCCESS,
  list: data
});

const fetchListRequestError = () => ({
  type: ACTION.FETCH_LIST_TECH_REQUEST_ERROR
});

const fetchTechListAction = () => async (dispatch) => {
  dispatch(fetchListRequest());
  setTimeout(() => {
    dispatch(fetListRequestSuccess(fetchData));
  }, 0);
};

export default fetchTechListAction;
