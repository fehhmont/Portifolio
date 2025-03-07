import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">Felipe Anthony</h1>
            <h2 className="text-xl mb-6">Analista de Dados / desenvolvimento Back-end</h2>
            <p className="max-w-2xl mb-6">
              Analista de dados detalhista com paixão por transformar dados em insights acionáveis. 
              Visando ajudar e aprimorar processos de tomada de decisão.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <a href="mailto:felipe.canalcanal@gmail.com" className="hover:underline">
                felipe.canalcanal@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>(11) 95220-8243</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Osasco, São Paulo</span>
            </div>
            <div className="flex items-center gap-2">
              <Github size={20} />
              <a href="https://github.com/fehhmont" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={20} />
              <a href="http://www.linkedin.com/in/felipe-anthony-599ba6244" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}