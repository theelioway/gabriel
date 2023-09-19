import React, { useState } from 'react';
import queryString from 'query-string';
import client from './feathers';

const Login = props => {
  const [email, setEmail] = useState('tcbushell@gmail.com');
  const [password, setPassword] = useState('letmein');
  const [error, setError] = useState();
  const { secret } = queryString.parse(window.location.search);

  function updateField(cb) {
    return ev => {
      cb(ev.target.value);
    };
  }

  function login() {
    return client
      .authenticate({
        strategy: 'local',
        email,
        password,
      })
      .catch(err => setError(err));
  }

  function signup() {
    return client
      .service('users')
      .create({ email, password })
      .then(() => login());
  }

  function forgotit() {
    return client
      .service('password')
      .patch({ email, action: 'forgot' })
      .then(response => console.log(response));
  }

  function resetit() {
    return client
      .service('account')
      .patch(null, { password, secret, action: 'reset' })
      .then(response => (window.location = '/'));
  }

  return (
    <main className="login container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
          <form className="form">
            {!secret && (
              <fieldset>
                <input
                  className="block"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={updateField(setEmail)}
                />
              </fieldset>
            )}
            <fieldset>
              <input
                className="block"
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={updateField(setPassword)}
              />
            </fieldset>
            {!secret && (
              <>
                <p>{error && error.message}</p>
                <button
                  type="button"
                  className="button button-primary block signup"
                  onClick={() => login()}
                >
                  Log in
                </button>

                <button
                  type="button"
                  className="button button-primary block signup"
                  onClick={() => signup()}
                >
                  Signup
                </button>
                <button
                  type="button"
                  className="button button-primary block signup"
                  onClick={() => forgotit()}
                >
                  Forgot it!
                </button>
              </>
            )}
            {secret && (
              <button
                type="button"
                className="button button-primary block signup"
                onClick={() => resetit()}
              >
                Reset Password
              </button>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
