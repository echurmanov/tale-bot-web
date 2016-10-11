export const LOGIN_REQUEST_STARTED = 'LOGIN_REQUEST_STARTED';
export const LOGIN_REQUEST_FINISHED = 'LOGIN_REQUEST_FINISHED';
export const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR';

function loginRequestStarted() {
  return { type: LOGIN_REQUEST_STARTED };
}

function loginRequestFinished(loginState) {
  return { type: LOGIN_REQUEST_FINISHED, loginState };
}

function loginRequestError(errors) {
  return { type: LOGIN_REQUEST_ERROR, errors };
}

export function loginRequest(params) {
  console.log(params);

  return (dispatch) => {
    dispatch(loginRequestStarted());

    return fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error(['API Response Status Error:', response.status, response.statusText].join(' '));
      }
      return response.json();
    }).then((resJson) => {
      console.log('JSON', resJson);
      dispatch(loginRequestFinished({ success: true }));
    }).catch((error) => {
      dispatch(loginRequestError(error));
    });
  };
}
