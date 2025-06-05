import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl text-center font-serif mb-16">
          Building bridges between technology, creativity, and human connection
        </h1>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif mb-4">Professional</h2>
            <p className="text-gray-700">Software architect and systems thinker with a passion for building scalable, human-centered solutions. Focused on the intersection of AI and creative technology.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-serif mb-4">Creative</h2>
            <p className="text-gray-700">Explorer of digital art and generative systems. Finding beauty in the overlap between code, design, and emergent behavior.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-serif mb-4">Personal</h2>
            <p className="text-gray-700">Father, continuous learner, and advocate for mindful technology. Balancing the digital with the deeply human.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-xl font-serif text-center">{belief}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}