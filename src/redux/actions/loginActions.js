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

    return setTimeout(() => dispatch(loginRequestFinished({ success: true })), 1500); // Изображаем network latency :)
  };
}
