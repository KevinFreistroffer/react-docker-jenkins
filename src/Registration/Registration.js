import React from 'react';
import './styles.css';
import { useQuery } from 'react-query';
import * as accountService from '../services/account.js';
import * as storageService from '../services/storage.js';

type Props = {};

const Registration = (props: Props): JSX.Element => {
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [errors, setErrors] = React.useState({
    username: [],
    password: [],
    global: [],
  });
  // const { data, status } = useQuery('account', accountService.fetchByUsername);
  // console.log(data, status);


  const handleGoBack = () => {
    alert('Go Back!');
  };
  const handleOnSubmit = () => {
    if (username && password) {
      const account = accountService.fetchByUsername(username);
      if (account) {
        setErrors({
          ...errors,
          global: ['Account already exists!'],
        });
      } else {
        const accounts = storageService.load('accounts');
        accounts.push({
          username,
          password,
          dateCreated: new Date(),
        });
        storageService.save('accounts', accounts);
        alert('Account created!');
      }
    } else {
      setErrors({
        username: ['Username is required!'],
        password: ['Password is required!'],
      });
    }

    if (!errors.username && !errors.password && !errors.global) {
      console.log('Account created!');
    }
  };

  return (
    <div id="registration">
      <>
        <header>
          <h2>Account Registration</h2>
        </header>
        <main>
          <h3>Fill Out Your Account Details</h3>
          <p>
            You can fill out your account details or create your account with
            one of the providers below.
          </p>
          <form>
            {(errors.global && errors.global.length) ? (
              <div className="form-input__errors">
                {errors.global.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            ) : null}
            <div className="form-input username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => {
                  e.persist();
                  setUsername(e.target.value);
                }}
              />
              {(errors.username && errors.username.length) ? (
                <div className="form-input__errors">
                  {errors.username.map((error, index) => (
                    <p key={index} className="error">{error}</p>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="form-input password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => {
                  e.persist();
                  setPassword(e.target.value);
                }}
              />
              {(errors.password && errors.password.length) ? (
                <div className="form-input__errors">
                  {errors.password.map((error, index) => (
                    <p key={index} className="error">{error}</p>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="buttons">
              <button type="button" onClick={() => handleGoBack()}>
                Go back
              </button>
              <button type="button" onClick={() => handleOnSubmit()}>
                Submit
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                console.log(accountService.fetchByUsername(username));
              }}
            >
              Get Account Details
            </button>
          </form>
          <div id="form-details">
            <h3>Form Details</h3>
            <ul>
              <li>Username: {username}</li>
              <li>Password: {password}</li>
              <li>Username errors{errors.username ? errors.username.map(e => e) : ''}</li>
              <li>Password errors{errors.password ? errors.password.map(e => e) : ''}</li>
              <li>Global errors{errors.global ? errors.password.map(e => e) : ''}</li>
            </ul>
          </div>
        </main>
        <footer></footer>
      </>
    </div>
  );
};

export default Registration;
