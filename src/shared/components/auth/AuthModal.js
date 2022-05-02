import React from 'react';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import Signup from './Signup';
import TextButton from '../TextButton/TextButton';

export default function AuthModal({ }) {
  const authModalType = useSelector(state => state.auth.authModalType);
  const dispatch = useDispatch();

  if (!authModalType) { return; }

  let RelevantComponent = Login;
  if (authModalType === 'signup') {
    RelevantComponent = Signup;
  }
  if (authModalType === 'forgotPassword') {
    RelevantComponent = ForgotPassword;
  }

  function closeModal() {
    dispatch({ type: 'auth/authModalType', payload: null });
  }

  return (
    <>
      <div className='modal-backdrop' onClick={closeModal} />

      <div className='auth-modal'>
        <RelevantComponent className='auth-modal-inner-wrapper' />

        <div className='auth-modal-navigation'>
          {authModalType !== 'login' && (
            <TextButton
              onClick={() => dispatch({ type: 'auth/authModalType', payload: 'login' })}
            >
              Click here to <b>log in</b>
            </TextButton>
          )}

          {authModalType !== 'signup' && (
            <TextButton
              onClick={() => dispatch({ type: 'auth/authModalType', payload: 'signup' })}
            >
              Click here to <b>sign up</b>
            </TextButton>
          )}

          {authModalType !== 'forgotPassword' && (
            <TextButton
              onClick={() => dispatch({ type: 'auth/authModalType', payload: 'forgotPassword' })}
            >
              Forgot password?
            </TextButton>
          )}
        </div>

        <button
          className="close-button"
          onClick={closeModal}
        >
          x
        </button>
      </div>
    </>
  )
}