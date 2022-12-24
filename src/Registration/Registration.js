import React from 'react'
import './styles.css'
import createAccount from '../services/account'

type Props = {}

const Registration = (props: Props): JSX.Element => {
  const handleGoBack = () => {
    alert('Go Back!')
  }
  const handleOnSubmit = () => {
    alert('Submitted!')
  }
  return (
    <div id="registration">
      <header>
        <h2>Account Registration</h2>
      </header>
      <main>
        <h3>Fill Out Your Account Details</h3>
        <p>
          You can fill out your account details or create your account with one
          of the providers below.
        </p>
        <form>
          <div className="form-input username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
            />
            <div className="form-input__errors"></div>
          </div>
          <div className="form-input password">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Enter your password"
            />
            <div className="form-input__errors"></div>
          </div>
          <div className="buttons">
            <button type="button" onClick={() => handleGoBack()}>
              Go back
            </button>
            <button type="button" onClick={() => handleOnSubmit()}>
              Submit
            </button>
          </div>
        </form>
      </main>
      <footer></footer>
    </div>
  )
}

export default Registration
