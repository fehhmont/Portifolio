import React from 'react';
import { Code2, Database, Languages } from 'lucide-react';

const skills = {
  technical: [
    "PHP", "Java", "Python", "SQL", "MySQL",
    "Power BI", "Back-end", "Modelagem de Dados",
    "Pacote office 365"
  ],
  soft: [
    "Atendimento ao cliente",
    "Habilidades de Apresentação"
  ],
  languages: [
    { name: "Inglês", level: "Intermediário" },
    { name: "Espanhol", level: "Intermediário" }
  ]
};

export default function Skills() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="text-blue-600" size={24} />
              <h2 className="text-xl font-bold">Habilidades Técnicas</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Database className="text-blue-600" size={24} />
              <h2 className="text-xl font-bold">Soft Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Languages className="text-blue-600" size={24} />
              <h2 className="text-xl font-bold">Idiomas</h2>
            </div>
            <div className="space-y-2">
              {skills.languages.map((lang, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-2 rounded"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-gray-600"> - {lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}