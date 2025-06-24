
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: 'bookbot',
    name: 'BookChat',
    tagline: 'Chat with your favorite books. Explore ideas, characters, and themes in conversation.',
    description: 'A web app that lets users talk to any book using AI — asking questions, challenging ideas, or diving into character perspectives.',
    image: '/images/bookchat.png',
    tags: ['AI', 'React', 'Education', 'Natural Language Processing'],
    link: 'https://mybookchat.co/',
    fullDetails: {
      whatItDoes: 'BookChat is a web app that lets users talk to any book using AI — asking questions, challenging ideas, or diving into character perspectives. It connects Google Books, OpenAI, and Amazon APIs for a rich reading experience. Users can upload PDF books and create book maps.',
      whyBuilt: 'I wanted to build a tool that helps people, especially curious kids and thinkers, go beyond reading and start interacting with stories. It also became a way to explore AI\'s potential in education and reflection — something I now share with my son. Besides, I wanted to see how deep vibe coding can take me.',
      whatLearned: 'How to work with AI agents (Lovable + Replit), manage API integrations, and design meaningful dialogue UX. I also learned that people don\'t just want answers from books — they want conversation and reinterpretation.',
      liveLinks: [
        { name: 'Live', url: 'https://mybookchat.co/' },
        { name: 'Prototype', url: 'https://preview--book-bot.lovable.app/' }
      ]
    }
  },
  {
    id: 'flow32',
    name: 'Flow 3/2',
    tagline: 'Master your time with the 3-priority, 2-hour focus method.',
    description: 'A lightweight productivity app that helps users plan each day around three core priorities and two focused time blocks — promoting clarity, momentum, and less cognitive overload.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg',
    tags: ['Productivity', 'UX Design', 'React', 'Time Management'],
    link: 'https://elaborate-toffee-5ca246.netlify.app/',
    fullDetails: {
      whatItDoes: 'Flow 3/2 is a lightweight productivity app that helps users plan each day around three core priorities and two focused time blocks — promoting clarity, momentum, and less cognitive overload.',
      whyBuilt: 'I wanted a simple system to help me and others cut through noise and focus on what actually moves the needle each day. The goal wasn\'t to track more — it was to *do less but better*. It became part productivity tool, part daily reflection ritual.',
      whatLearned: 'I refined how I think about time, task weight, and design simplicity. It was also a chance to build front to back on my own — from UX planning to deployment — and understand how tools shape habits.',
      liveLinks: [
        { name: 'Live Demo', url: 'https://elaborate-toffee-5ca246.netlify.app/' }
      ]
    }
  },
  {
    id: 'contingent-workforce-hub',
    name: 'Contingent Workforce Hub',
    tagline: 'AI-powered knowledge platform for workforce strategy professionals managing contingent talent at scale.',
    description: 'A comprehensive platform that centralizes contingent workforce knowledge, provides AI-driven insights, and connects HR professionals with strategic resources.',
    image: 'https://images.pexels.com/photos/3989578/pexels-photo-3989578.jpeg',
    tags: ['AI Agent', 'HR Tech', 'Knowledge Hub', 'Workforce Strategy'],
    link: 'https://cwh.example.com',
    fullDetails: {
      whatItDoes: 'The Contingent Workforce Hub is an AI-powered platform that serves as a central knowledge repository for workforce strategy professionals. It features an intelligent assistant that can answer complex questions about contingent workforce management, compliance requirements, market trends, and strategic best practices.',
      whyBuilt: 'Working in workforce strategy, I noticed how fragmented and scattered industry knowledge was. Professionals were spending too much time searching for information across multiple sources. I built this hub to centralize expertise and make it accessible through conversational AI.',
      whatLearned: 'This project deepened my understanding of enterprise knowledge management, AI agent development, and the specific challenges facing modern workforce strategy teams. I learned how to build systems that don\'t just store information but actively help professionals make better strategic decisions.',
      liveLinks: [
        { name: 'Platform Demo', url: 'https://cwh.example.com' },
        { name: 'Knowledge Base', url: 'https://cwh.example.com/knowledge' }
      ]
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

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
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-2xl font-serif font-semibold mb-2 text-dark-gray group-hover:text-accent transition-colors">
                  {project.name}
                </h2>
                
                <p className="text-medium-gray mb-3 leading-relaxed text-sm font-medium">
                  {project.tagline}
                </p>
                
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

                {/* View Project Button */}
                <button
                  onClick={() => openModal(project)}
                  className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors group-hover:translate-x-1 duration-200"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={closeModal}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="relative">
              <div className="h-64 w-full overflow-hidden rounded-t-3xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-opacity-30 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-3xl font-serif font-bold mb-2">{selectedProject.name}</h2>
                <p className="text-lg opacity-90">{selectedProject.tagline}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-dark-gray">What it does</h3>
                  <p className="text-medium-gray leading-relaxed">{selectedProject.fullDetails.whatItDoes}</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-dark-gray">Why I built it</h3>
                  <p className="text-medium-gray leading-relaxed">{selectedProject.fullDetails.whyBuilt}</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-dark-gray">What I learned</h3>
                  <p className="text-medium-gray leading-relaxed">{selectedProject.fullDetails.whatLearned}</p>
                </div>

                {/* Live Links */}
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-4 text-dark-gray">Links</h3>
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.fullDetails.liveLinks.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-dark transition-colors"
                      >
                        {link.name}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
