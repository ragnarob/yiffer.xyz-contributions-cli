import React from 'react';
import './box.scoped.scss'

export default function Box({ margin, padding, elevation, hoverShadow, className, children, ...props }) {
  let elevationClasses = '';

  if (elevation === 1) {
    elevationClasses += ' box-elevation-1 ';
    if (hoverShadow) {
      elevationClasses += ' box-elevation-1-hover ';
    }
  }

  if (elevation === 2) {
    elevationClasses += ' box-elevation-2 ';
    if (hoverShadow) {
      elevationClasses += ' box-elevation-2-hover ';
    }
  }

  let styles = {};
  if (margin !== undefined) {
    styles.margin = margin;
  }
  if (padding !== undefined) {
    styles.padding = padding;
  }

  return (
    <div style={styles} className={`${elevationClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}