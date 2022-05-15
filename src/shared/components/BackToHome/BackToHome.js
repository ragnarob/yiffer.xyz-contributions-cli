import React from 'react';
import Link from '../Link/Link';
import { MdHome } from 'react-icons/md';

export default function BackToHome({ marginTop = 0, marginBottom = 0, ...props }) {
  return (
    <Link
      external
      to="https://yiffer.xyz"
      style={{
        display: 'block',
        margin: `${marginTop} auto ${marginBottom} auto`,
        textAlign: 'center',
      }}
      {...props}
    >
      <MdHome style={{ marginBottom: '-0.2rem' }} /> to front page
    </Link>
  );
}
