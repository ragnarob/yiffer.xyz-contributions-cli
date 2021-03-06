import fetch from 'isomorphic-fetch';

export async function getComic(comicName) {
  const url = `https://yiffer.xyz/api/comics/${comicName}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
