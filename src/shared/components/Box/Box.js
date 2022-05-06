import React from 'react';

export default function Box({
  margin,
  padding,
  elevation,
  hoverShadow,
  className,
  children,
  ...props
}) {
  let elevationClasses = '';

  if (elevation === 1) {
    if (hoverShadow) {
      elevationClasses += ' simple-shadow-small ';
    } else {
      elevationClasses += ' simple-shadow-small-no-hover ';
    }
  }

  if (elevation === 2) {
    if (hoverShadow) {
      elevationClasses += ' simple-shadow ';
    } else {
      elevationClasses += ' simple-shadow-no-hover ';
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
  );
}
