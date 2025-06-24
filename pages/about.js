
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* One-liner Intro */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-lg sm:text-xl lg:text-2xl text-dark-gray max-w-4xl mx-auto leading-relaxed font-light">
            Most of my work comes down to solving real problems — helping organisations in managing different workforces, organize better, or just make sense of messy systems. Lately, that includes building small AI tools, exploring philosophical questions, and creating things with my son that make us both think and laugh.
          </p>
        </div>

        {/* 3-Part Identity Grid */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-8 sm:mb-12 text-center text-dark-gray">
            Three Parts of Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 text-dark-gray">Professional</h3>
              <p className="text-medium-gray leading-relaxed">Contingent Talent, Total Workforce Management, HR Operations</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 text-dark-gray">Creative</h3>
              <p className="text-medium-gray leading-relaxed">AI & Vibe Coding, Writing - Philosophy Thought Experiments</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 text-dark-gray">Personal</h3>
              <p className="text-medium-gray leading-relaxed">Fatherhood, Books, Travel, Yoga</p>
            </div>
          </div>
        </div>

        {/* Bio Narrative */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-8 sm:mb-12 text-center text-dark-gray">
            My Story
          </h2>
          
          <div className="space-y-8 sm:space-y-12">
            {/* Origins and mindset */}
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-dark-gray">Origins and mindset</h3>
              <div className="space-y-4 sm:space-y-6 text-medium-gray leading-relaxed">
                <p className="text-base sm:text-lg">
                  Born in Mumbai to first-generation, non-farming immigrant parents, I grew up as the eldest of four siblings in a single working parent household. Watching my dad work relentlessly while navigating financial uncertainty taught me empathy early. It also shaped the values I carry into everything I do. Learning four languages and moving across cultural spaces gave me a sensitivity to nuance - in people, systems, and stories.
                </p>
                <p className="text-base sm:text-lg">
                  If there's a thread or two that's held through my life, it's been Serendipity and Curiosity - a drive to understand why things work the way they do, and where they break. That's led me to question assumptions, explore deeper knowledge, and recognise that my view of the world is always shaped by my own biases and blind spots — and that's okay. Awareness of those edges is where most of my growth has come from.
                </p>
              </div>
            </div>

            {/* Professional journey arc */}
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-dark-gray">Professional journey arc</h3>
              <div className="space-y-4 sm:space-y-6 text-medium-gray leading-relaxed">
                <p className="text-base sm:text-lg">
                  I studied instrumentation engineering and later completed an MBA in marketing - fields I haven't directly worked in, but both have shaped how I think, connect ideas, and design solutions. My career began out of necessity, with a job at a call centre to support my family. What started as survival became a space to grow - I spent six years there, moving from the phones to becoming a trainer and team lead. That experience taught me the fundamentals of people management, communication, and learning to lead by doing.
                </p>
                <p className="text-base sm:text-lg">
                  From there, I moved into the world of contingent workforce management at IQNavigator, where I began to see work as a system - something that could be made smarter, more humane, and more flexible. That shift opened up the rest of my career. Through roles at Randstad, Cielo, and eventually Netflix, I've helped companies design scalable HR operations, implement vendor systems, and blend full-time and contingent talent models across APAC. A chance opportunity brought me to Singapore, and serendipity has continued to shape my path - but it's curiosity, grit, and systems thinking that's kept me moving forward.
                </p>
              </div>
            </div>

            {/* Transition moments */}
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-dark-gray">Transition moments</h3>
              <div className="space-y-4 sm:space-y-6 text-medium-gray leading-relaxed">
                <p className="text-base sm:text-lg">
                  There have been a few key shifts that shaped not just my career, but how I see work and life. My move from the call centre world into contingent workforce management was the first time I saw systems behind talent — a transition from execution to design thinking. The opportunity to work with IQNavigator exposed me to regional operations and gave me my first taste of leading programs across countries.
                </p>
                <p className="text-base sm:text-lg">
                  In 2013, I got married and soon after relocated to Singapore — a move that changed everything. It opened the door to global exposure, diverse leadership experiences, and deeper work across APAC. At Randstad, I moved from delivery to regional strategy, leading MSP programs across 15 markets. Cielo expanded my view further — shaping workforce solutions and co-owning client growth strategies across industries. Netflix brought it all together — building contingent talent program in APAC from scratch, leading regional teams, and being part of HR Tech transformation implementing platforms like Zendesk, Workday ATS, eightfold CRM and Beeline VMS to reimagine how HR services are delivered.
                </p>
                <p className="text-base sm:text-lg">
                  In 2018, I took a short break to pause and reflect. That time introduced me to blockchain and crypto, and got me thinking about decentralised systems, ownership, and trust. Later that year, my son was born — and suddenly, the way I thought about time, meaning, and creativity shifted. I started building with him, not just for him. More recently, a reorg at Netflix gave me a second chance to pause — and this time, I've leaned into building personal tools, exploring AI, and reconnecting with my curiosity on my own terms.
                </p>
              </div>
            </div>

            {/* What you're exploring now */}
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 sm:mb-6 text-dark-gray">What I'm exploring now</h3>
              <div className="space-y-4 sm:space-y-6 text-medium-gray leading-relaxed">
                <p className="text-base sm:text-lg">
                  Right now, I'm in a season of exploration — reconnecting with the joy of building things from scratch. I'm working on small, meaningful tools for personal use cases using AI Vibe coding: supporting households in managing helper/maid duties, reimagining how we engage with books, and creating a site to help HR and Procurement teams navigate complexity in the non-employee space. I've also been writing more — sharing philosophical thought experiments on Medium. I'm fascinated by AI Agents and their potential applications, and I've been spending time learning how they can be embedded into real-world workflows.
                </p>
                <p className="text-base sm:text-lg">
                  Professionally, I'm open to roles or collaborations that blend operations, workforce solutions, and technology — especially in the space where work meets change. Personally, I'm learning to mould myself to this new age of technology, build tools and community, and stay curious — mostly with my son asking better questions than I can answer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Anchors */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold mb-6 sm:mb-8 text-center text-dark-gray">
            Personal Anchors
          </h2>
          <p className="text-base sm:text-lg text-medium-gray mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
            These are the principles that ground how I work, build, and relate to others:
          </p>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100">
              <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 text-dark-gray">Curiosity over certainty</h4>
              <p className="text-medium-gray leading-relaxed">I've rarely followed a linear path. Asking "why" — in parenting, tech, or philosophy — keeps me growing.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100">
              <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 text-dark-gray">Build, don't just plan</h4>
              <p className="text-medium-gray leading-relaxed">I find clarity through action. Whether it's a system at work or a weekend project with my son, I think best by doing.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100">
              <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 text-dark-gray">Fatherhood as a lens</h4>
              <p className="text-medium-gray leading-relaxed">Being a parent shapes how I think about time, clarity, kindness, and future systems.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100">
              <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 text-dark-gray">Work as systems, not roles</h4>
              <p className="text-medium-gray leading-relaxed">I approach everything — HR, AI, parenting — as interconnected systems with leverage points, not silos.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-soft border border-gray-100">
              <h4 className="text-lg sm:text-xl font-serif font-semibold mb-3 text-dark-gray">Learning through real use cases</h4>
              <p className="text-medium-gray leading-relaxed">I don't learn tech for the sake of it. I build tools to solve real-world problems I care about.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
