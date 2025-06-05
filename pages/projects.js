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
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-serif mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
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