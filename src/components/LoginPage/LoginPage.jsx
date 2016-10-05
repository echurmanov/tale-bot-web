import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import './LoginPage.css';

const propTypes = {

};

const defaultProps = {

};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <form className='form-signin'>
            <h2 className='form-signin-heading'>Войдите</h2>
            <label htmlFor='inputEmail' className='sr-only'>Email</label>
            <input type='email' id='inputEmail' className='form-control'
              placeholder='Email' required='' autoFocus=''
            />
            <label htmlFor='inputPassword' className='sr-only'>Пароль</label>
            <input type='password' id='inputPassword' className='form-control'
              placeholder='Пароль' required=''
            />
            <div className='checkbox'>
              <label>
                <input type='checkbox' value='remember-me'/> Запомнить меня
              </label>
            </div>
            <button className='btn btn-lg btn-primary btn-block' type='submit'>Вход/Регистрация</button>
          </form>
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
