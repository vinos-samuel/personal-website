
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'BookBot',
    description: 'AI-powered reading companion that helps children develop a love for books through interactive storytelling and personalized recommendations.',
    image: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg',
    tags: ['AI', 'React', 'Natural Language Processing', 'Education'],
    link: 'https://bookbot.example.com'
  },
  {
    title: 'CT Hub',
    description: 'Comprehensive platform for computational thinking education, providing tools and resources for educators and students.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg',
    tags: ['Education', 'React', 'Node.js', 'MongoDB'],
    link: 'https://cthub.example.com'
  },
  {
    title: 'DomestiQ',
    description: 'Smart platform connecting households with verified domestic helpers, streamlining the hiring and management process.',
    image: 'https://images.pexels.com/photos/3989578/pexels-photo-3989578.jpeg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Platform'],
    link: 'https://domestiq.example.com'
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-dark-gray">
            Projects & Experiments
          </h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            A collection of current and past projects that explore the intersection of technology, creativity, and human connection.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-2xl font-serif font-semibold mb-3 text-dark-gray group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-medium-gray mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-50 text-medium-gray px-3 py-1 rounded-full text-xs font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Link */}
                <Link 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors group-hover:translate-x-1 duration-200"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-soft border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-semibold mb-4 text-dark-gray">More Projects Coming Soon</h3>
            <p className="text-medium-gray max-w-2xl mx-auto">
              I'm always working on new experiments and ideas. Check back regularly to see what's in the pipeline, or follow my journey on social media.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
