import Link from 'next/link';

export const AboutPage = () => {
  return (
    <div>
      About Page
      <Link href='/about/info'>About Info Page</Link>
    </div>
  );
};

export default AboutPage;
