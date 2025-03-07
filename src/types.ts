export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  course: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  period: string;
  description?: string;
}