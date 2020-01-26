import ACTION from '../../constants/actions/portfolio';
import ConfigRoute from '../../ConfigRoute'


const _fetchListRequest = () => (
    {
        type: ACTION.FETCH_LIST_PORTFOLIO_REQUEST,
    }
);

const _fetListRequestSuccess = (data) => {
    return {
        type : ACTION.FETCH_LIST_PORTFOLIO_REQUEST_SUCCESS,
        list : data,
        load: true
    }
};

const _fetchListRequestError = () => (
    {
        type: ACTION.FETCH_LIST_PORTFOLIO_REQUEST_ERROR
    }
);




export const fetchListAction = () => async(dispatch) => {
        dispatch(_fetchListRequest());
        fetch(ConfigRoute.api.portfolioList)
            .then(response => response.json())
            .then(data => dispatch(_fetListRequestSuccess(data)))
            .catch(error => dispatch(_fetchListRequestError()))
};