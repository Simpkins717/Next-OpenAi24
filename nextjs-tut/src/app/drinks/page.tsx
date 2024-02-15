import Link from 'next/link';
import { randomUUID } from 'crypto';

export default async function DrinksPage() {
  const url = 'https://swapi.dev/api/people/';
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    throw new Error(`failed to fetch`);
  }

  const renderedResults = data.results.map(
    (result: { name: string }, i: number) => {
      return (
        <div key={randomUUID()}>
          <Link href={`drinks/${i + 1}`}>{result.name}</Link>
        </div>
      );
    }
  );
  return <div className=''>{renderedResults}</div>;
}
