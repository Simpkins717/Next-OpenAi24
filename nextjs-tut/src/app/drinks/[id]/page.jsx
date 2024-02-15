import Link from 'next/link';
import Image from 'next/image';
import starwarsimg from './starwarsimg.jpg';

export default async function DrinkPage({ params }) {
  const url = `https://swapi.dev/api/people/${params.id}`;
  let data;

  const response = await fetch(url);
  if (!response.ok) {
    return <div>There was an error</div>;
  } else {
    data = await response.json();

    return (
      <div>
        {data.name}
        <Image
          className='w-48  '
          placeholder='blur'
          src={starwarsimg}
          alt='star wars image'
        />
        <div>
          <Link href='/drinks'>Back to Drinks</Link>
        </div>
      </div>
    );
  }
}
