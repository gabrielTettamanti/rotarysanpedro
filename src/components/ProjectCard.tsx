import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      educacion: 'bg-green-100 text-green-800',
      salud: 'bg-red-100 text-red-800',
      agua: 'bg-blue-100 text-blue-800',
      paz: 'bg-purple-100 text-purple-800',
      medioambiente: 'bg-emerald-100 text-emerald-800',
      economia: 'bg-yellow-100 text-yellow-800',
      'materno-infantil': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names = {
      educacion: 'Educación',
      salud: 'Salud',
      agua: 'Agua Potable',
      paz: 'Paz',
      medioambiente: 'Medio Ambiente',
      economia: 'Economía Local',
      'materno-infantil': 'Salud Materno-Infantil'
    };
    return names[category as keyof typeof names] || category;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
            <Tag className="w-3 h-3 mr-1" />
            {getCategoryName(project.category)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          {formatDate(project.date)}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;