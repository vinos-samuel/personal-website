
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              <span className="text-gradient">Systems thinker.</span><br />
              <span className="text-dark-gray">Builder.</span><br />
              <span className="text-medium-gray">Dad.</span>
            </h1>
            <p className="text-xl md:text-2xl text-medium-gray mb-12 max-w-2xl mx-auto font-light">
              Exploring the intersection of technology, creativity, and human connection through thoughtful design and purposeful code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-primary">
                Learn About Me
              </Link>
              <Link href="/projects" className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
                View My Work
              </Link>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/about" className="card-hover group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-semibold mb-3 group-hover:text-accent transition-colors">About Me</h2>
                <p className="text-medium-gray leading-relaxed">Personal journey, philosophy, and professional path through the world of technology and human connection.</p>
              </div>
            </Link>
            
            <Link href="/ai-vibe-coding" className="card-hover group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-semibold mb-3 group-hover:text-purple-600 transition-colors">AI & Vibe Coding</h2>
                <p className="text-medium-gray leading-relaxed">Exploring the intersection of artificial intelligence and creative coding through experimental projects.</p>
              </div>
            </Link>
            
            <Link href="/thoughts" className="card-hover group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-semibold mb-3 group-hover:text-green-600 transition-colors">Thought Experiments & Books</h2>
                <p className="text-medium-gray leading-relaxed">Mental models, reading notes, and explorations into the ideas that shape our world.</p>
              </div>
            </Link>
            
            <Link href="/savyrs-corner" className="card-hover group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-soft border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-semibold mb-3 group-hover:text-orange-600 transition-colors">Savyr's Corner</h2>
                <p className="text-medium-gray leading-relaxed">A special space dedicated to family, growth, and the beautiful journey of parenthood.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
