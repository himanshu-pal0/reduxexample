import {PROFILE_API_REQUEST, PROFILE_API_SUCCESS, PROFILE_API_FAILURE} from './actionConst';
import axios from 'react-native-axios';


const apiRequested = () => ({
  type: PROFILE_API_REQUEST,
});

const apiSuccess = data => ({
  type: PROFILE_API_SUCCESS,
  data,
});

const apiFailure = data => ({
  type: PROFILE_API_FAILURE,
  data,
});

export const hitProfileAPI = () => dispatch => {
  dispatch(apiRequested);
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
  })
    .then(response => response.json())
    .then(json => {
      dispatch(apiSuccess(json));
    })
    .catch(error => {
      console.log('hitAPI', 'json error is---' + error);
      dispatch(apiFailure(error));
    });
};
