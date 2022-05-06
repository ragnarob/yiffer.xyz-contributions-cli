import React from 'react';
import './textButton.scoped.scss'

export default function TextButton({ className = '', children, ...props }) {
  return (
    <button className={`text-button ${className}`} {...props}>
      {children}
    </button>
  )
}