import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'

export default function Link({ to, external = false, newTab = false, children, ...props }) {
  if (external) {
    return (
      <a href={to} className='link' target={newTab ? '_blank' : ''} {...props}>
        {children}
      </a>
    )
  }

  return (
    <NavLink to={to} className='link' target={newTab ? '_blank' : ''} {...props}>
      {children}
    </NavLink>
  )
}