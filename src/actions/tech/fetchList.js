import ACTION from '../../constants/actions/tech';
import ConfigRoute from '../../ConfigRoute'


const _fetchListRequest = () => (
    {
        type: ACTION.FETCH_LIST_TECH_REQUEST,
    }
);

const _fetListRequestSuccess = (data) => {
    return {
        type : ACTION.FETCH_LIST_TECH_REQUEST_SUCCESS,
        list : data,
        load: true
    }
};

const _fetchListRequestError = () => (
    {
        type: ACTION.FETCH_LIST_TECH_REQUEST_ERROR
    }
);




export const fetchTechListAction = () => async(dispatch) => {
    dispatch(_fetchListRequest());
    fetch(ConfigRoute.api.techList)
        .then(response => response.json())
        .then(data => dispatch(_fetListRequestSuccess(data)))
        .catch(error => dispatch(_fetchListRequestError()))
};