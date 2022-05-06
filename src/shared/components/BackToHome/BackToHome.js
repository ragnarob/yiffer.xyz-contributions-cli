import React from 'react';

export default function BackToHome({ ...props }) {
  return (
    <a
      href="https://yiffer.xyz"
      style={{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      }}
      {...props}
    >
      HOME ICON to front page
    </a>
  );
}
