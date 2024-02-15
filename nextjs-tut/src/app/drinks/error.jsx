'use client';

import Error from 'next/error';

export default function drinksPageError({ error }) {
  return <div>Error! {error.message}</div>;
}
