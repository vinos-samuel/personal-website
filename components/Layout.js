import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <title>My Personal Website</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white/80 backdrop-blur-sm shadow-soft border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-18">
              <Link href="/" className="logo-font text-2xl sm:text-3xl font-bold text-gradient hover:scale-105 transition-transform duration-200">
                Vinos Samuel
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8 lg:space-x-10">
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
                <Link href="/savyr" className="text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group">
                  Savyr's Corner
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/connect" className="text-dark-gray hover:text-accent font-medium transition-colors duration-200 relative group">
                  Connect
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6 text-dark-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden pb-4 pt-2 border-t border-gray-100">
                <nav className="flex flex-col space-y-3">
                  <Link 
                    href="/about" 
                    className="py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Me
                  </Link>
                  <Link 
                    href="/projects" 
                    className="py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link 
                    href="/thinking" 
                    className="py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Thinking
                  </Link>
                  <Link 
                    href="/savyr" 
                    className="py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Savyr's Corner
                  </Link>
                  <Link 
                    href="/connect" 
                    className="py-2 px-3 text-dark-gray hover:text-accent hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Connect
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </>
  );
}