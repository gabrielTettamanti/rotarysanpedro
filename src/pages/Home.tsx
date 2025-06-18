import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Globe, Award } from 'lucide-react';
import Carousel from '../components/Carousel';
import CauseCard from '../components/CauseCard';
import { projects } from '../data/projects';
import { rotaryCauses } from '../data/causes';

const Home: React.FC = () => {
  const featuredProjects = projects.slice(0, 4);
  const featuredCauses = rotaryCauses.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-20 pb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bienvenidos a<br />
              <span className="text-yellow-400">Rotary Club San Pedro</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Servimos para cambiar vidas en nuestra comunidad y en todo el mundo
            </p>
            <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-yellow-400/20">
              <p className="text-lg font-medium text-yellow-300">
                "La magia del Rotary"
              </p>
              <p className="text-blue-200 mt-2">Lema Presidencial 2024-2025</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/join"
                className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-all duration-200 font-bold text-lg group"
              >
                Únete a Nosotros
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200 font-bold text-lg"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Proyectos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce los proyectos que estamos desarrollando para transformar vidas 
              y fortalecer nuestra comunidad
            </p>
          </div>
          <Carousel projects={featuredProjects} />
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
            >
              Ver Todos los Proyectos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rotary Causes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las Causas de Rotary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos en siete áreas de interés para crear un cambio duradero 
              en las comunidades de todo el mundo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCauses.map((cause) => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium"
            >
              Conoce Más Sobre Nosotros
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para cambiar vidas junto con nosotros?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Únete a una comunidad global de líderes que trabajan para crear 
            un cambio positivo y duradero en el mundo
          </p>
          <Link
            to="/join"
            className="inline-flex items-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-all duration-200 font-bold text-lg group"
          >
            Comenzar Mi Camino Rotario
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;