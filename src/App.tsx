import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import GitHubProjects from './components/GitHubProjects';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <GitHubProjects />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Felipe Anthony. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;