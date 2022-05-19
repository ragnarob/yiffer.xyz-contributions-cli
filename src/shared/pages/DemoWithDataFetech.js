import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getComic } from '../api';
import useSsrData from '../useSsrData';

// The following is just to illustrate how to do data fetching that a route needs on the server.
// In the component, use the useSSRData hook, and in routes.js, add the fetchInitialData field.

export default function DemoWithDataFetch({ data }) {
  const { comicName } = useParams();
  const { data: comic, isLoading } = useSsrData(data, getComic, [comicName]);

  if (isLoading) {
    return <p>Loading comic</p>;
  }

  return (
    <div>
      <h1>{comic.name}</h1>
      <p>by {comic.artist}</p>
      <p>There are probable some pages. Probably {comic.numberOfPages}.</p>
      <NavLink to="/">HOME</NavLink>

      <br />

      {Array.from(Array(comic.numberOfPages).keys()).map(i => (
        <img
          src={`https://static.yiffer.xyz/comics/${comic.name}/0${
            i < 9 ? '0' + (i + 1) : i + 1
          }.jpg`}
          height="300"
          key={i}
        />
      ))}
    </div>
  );
}
