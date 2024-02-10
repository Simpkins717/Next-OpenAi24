import Link from 'next/link';

export default function Header() {
  const data = [
    { id: 1, title: 'About', link: '/about' },
    { id: 2, title: 'Client', link: '/client' },
    { id: 3, title: 'Drinks', link: '/drinks' },
    { id: 4, title: 'Prisma', link: '/prisma-example' },
    { id: 4, title: 'Query', link: '/query' },
    { id: 4, title: 'Tasks', link: '/tasks' },
  ];
  const renderedData = data.map((link) => {
    return (
      <Link
        className='capitalize mx-2 hover:scale-110 text-lg '
        key={link.id}
        href={link.link}
      >
        {link.title}
      </Link>
    );
  });
  return (
    <nav className=' max-w-6xl mx-auto px-6 py-10 bg-base-300 flex  '>
      <Link href='/' className='btn btn-info mr-8'>
        Next.Js
      </Link>
      <div className='menu menu-horizontal mt-2 '>{renderedData}</div>
    </nav>
  );
}
