import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <h2 className="logo">NK</h2>
          <ul className="nav-menu">
            {['home', 'about', 'skills', 'experience', 'education', 'contact'].map((section) => (
              <li key={section}>
                <button
                  className={activeSection === section ? 'active' : ''}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Nithin K</span>
          </h1>
          <p className="hero-subtitle">Computer Science Engineer | Full Stack Developer</p>
          <p className="hero-description">
            Fresher seeking opportunities to enhance my skills and gain experience in software development
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('experience')}>
              View Work
            </button>
          </div>
        </div>
        <div className="hero-animation">
          <div className="floating-card">💻</div>
          <div className="floating-card delay-1">🚀</div>
          <div className="floating-card delay-2">⚡</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a passionate Computer Science Engineering graduate from RVS College of Engineering 
                with a CGPA of 8.11. I'm multilingual and can speak natively in Tamil and English.
              </p>
              <p>
                I have hands-on experience through internships in Hardware & Networking at DCI Technologies 
                and Full Stack Development at Futurik Technologies, where I worked on real-time projects 
                and cloud hosting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section dark">
        <div className="container">
          <h2 className="section-title">Skills & Abilities</h2>
          <div className="skills-grid">
            {[
              { name: 'C', icon: '🔧', level: 85 },
              { name: 'Python', icon: '🐍', level: 80 },
              { name: 'HTML/CSS', icon: '🎨', level: 90 },
              { name: 'C++', icon: '⚙️', level: 75 },
              { name: 'Microsoft Excel', icon: '📊', level: 85 },
              { name: 'Communication', icon: '💬', level: 90 }
            ].map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Internship Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Full Stack Development</h3>
                <h4>Futurik Technologies | 2024</h4>
                <p>
                  Gained comprehensive knowledge in full stack development and cloud hosting. 
                  Worked on real-time projects, enhancing skills in both front-end and back-end 
                  technologies, as well as deploying applications on cloud platforms.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Hardware and Networking</h3>
                <h4>DCI Technologies | 2024</h4>
                <p>
                  Gained valuable knowledge and hands-on experience in hardware and networking, 
                  including real-time handling of networking systems and hardware components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section dark">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>Bachelor of Engineering - CSE</h3>
              <h4>RVS College of Engineering</h4>
              <p className="grade">CGPA: 8.11</p>
            </div>
            <div className="education-card">
              <div className="education-icon">📚</div>
              <h3>Higher Secondary (HSC)</h3>
              <h4>Govt. Madura Sugars Hr Sec School</h4>
              <p className="grade">Percentage: 70%</p>
            </div>
            <div className="education-card">
              <div className="education-icon">📖</div>
              <h3>Secondary (SSLC)</h3>
              <h4>Govt. Madura Sugars Hr Sec School</h4>
              <p className="grade">Percentage: 58%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:nithinnithin2402@gmail.com">nithinnithin2402@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919342130760">+91 9342130760</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>2/5, Main Street, Ramarajapuram<br />Nilakottai (TK), Dindigul - 624219</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Nithin K. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
