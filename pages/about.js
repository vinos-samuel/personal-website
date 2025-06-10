import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Building bridges between <span className="text-gradient">technology</span>, creativity, and human connection
          </h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Exploring the intersections that matter most in our rapidly evolving digital world
          </p>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-dark-gray">Professional</h2>
            <p className="text-medium-gray leading-relaxed">Software architect and systems thinker with a passion for building scalable, human-centered solutions. Focused on the intersection of AI and creative technology.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-dark-gray">Creative</h2>
            <p className="text-medium-gray leading-relaxed">Explorer of digital art and generative systems. Finding beauty in the overlap between code, design, and emergent behavior.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-dark-gray">Personal</h2>
            <p className="text-medium-gray leading-relaxed">Father, continuous learner, and advocate for mindful technology. Balancing the digital with the deeply human.</p>
          </div>
        </div>

        {/* Narrative Bio */}
        <div className="prose max-w-none mb-16 space-y-6">
          <p className="text-lg">
            My journey began at the intersection of computer science and philosophy, where I discovered that the most interesting problems often lie in the spaces between disciplines.
          </p>
          
          <p className="text-lg">
            Through years of building software systems, I've developed a deep appreciation for elegant solutions that emerge from understanding complex relationships and patterns.
          </p>
          
          <p className="text-lg">
            Today, I focus on creating technology that enhances rather than replaces human capabilities, drawing inspiration from natural systems and cognitive science.
          </p>
          
          <p className="text-lg">
            As a father, I'm particularly interested in how we can shape technology to support genuine human connection and growth, while fostering creativity and wonder.
          </p>
        </div>

        {/* Beliefs Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold mb-4">Core Beliefs</h2>
          <p className="text-medium-gray text-lg">Principles that guide my approach to work and life</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Systems > Silos",
            "Curiosity > Certainty", 
            "Process > Perfection",
            "Questions > Answers",
            "Learning > Knowing",
            "Connection > Collection"
          ].map((belief, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <p className="text-xl font-serif text-center text-dark-gray group-hover:text-accent transition-colors">{belief}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}