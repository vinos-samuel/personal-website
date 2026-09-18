
import Layout from '../components/Layout';
import Link from 'next/link';

const thinkingEntries = [
  {
    title: 'Wait. Fast. Think.',
    description: 'Three simple skills. Almost useless on a résumé. But deeply, quietly powerful.',
    link: 'https://medium.com/@vinos.samuel/wait-fast-think-95fee276aaf0',
    type: 'external'
  },
  {
    title: 'Judging — The Brain\'s First Language',
    description: 'Judgement isn\'t a flaw - Its the brains first language. Our reflex edits reality; wisdom is learning to recut the film in real time.',
    link: 'https://medium.com/@vinos.samuel/judging-the-brains-first-language-3aea2d50fc22',
    type: 'external'
  },
  {
    title: 'The Dog Inside Your Head',
    description: 'On why calming the mind feels a lot like training a restless puppy.',
    link: 'https://medium.com/@vinos.samuel/the-dog-inside-your-head-88f1b3a01b70',
    type: 'external'
  },
  {
    title: 'The Multiplicity of Me: A Meditation on Consciousness, Identity, and the Super-Mind',
    description: '"I am not who I think I am. I am not who you think I am. I am who I think you think I am."',
    link: 'https://medium.com/@vinos.samuel/the-multiplicity-of-me-a-meditation-on-consciousness-identity-and-the-super-mind-0114e371d837',
    type: 'external'
  },
  {
    title: 'The Divine Disguise of Answers …',
    description: 'We often imagine divinity as a cosmic genie, responding to our heartfelt requests with a snap of transcendental fingers. Ask — and you shall receive, they said. So we ask.',
    link: 'https://medium.com/@vinos.samuel/the-divine-disguise-of-answers-8c7f7f4fee03',
    type: 'external'
  },
  {
    title: 'Survival of the Dopest',
    description: 'Somewhere deep in our wiring, two opposing forces pull at us: 1) The craving for more — a hunger born in environments of scarcity. 2) The craving for difference — to stand out, to attract, to adapt.',
    link: 'https://medium.com/@vinos.samuel/survival-of-the-dopest-f14835ac8a42',
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
            Ideas I'm wrestling with, writing through, or chasing down rabbit holes—on work, philosophy (mostly), tech, and what it means to be human in all this.
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
            <p className="text-medium-gray max-w-2xl mx-auto mb-6">
              I'm constantly exploring new concepts and developing fresh perspectives. Subscribe to stay updated on new essays and thinking pieces.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://medium.com/@vinos.samuel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium"
              >
                Medium
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://x.com/vinos25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors font-medium"
              >
                Twitter
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
