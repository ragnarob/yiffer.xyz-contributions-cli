import React from 'react';
import './wrapper.scoped.scss';

export default function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
