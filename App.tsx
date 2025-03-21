import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';
import ContactForm from './components/ContactForm';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold text-blue-600">VC</h1>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-white absolute w-full left-0 top-16 shadow-lg">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            Vaishnav Chinthakindi
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-blue-100">
            Business Analytics Professional
          </p>
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Data-driven professional with expertise in business analytics, data visualization, and statistical modeling.
              Skilled in SQL, Python, Tableau, and Power BI to extract insights and drive business decisions.
              Passionate about transforming complex data into actionable insights that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Technical</h3>
              <div className="flex flex-wrap gap-3">
                {['SQL', 'Python', 'Java', 'Power BI', 'Tableau', 'Webflow'].map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">Analytics</h3>
              <div className="flex flex-wrap gap-3">
                {['Data Visualization', 'Forecasting', 'BI Tools', 'Data Cleaning', 'Statistical Analysis'].map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800">
            Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-blue-600">Business Analytics Student</h3>
              <p className="text-gray-600 mb-4">The University of Scranton – Kania School of Management | 2023 - 2024</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Developed skills in data analysis, visualization, and project implementation</li>
                <li>Gathered and analyzed extensive datasets using Tableau</li>
                <li>Utilized data analysis tools for complex information visualization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-blue-600">Zoho Developer Intern</h3>
              <p className="text-gray-600 mb-4">Nexiilx Consulting, Hyderabad | Feb 2023 - Aug 2023</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Managed customer data and optimized lead management in Zoho CRM</li>
                <li>Assisted in CRM customization and enhanced sales tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Walmart Stock Optimization</h3>
              <p className="text-gray-700">
                Reduced overstock by 10-15% & improved stockout prevention by 20% using SQL, Python, and Tableau.
                Built demand forecasting models (ARIMA, Prophet, XGBoost).
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Algorithmic Trading of Financial Assets</h3>
              <p className="text-gray-700">
                Developed an AI-driven trading system optimizing portfolio performance with predictive analytics.
                Integrated machine learning for real-time trade execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-800">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-600">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <a 
                    href="mailto:vaishnav.chinthakindi5944@gmail.com" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    vaishnav.chinthakindi5944@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <a 
                    href="tel:5708151024" 
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    (570) 815-1024
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Vaishnav Chinthakindi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;