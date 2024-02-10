import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Home Page</h1>
      <Link className='btn btn-accent' href='/client'>
        Client Page...Getting Started
      </Link>
    </div>
  );
}
