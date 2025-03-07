import React from 'react';
import { Award } from 'lucide-react';
import { Certification } from '../types';

const certifications: Certification[] = [
  {
    name: "Fortinet Introdução ao Threat Landscape",
    period: "janeiro de 2025"
  },
  {
    name: "Database Design - Oracle",
    period: "novembro de 2024 ",
    description: "Conhecimento em criação de modelos EDR e ER, definição de cardinalidades, atributos e valores. Experiência no processo completo de desenvolvimento de bancos de dados."
  },
  {
    name: "Python - Santander",
    period: "janeiro de 2025",
    description: "Conceitos fundamentais de programação em Python, incluindo manipulação de variáveis, estruturas condicionais, loops, listas, dicionários e conjuntos."
  },
  {
    name: "Power BI - Santander",
    period: "janeiro de 2025"
  },
  {
    name: "Excel 2019 - Avançado",
    period: "Junho 2024 - Setembro 2024"
  },
  {
    name: "Cloud Tech Professional Microsoft 365",
    period: "Novembro de 2024"
  },
  {
    name: "Cloud Tech Associate Email Security",
    period: "Agosto de 2024"
  }
];

export default function Certifications() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Award className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Certificações</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold">{cert.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{cert.period}</p>
              {cert.description && (
                <p className="text-gray-700">{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}