import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsItems } from '../data/news';

const News: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Noticias y Eventos
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Mantente al día con las últimas actividades, eventos y logros 
              de nuestro club rotario
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {newsItems.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Noticia Destacada</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={newsItems[0].image}
                      alt={newsItems[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Destacada
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(newsItems[0].date)}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {newsItems[0].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {newsItems[0].summary}
                    </p>
                    <button className="inline-flex items-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium">
                      Leer Más
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Noticias Recientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.summary}
                  </p>
                  <button className="text-blue-900 font-medium hover:text-blue-700 transition-colors duration-200">
                    Leer más →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Próximos Eventos
            </h2>
            <p className="text-xl text-gray-600">
              No te pierdas nuestras próximas actividades y reuniones
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-blue-900 text-white rounded-lg py-2 px-3">
                    <div className="text-sm font-medium">JUL</div>
                    <div className="text-lg font-bold">15</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Reunión Semanal - Club
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Reunión regular del club con presentación especial sobre proyectos de educación.
                  </p>
                  <div className="text-sm text-gray-500">
                    20:00 hs - Hotel San Pedro, Salón Principal
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-yellow-500 text-white rounded-lg py-2 px-3">
                    <div className="text-sm font-medium">JUL</div>
                    <div className="text-lg font-bold">20</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Campaña de Donación de Sangre
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Jornada solidaria abierta a toda la comunidad para donación de sangre.
                  </p>
                  <div className="text-sm text-gray-500">
                    09:00 - 16:00 hs - Hospital Municipal San Pedro
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="bg-green-600 text-white rounded-lg py-2 px-3">
                    <div className="text-sm font-medium">AGO</div>
                    <div className="text-lg font-bold">05</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Cena Benéfica Anual
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Evento para recaudar fondos destinados a proyectos de infraestructura educativa.
                  </p>
                  <div className="text-sm text-gray-500">
                    21:00 hs - Salón de Eventos Los Jardines
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mantente Informado
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Suscríbete a nuestro boletín para recibir las últimas noticias 
            y eventos del club directamente en tu correo
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;