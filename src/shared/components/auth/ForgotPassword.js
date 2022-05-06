import React from 'react';

export default function ForgotPassword({}) {
  return (
    <div className="auth-modal-inner-wrapper">
      <h2>Forgot password</h2>

      <form onSubmit={() => alert('submited')} className="auth-form">
        <input type="text" />

        <button type="submit" style={{ marginTop: '1rem' }}>
          Submit osv
        </button>
      </form>
    </div>
  );
}
