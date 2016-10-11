import { LOGIN_REQUEST_STARTED, LOGIN_REQUEST_FINISHED, LOGIN_REQUEST_ERROR } from 'redux/actions/loginActions';

const initialState = {
  state: null,
  errors: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_STARTED:
      return Object.assign({}, state, { loading: true, errors: null });
    case LOGIN_REQUEST_FINISHED:
      return {
        loading: false,
        errors: null,
        state: action.state
      };
    case LOGIN_REQUEST_ERROR:
      return Object.assign({}, state, { loading: false, errors: action.errors });
    default:
      return state;
  }
}
