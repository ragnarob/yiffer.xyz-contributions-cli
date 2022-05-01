import React from 'react';
import { NavLink } from 'react-router-dom';
import { getSomeData } from './api';
import useSsrData from './useSsrData';

export default function Home({ data }) {
  const { data: comicsObj, isLoading } = useSsrData(data, getSomeData);

  if (isLoading) {
    return <p>Loading comics</p>
  }

  return (
    <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
      {comicsObj.comics.map(comic => (
        <React.Fragment key={comic.id}>
          <div style={{ border: '1px solid #ccc' }}>
            <NavLink to={`/comic/${comic.name}`}>
              {comic.name}
            </NavLink>
            <p>{comic.artist}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}