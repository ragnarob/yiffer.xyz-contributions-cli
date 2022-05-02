import React from 'react';

export default function Signup({ }) {
  return (
    <div className='auth-modal-inner-wrapper'>
      <h2>
        Sign up
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