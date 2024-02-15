import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      About Page
      <Link href='/about/info'>About Info Page</Link>
    </div>
  );
}
