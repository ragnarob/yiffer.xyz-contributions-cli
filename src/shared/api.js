import fetch from 'isomorphic-fetch'

export async function getSomeData() {
  const url = 'https://yiffer.xyz/api/comicsPaginated';
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  catch (err) {
    console.log(err);
    return null;
  }
}