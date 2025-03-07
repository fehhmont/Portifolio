import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Education as EducationType } from '../types';

const education: EducationType[] = [
  {
    course: "Análise e desenvolvimento de sistemas",
    institution: "Centro universitário Senac - São Paulo, SP",
    period: "fevereiro de 2024 - Atual"
  },
  {
    course: "Banco de Dados para Web",
    institution: "Senac Lapa Tito",
    period: "maio de 2024 - agosto de 2024"
  },
  {
    course: "Técnico em informática",
    institution: "Senac Lapa Tito",
    period: "fevereiro de 2021 - novembro de 2023"
  }
];

export default function Education() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCap className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Formação Acadêmica</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{edu.course}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}