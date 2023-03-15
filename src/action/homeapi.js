import {API_FAILURE, API_SUCCESS, API_REQUEST} from './actionConst';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const apiRequested = () => ({
  type: API_REQUEST,
});

const apiSuccess = data => ({
  type: API_SUCCESS,
  data,
});

const apiFailure = data => ({
  type: API_FAILURE,
  data,
});

export const hitAPI = () => async dispatch => {
  dispatch(apiRequested);
   axios({
    method: "get",
    url: "https://api.reward-dragon.com:8000/customers/customer-josh-reason-today/?user_profile=500/",
    headers: { 'Authorization': 'c3fb04334a7c647338cdfd500e2997bb9898cf52' }
  })
    .then((response) =>  response.json())
    .then(json => {
      // apicallback(json);
      dispatch(apiSuccess(json));
    })
    .catch(error => {
      console.log('hitAPI', 'json error is---' + error);
      dispatch(apiFailure(error));
    });
};
