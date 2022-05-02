import React from 'react';
import './styles.css'

export default function TextButton({ className = '', children, ...props }) {
  return (
    <button className={`text-button ${className}`} {...props}>
      {children}
    </button>
  )
}