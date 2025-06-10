
import Layout from '../components/Layout';
import Link from 'next/link';

const thinkingEntries = [
  {
    title: 'The Paradox of Choice in Digital Design',
    description: 'Why giving users infinite options often leads to decision paralysis and how thoughtful constraints can enhance creativity.',
    link: '/essays/paradox-of-choice',
    type: 'internal'
  },
  {
    title: 'Building Systems That Think',
    description: 'Exploring the intersection of AI and human-centered design in creating intelligent, adaptive user experiences.',
    link: 'https://medium.com/@example/building-systems-that-think',
    type: 'external'
  },
  {
    title: 'The Future of Creative Collaboration',
    description: 'How emerging technologies are reshaping the way teams create, iterate, and bring ideas to life.',
    link: '/essays/future-creative-collaboration',
    type: 'internal'
  },
  {
    title: 'Mental Models for Complex Problems',
    description: 'A framework for breaking down seemingly intractable challenges into manageable, actionable components.',
    link: 'https://medium.com/@example/mental-models-complex-problems',
    type: 'external'
  },
  {
    title: 'The Art of Purposeful Procrastination',
    description: 'Why strategic delays and deliberate thinking time often lead to better solutions than immediate action.',
    link: '/essays/purposeful-procrastination',
    type: 'internal'
  },
  {
    title: 'Learning in Public: A Developer\'s Journey',
    description: 'Reflections on sharing knowledge, embracing vulnerability, and the unexpected benefits of transparent learning.',
    link: 'https://medium.com/@example/learning-in-public',
    type: 'external'
  }
];

export default function Thinking() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-dark-gray">
            Thinking
          </h1>
          <p className="text-xl text-medium-gray max-w-3xl">
            Essays, ideas, and explorations into the concepts that shape how we work, create, and connect in our digital world.
          </p>
        </div>

        {/* Thinking Entries */}
        <div className="space-y-6">
          {thinkingEntries.map((entry, index) => (
            <div key={index} className="group">
              {entry.type === 'internal' ? (
                <Link href={entry.link}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h2 className="text-2xl font-serif font-semibold mb-3 text-dark-gray group-hover:text-accent transition-colors">
                          {entry.title}
                        </h2>
                        <p className="text-medium-gray leading-relaxed mb-4">
                          {entry.description}
                        </p>
                        <div className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors">
                          Read more
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link href={entry.link} target="_blank" rel="noopener noreferrer">
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h2 className="text-2xl font-serif font-semibold mb-3 text-dark-gray group-hover:text-accent transition-colors">
                          {entry.title}
                        </h2>
                        <p className="text-medium-gray leading-relaxed mb-4">
                          {entry.description}
                        </p>
                        <div className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors">
                          Read on Medium
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20">
          <div className="bg-white rounded-2xl p-12 shadow-soft border border-gray-100 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-dark-gray">More Ideas in Progress</h3>
            <p className="text-medium-gray max-w-2xl mx-auto">
              I'm constantly exploring new concepts and developing fresh perspectives. Subscribe to stay updated on new essays and thinking pieces.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
