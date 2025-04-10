import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronRight, Code, BookOpen, Briefcase, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gradient-bg">
        <div className="md:w-1/2 space-y-6 animate-fade-in z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I'm <span className="text-yellow-300">Mahaveer Pandey</span> 👋
          </h1>
          <p className="text-xl text-white">
            A second-year engineering student passionate about software development and problem-solving 💻
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-yellow-300 transition duration-300 flex items-center animate-pulse-slow">
              Contact Me <ChevronRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#projects" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300">
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=600"
            alt="Professional Workspace"
            className="rounded-2xl shadow-2xl animate-float backdrop-blur-sm"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <Code className="mr-2 text-indigo-600" /> Technical Skills 🚀
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Python', emoji: '🐍' },
              { name: 'C/C++', emoji: '⚡' },
              { name: 'HTML & CSS', emoji: '🎨' },
              { name: 'JavaScript', emoji: '💻' },
              { name: 'Data Structures', emoji: '🏗️' },
              { name: 'Algorithms', emoji: '🧮' },
              { name: 'Problem Solving', emoji: '🔍' },
              { name: 'Web Development', emoji: '🌐' },
              { name: 'Version Control', emoji: '📚' }
            ].map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform skill-card animate-slide-in">
                <p className="font-semibold text-gray-700 flex items-center">
                  <span className="mr-2">{skill.emoji}</span>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 md:px-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          <Briefcase className="mr-2 text-indigo-600" /> Projects 🎯
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-4">Personal Portfolio Website ✨</h3>
            <p className="text-gray-600 mb-4">
              Developing a modern and responsive portfolio website using React and Tailwind CSS to showcase my skills and experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-8 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
          <BookOpen className="mr-2 text-indigo-600" /> Education 📚
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold">Government Engineering College, Bikaner 🎓</h3>
          <p className="text-gray-600 mt-2">B.Tech in Information Technology</p>
          <p className="text-gray-500 mt-1">Second Year Student</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 md:px-16 gradient-bg">
        <h2 className="text-3xl font-bold text-center mb-12 text-white flex items-center justify-center">
          <User className="mr-2" /> Let's Connect! 🤝
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-white/90 p-4 rounded-lg contact-item">
              <Phone className="w-6 h-6 text-indigo-600" />
              <a href="tel:+918290583253" className="text-gray-700 hover:text-indigo-600">+91 8290583253</a>
            </div>
            <div className="flex items-center space-x-4 bg-white/90 p-4 rounded-lg contact-item">
              <Mail className="w-6 h-6 text-indigo-600" />
              <a href="mailto:maha82904915@gmail.com" className="text-gray-700 hover:text-indigo-600">maha82904915@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4 bg-white/90 p-4 rounded-lg contact-item">
              <Linkedin className="w-6 h-6 text-indigo-600" />
              <a href="https://www.linkedin.com/in/mahaveer-pandey-a61024265/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600">LinkedIn Profile</a>
            </div>
            <div className="flex items-center space-x-4 bg-white/90 p-4 rounded-lg contact-item">
              <MapPin className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-700">Kota, Rajasthan, India 📍</span>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105">
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;