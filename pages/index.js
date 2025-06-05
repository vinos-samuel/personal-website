import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-5xl mb-12 font-serif text-center">
          Systems thinker. Builder. Dad.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          <Link href="/about" className="transform hover:scale-105 transition-all">
            <div className="border border-gray-300 rounded-lg p-8 h-full hover:shadow-lg bg-white">
              <h2 className="text-2xl font-serif mb-2">About Me</h2>
              <p className="text-gray-600">Personal journey, philosophy, and professional path</p>
            </div>
          </Link>
          
          <Link href="/ai-vibe-coding" className="transform hover:scale-105 transition-all">
            <div className="border border-gray-300 rounded-lg p-8 h-full hover:shadow-lg bg-white">
              <h2 className="text-2xl font-serif mb-2">AI & Vibe Coding</h2>
              <p className="text-gray-600">Exploring the intersection of AI and creative coding</p>
            </div>
          </Link>
          
          <Link href="/thoughts" className="transform hover:scale-105 transition-all">
            <div className="border border-gray-300 rounded-lg p-8 h-full hover:shadow-lg bg-white">
              <h2 className="text-2xl font-serif mb-2">Thought Experiments & Books</h2>
              <p className="text-gray-600">Mental models, reading notes, and explorations</p>
            </div>
          </Link>
          
          <Link href="/savyrs-corner" className="transform hover:scale-105 transition-all">
            <div className="border border-gray-300 rounded-lg p-8 h-full hover:shadow-lg bg-white">
              <h2 className="text-2xl font-serif mb-2">Savyr's Corner</h2>
              <p className="text-gray-600">A special space dedicated to family and growth</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}