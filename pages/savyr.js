
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Comic Book Adventures',
    description: 'Creating superhero stories and drawing comic strips together. From stick figures to epic tales of adventure and friendship.',
    icon: '📚',
    color: 'from-blue-400 to-purple-500',
    type: 'creative',
    status: 'ongoing',
    link: '#comic-gallery'
  },
  {
    title: 'LEGO Story Builder',
    description: 'Building worlds brick by brick and telling amazing stories with our creations. Each build becomes a new chapter in our adventures.',
    icon: '🧱',
    color: 'from-red-400 to-orange-500',
    type: 'building',
    status: 'collection',
    link: '#lego-stories'
  },
  {
    title: 'Quiz & Game Zone',
    description: 'Fun educational games and quizzes we build together on Replit. Learning through play and coding challenges!',
    icon: '🎮',
    color: 'from-green-400 to-teal-500',
    type: 'interactive',
    status: 'coming-soon',
    link: 'https://replit.com/@example/savyr-quiz-game'
  },
  {
    title: 'Book Reviews by Savyr',
    description: 'Savyr\'s honest thoughts on the books we read together. From picture books to chapter books, every story gets a review!',
    icon: '📖',
    color: 'from-yellow-400 to-pink-500',
    type: 'reviews',
    status: 'weekly',
    link: '#book-reviews'
  }
];

const statusBadges = {
  'ongoing': { text: 'In Progress', color: 'bg-blue-100 text-blue-700' },
  'collection': { text: 'Growing Collection', color: 'bg-green-100 text-green-700' },
  'coming-soon': { text: 'Coming Soon', color: 'bg-purple-100 text-purple-700' },
  'weekly': { text: 'Updated Weekly', color: 'bg-orange-100 text-orange-700' }
};

export default function Savyr() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl mb-6 transform rotate-3">
            <span className="text-4xl">🌟</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-dark-gray">
            Savyr's Corner
          </h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            A special space where creativity meets curiosity. Join us on our adventures in storytelling, building, learning, and exploring the world together.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Decorative background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${project.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
              </div>
              
              {/* Status Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadges[project.status].color}`}>
                  {statusBadges[project.status].text}
                </span>
              </div>

              <h2 className="text-2xl font-serif font-semibold mb-4 text-dark-gray group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h2>
              
              <p className="text-medium-gray leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Action Link */}
              {project.link.startsWith('http') ? (
                <Link 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors group-hover:translate-x-1 duration-200"
                >
                  Explore Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              ) : (
                <Link 
                  href={project.link}
                  className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors group-hover:translate-x-1 duration-200"
                >
                  View Gallery
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Recent Highlights Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold mb-4 text-dark-gray">Recent Highlights</h2>
            <p className="text-medium-gray">Our latest adventures and creations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder for image content */}
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="bg-gray-100 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-gray-400">📸 Latest Comic Strip</span>
              </div>
              <h3 className="font-semibold mb-2">The Super Sandwich Adventure</h3>
              <p className="text-sm text-medium-gray">Our hero saves lunch time with creativity and teamwork!</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="bg-gray-100 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-gray-400">🏗️ LEGO Creation</span>
              </div>
              <h3 className="font-semibold mb-2">The Floating Castle</h3>
              <p className="text-sm text-medium-gray">An architectural marvel that defies gravity and imagination!</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="bg-gray-100 rounded-xl h-32 mb-4 flex items-center justify-center">
                <span className="text-gray-400">⭐ Book Review</span>
              </div>
              <h3 className="font-semibold mb-2">"Dog Man: Mothering Heights"</h3>
              <p className="text-sm text-medium-gray">5 stars! "Very funny and the drawings are awesome!" - Savyr</p>
            </div>
          </div>
        </div>

        {/* Future Projects Section */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-soft border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl mx-auto mb-6 flex items-center justify-center transform -rotate-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-3xl font-serif font-semibold mb-4 text-dark-gray">Coming Up Next</h3>
            <p className="text-medium-gray max-w-2xl mx-auto mb-8">
              We're always cooking up new ideas! From coding games together to creating stop-motion animations, 
              the adventure never stops in Savyr's Corner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Stop Motion Videos</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">Coding Games</span>
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Art Gallery</span>
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">Science Experiments</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
