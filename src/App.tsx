import { Mail, Phone, Code2, Database, Wrench, GraduationCap, User, Briefcase, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              SASIKUMAR
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-bold text-slate-800">SASIKUMAR</h1>
            <p className="text-2xl text-slate-600 font-light">Software Developer</p>
            <div className="flex gap-6 justify-center items-center text-slate-600">
              <a href="mailto:sasikumar@email.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
                <span>sasikumar@email.com</span>
              </a>
              <span className="text-slate-300">|</span>
              <a href="tel:9XXXXXXXXX" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone className="w-5 h-5" />
                <span>9XXXXXXXXX</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-slate-800">About Me</h2>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Motivated software developer with strong fundamentals in Java, data structures, and problem-solving.
              Seeking an entry-level role to apply my skills in real-world applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="font-semibold text-blue-600">Strong logical thinking</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="font-semibold text-blue-600">Quick learner</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="font-semibold text-blue-600">Passionate developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-slate-800">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Programming</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Java</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-blue-600"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Python</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-blue-600"></div>
                    ))}
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Web & Database</h3>
              </div>
              <div className="space-y-3">
                <div className="px-3 py-2 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">HTML & CSS</span>
                </div>
                <div className="px-3 py-2 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">JavaScript</span>
                </div>
                <div className="px-3 py-2 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">MySQL</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Tools</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg">
                  <Github className="w-4 h-4 text-slate-600" />
                  <span className="text-slate-700">Git & GitHub</span>
                </div>
                <div className="px-3 py-2 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-slate-800">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Hospital Management System</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Developed a Java-based application to manage patient records, appointments, and billing.
                This comprehensive system streamlines hospital operations and improves patient care management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Java</span>
                <span className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full">MySQL</span>
                <span className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-full">OOP</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Snake Game</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Created a simple Snake game using Java with object-oriented principles.
                Implemented game logic, collision detection, and score tracking with clean, maintainable code.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-emerald-600 text-white text-sm rounded-full">Java</span>
                <span className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full">Game Dev</span>
                <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">OOP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-slate-800">Education</h2>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-2">Diploma in Computer Science Engineering</h3>
            <p className="text-xl text-blue-100">Percentage: 85%</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm currently seeking opportunities to apply my skills in real-world applications.
            Let's connect and discuss how I can contribute to your team.
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="mailto:sasikumar@email.com"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:shadow-lg transition-shadow font-semibold"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="tel:9XXXXXXXXX"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-white rounded-xl hover:shadow-lg transition-shadow font-semibold"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Sasikumar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
