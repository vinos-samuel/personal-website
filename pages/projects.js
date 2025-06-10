import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'BookBot',
    description: 'AI-powered reading companion that helps children develop a love for books through interactive storytelling',
    image: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg',
    tags: ['AI', 'React', 'Natural Language Processing'],
    link: 'https://bookbot.example.com'
  },
  {
    title: 'MaidEasy',
    description: 'Platform connecting households with verified domestic helpers, streamlining the hiring process',
    image: 'https://images.pexels.com/photos/3989578/pexels-photo-3989578.jpeg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://maideasy.example.com'
  },
  {
    title: 'Sea Champ',
    description: 'Educational game teaching ocean conservation through interactive challenges',
    image: 'https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg',
    tags: ['Unity', 'C#', 'Game Development'],
    link: 'https://seachamp.example.com'
  }
];

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-center font-serif mb-16">
          Projects & Experiments
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-serif font-semibold mb-3 text-dark-gray group-hover:text-accent transition-colors">{project.title}</h2>
                <p className="text-medium-gray mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-50 text-medium-gray px-3 py-2 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  View Project
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}