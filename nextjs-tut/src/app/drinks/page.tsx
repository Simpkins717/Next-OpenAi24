import Link from 'next/link';

export default async function DrinksPage() {
  const url = 'https://swapi.dev/api/people/';
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
    console.log(data.results);
  } catch (error) {
    throw new Error(`failed to fetch`);
  }

  const renderedResults = data.results.map((result, i) => {
    return (
      <div key={result.id}>
        <Link href={`drinks/${i + 1}`}>{result.name}</Link>
      </div>
    );
  });
  return <div className=''>{renderedResults}</div>;
}
