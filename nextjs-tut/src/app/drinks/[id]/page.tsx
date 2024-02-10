import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default async function DrinkPage({ params }: Params) {
  const url = `https://swapi.dev/api/people/${params.id}`;
  let data;

  const response = await fetch(url);
  if (!response.ok) {
    return <div>There was an error</div>;
  } else {
    data = await response.json();

    return <div>{data.name}</div>;
  }
}
