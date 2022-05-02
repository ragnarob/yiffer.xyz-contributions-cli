import React from 'react';

export default function Login({ }) {
  return (
    <div className='auth-modal-inner-wrapper'>
      <h2>
        Login
      </h2>

      <form onSubmit={() => alert('submited')} className='auth-form'>
        <input type="text" />

        <button type='submit' style={{ marginTop: '1rem' }}>
          Submit osv
        </button>
      </form>
    </div>
  )
}