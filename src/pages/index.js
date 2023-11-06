import Link from 'next/link';

export async function getServerSideProps() {
  console.log('server');

  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <main>
        <h1>{time}</h1>
        <h1>
          <Link href="/csr">CSR로</Link>
        </h1>
        <h1>
          <Link href="/ssg">SSG로</Link>
        </h1>
        <h1>
          <Link href="/isr">ISR</Link>
        </h1>
      </main>
    </>
  );
}
