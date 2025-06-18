import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { value: 'all', label: 'Todos los Proyectos' },
    { value: 'educacion', label: 'Educación' },
    { value: 'salud', label: 'Salud' },
    { value: 'agua', label: 'Agua Potable' },
    { value: 'medioambiente', label: 'Medio Ambiente' },
    { value: 'economia', label: 'Economía Local' },
    { value: 'materno-infantil', label: 'Salud Materno-Infantil' },
    { value: 'paz', label: 'Paz' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Proyectos
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Conoce las iniciativas que estamos desarrollando para transformar vidas 
              y fortalecer nuestra comunidad
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Mostrando {filteredProjects.length} proyecto{filteredProjects.length !== 1 ? 's' : ''}
                  {selectedCategory !== 'all' && (
                    <span> en la categoría {categories.find(c => c.value === selectedCategory)?.label}</span>
                  )}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No se encontraron proyectos
              </h3>
              <p className="text-gray-600 mb-6">
                Intenta ajustar los filtros o el término de búsqueda
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
              >
                Mostrar Todos los Proyectos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestro Impacto en Números
            </h2>
            <p className="text-xl text-gray-600">
              El resultado de nuestro compromiso con la comunidad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-900 mb-2">120+</h3>
              <p className="text-gray-600">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-700 mb-2">5,000+</h3>
              <p className="text-gray-600">Personas Beneficiadas</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-yellow-600 mb-2">$2M+</h3>
              <p className="text-gray-600">Inversión Social</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-purple-700 mb-2">15</h3>
              <p className="text-gray-600">Años de Servicio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;