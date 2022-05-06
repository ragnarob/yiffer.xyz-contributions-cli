import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getComic } from '../api';
import useSsrData from '../useSsrData';

export default function Comic({ data }) {
  const { comicName } = useParams();
  const { data: comic, isLoading } = useSsrData(data, getComic, [comicName]);
  const auth = useSelector(state => state.auth);
  const theme = useSelector(state => state.theme);

  if (isLoading) {
    return <p>Loading comic</p>;
  }

  return (
    <div>
      <h1>{comic.name}</h1>
      <p>by {comic.artist}</p>
      <p>There are probable some pages. Probably {comic.numberOfPages}.</p>
      <NavLink to="/">HOME</NavLink>
    </div>
  );
}
