import Head from 'next/head';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Personal Website</title>
      </Head>
      <main className="min-h-screen p-8">{children}</main>
    </>
  );
}
