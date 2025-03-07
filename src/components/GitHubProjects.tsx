import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GitHubRepo } from '../types';
import { Github, Star, Code } from 'lucide-react';

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/fehhmont/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os repositórios');
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4">Carregando projetos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Github className="text-blue-600" size={24} />
          <h2 className="text-2xl font-bold">Projetos no GitHub</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="text-gray-600 mb-4 h-20 overflow-hidden">
                {repo.description || 'Sem descrição disponível'}
              </p>
              <div className="flex items-center gap-4">
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <Code size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">{repo.stargazers_count}</span>
                </div>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}