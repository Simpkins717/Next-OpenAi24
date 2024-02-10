'use client';

export default function drinksPageError({ error }: string) {
  return <div>Error! {error.message}</div>;
}
