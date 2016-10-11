import React, { PropTypes, Component } from 'react';
import Button from 'react-bootstrap-button-loader';
import { connect } from 'react-redux';
import { loginRequest } from 'redux/actions/loginActions';

import './LoginPage.css';

const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  remember: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  state: PropTypes.any
};

const defaultProps = {
  email: '123@mail.ru',
  password: '',
  remember: true
};

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.email,
      password: this.props.password,
      remember: this.props.remember
    };

    this.handleSwitchRemember = this.handleSwitchRemember.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleSwitchRemember() {
    this.setState({ remember: !this.state.remember });
  }

  handleLogin() {
    this.props.dispatch(loginRequest(this.state));
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const { loading } = this.props;
    return (
      <div className='LoginPage'>
        <div className='container'>
          <form className='form-signin' >
            <h2 className='form-signin-heading'>Войдите</h2>
            <label htmlFor='inputEmail' className='sr-only'>Email</label>
            <input type='email' id='inputEmail' className='form-control'
              placeholder='Email' value={this.state.email} required=''
              autoFocus='' onChange={this.handleChangeEmail} disabled={loading}
            />
            <label htmlFor='inputPassword' className='sr-only'>Пароль</label>
            <input type='password' id='inputPassword' className='form-control'
              placeholder='Пароль' value={this.state.password} required=''
              onChange={this.handleChangePassword} disabled={loading}
            />
            <div className='checkbox'>
              <label>
                <input type='checkbox' value='remember-me' checked={this.state.remember}
                  onChange={this.handleSwitchRemember} disabled={loading}
                />
                Запомнить меня
              </label>
            </div>
            <Button className='btn btn-lg btn-primary btn-block' onClick={this.handleLogin}
              loading={loading}
            >Вход/Регистрация
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(action) {
  const { loading, state } = action.login;
  return { loading, state };
}

LoginPage.propTypes = propTypes;
LoginPage.defaultProps = defaultProps;


export default connect(mapStateToProps)(LoginPage);
