export default function DrinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='max-w-xl'>
      <div className='mockup-code mb-8'>
        <pre data-prefix='$'>
          <code>npx create-next-app@latest nextjs-tut</code>
        </pre>
      </div>
      <div className=''>{children}</div>
    </div>
  );
}
