import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>My Personal Website</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white/80 backdrop-blur-sm shadow-soft border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-18">
              <Link href="/" className="font-serif text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-200">
                Turing&Tao
              </Link>
              <nav className="flex space-x-10">
                <Link href="/about" className="text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group">
                  About Me
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/projects" className="text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/thinking" className="text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group">
                  Thinking
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/connect" className="text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group">
                  Connect
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
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