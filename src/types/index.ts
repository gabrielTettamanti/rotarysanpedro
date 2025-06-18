export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: 'educacion' | 'salud' | 'agua' | 'paz' | 'medioambiente' | 'economia' | 'materno-infantil';
}

export interface DirectiveMember {
  name: string;
  position: string;
  image?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
  content: string;
}

export interface Cause {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}