import React, { useState } from 'react';
import { Users, CheckCircle, ArrowRight, Heart, Globe, Award } from 'lucide-react';

const Join: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: '',
    company: '',
    motivation: '',
    availableTime: '',
    hasExperience: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Únete a Nosotros
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Sé parte de una comunidad global comprometida con el servicio 
              y la transformación positiva del mundo
            </p>
            <div className="bg-yellow-400/10 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/20">
              <p className="text-lg font-medium text-yellow-300">
                "El servicio es el alquiler que pagamos por el espacio que ocupamos en la Tierra"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué unirse a Rotary?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ser rotario significa ser parte de algo más grande que uno mismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Heart className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Impacto Significativo</h3>
              <p className="text-gray-600 leading-relaxed">
                Participa en proyectos que realmente transforman vidas y comunidades. 
                Tu contribución genera un cambio duradero y medible.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                <Users className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Red de Contactos</h3>
              <p className="text-gray-600 leading-relaxed">
                Conecta con profesionales y líderes de diversos sectores. 
                Construye relaciones valiosas que perduran toda la vida.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
                <Globe className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perspectiva Global</h3>
              <p className="text-gray-600 leading-relaxed">
                Forma parte de una organización internacional presente en más de 
                200 países. Amplía tu visión del mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Qué buscamos en un rotario?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Compromiso con el Servicio</h3>
                    <p className="text-gray-600">Pasión por ayudar a otros y mejorar la comunidad</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Integridad Personal</h3>
                    <p className="text-gray-600">Altos estándares éticos en la vida personal y profesional</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Disponibilidad de Tiempo</h3>
                    <p className="text-gray-600">Capacidad para participar activamente en reuniones y proyectos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Diversidad Profesional</h3>
                    <p className="text-gray-600">Representación de diferentes sectores y profesiones</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Reunión Rotary"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solicitud de Membresía
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                    Profesión *
                  </label>
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa/Organización
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Por qué quieres unirte a Rotary? *
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={4}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Comparte tu motivación para formar parte de Rotary..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="availableTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Disponibilidad de Tiempo
                  </label>
                  <select
                    id="availableTime"
                    name="availableTime"
                    value={formData.availableTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="high">Alta - Más de 5 horas semanales</option>
                    <option value="medium">Media - 2-5 horas semanales</option>
                    <option value="low">Limitada - 1-2 horas semanales</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hasExperience" className="block text-sm font-medium text-gray-700 mb-2">
                    Experiencia en Servicio Comunitario
                  </label>
                  <select
                    id="hasExperience"
                    name="hasExperience"
                    value={formData.hasExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="extensive">Extensa</option>
                    <option value="some">Alguna experiencia</option>
                    <option value="little">Poca experiencia</option>
                    <option value="none">Sin experiencia previa</option>
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-bold text-lg group"
                >
                  Enviar Solicitud
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proceso de Incorporación
            </h2>
            <p className="text-xl text-gray-600">
              Así es como funciona el proceso para convertirte en rotario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Solicitud</h3>
              <p className="text-gray-600">Completa el formulario de solicitud de membresía</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Entrevista</h3>
              <p className="text-gray-600">Reunión informal con miembros del comité de membresía</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visitas</h3>
              <p className="text-gray-600">Asiste a algunas reuniones como invitado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Inducción</h3>
              <p className="text-gray-600">Ceremonia de bienvenida e integración al club</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;