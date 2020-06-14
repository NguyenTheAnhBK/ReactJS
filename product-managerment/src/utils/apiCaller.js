import axios from 'axios';
import * as Configure from './../constants/Configure';

export default function callApi(endpoint, method='GET', body){
    return axios({
        method: method,
        url: `${Configure.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}