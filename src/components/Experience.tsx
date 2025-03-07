import React from 'react';
import { Briefcase } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    title: "Analista de Suporte técnico N2",
    company: "Wan tecnologia - São Paulo, SP",
    period: "novembro de 2022 - Atual",
    description: "Analista de Suporte Técnico com 2 anos de experiência em suporte helpdesk, atendimento a chamados, montagem e manutenção de máquinas, troca de SSDs, gerenciamento de e-mails no Office 365, monitoramento e criação de planos de backup, e cibersegurança. Habilidade em analisar problemas técnicos, interagir com clientes e propor soluções eficazes."
  }
];

export default function Experience() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Experiência Profissional</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.period}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}