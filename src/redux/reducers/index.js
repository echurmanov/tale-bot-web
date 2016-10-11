import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
// TODO: Тут импортируем редусеры

export default combineReducers({
  // TODO: регистрируем редусеры
  login: loginReducer
});
