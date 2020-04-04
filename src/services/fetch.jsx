import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancel;

export default function fetch(url, endpoint = 'http://localhost:6010/articles/') { //to do: move to env
    if (cancel !== undefined) {
      cancel();
    }
    return axios.get(endpoint + url, 
      {
        cancelToken: new CancelToken(
          function executor(c) 
          {
              cancel = c;
          })
    })
}