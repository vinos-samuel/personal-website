import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Personal Website</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="font-serif text-2xl text-dark-gray hover:scale-105 transition-transform">
                savyr
              </Link>
              <nav className="flex space-x-8">
                <Link href="/about" className="text-dark-gray hover:scale-105 transition-transform">
                  About Me
                </Link>
                <Link href="/projects" className="text-dark-gray hover:scale-105 transition-transform">
                  Projects
                </Link>
                <Link href="/thinking" className="text-dark-gray hover:scale-105 transition-transform">
                  Thinking
                </Link>
                <Link href="/connect" className="text-dark-gray hover:scale-105 transition-transform">
                  Connect
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </>
  );
}