import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';
import CauseCard from '../components/CauseCard';
import { rotaryCauses } from '../data/causes';
import { directiveMembers } from '../data/directive';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quiénes Somos
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Somos un club de servicio comprometido con la mejora de nuestra
              comunidad y el mundo a través del liderazgo, la integridad y el
              servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Reunión Rotary Club"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-900 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Nuestra Misión
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Brindar servicio humanitario, promover elevadas normas de
                  ética en todas las ocupaciones y contribuir a crear mayor
                  entendimiento y paz en el mundo a través del compañerismo de
                  líderes empresariales y profesionales unidos en el ideal de
                  servir.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-blue-900 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    Nuestra Visión
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ser una red mundial en la que comunidades, regiones y culturas
                  se unen para intercambiar ideas y emprender acciones en
                  beneficio de la humanidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Construyendo una comunidad más fuerte y solidaria
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  El Comienzo de Una Misión
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2024 - Fundación
                      </h4>
                      <p className="text-gray-600">
                        Un grupo de profesionales y empresarios de San Pedro se
                        unieron con el objetivo común de servir a la comunidad.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2025 - Primer Gran Proyecto
                      </h4>
                      <p className="text-gray-600">
                        Construcción del Parque Rotario en Conmemoración de los
                        120 Años de Rotary International.
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-900 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2018 - Reconocimiento Distrital
                      </h4>
                      <p className="text-gray-600">
                        Recibimos el premio de excelencia por nuestros proyectos
                        de impacto social en el distrito.
                      </p>
                    </div>
                  </div> */}
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        2025 - Actualidad
                      </h4>
                      <p className="text-gray-600">
                        Continuamos expandiendo nuestro impacto con más de 20 socios activos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Historia del club"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rotary Causes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Las Siete Causas de Rotary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro trabajo se enfoca en estas áreas clave para crear un
              impacto duradero en las comunidades de todo el mundo
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rotaryCauses.map((cause) => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>
        </div>
      </section>

      {/* Directive Board */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comisión Directiva 2024-2025
            </h2>
            <p className="text-xl text-gray-600">
              Conoce a los líderes que guían nuestro club hacia el servicio y la
              excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directiveMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-900 font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían todas nuestras acciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio</h3>
              <p className="text-gray-600">
                Ponemos el servicio por encima del interés personal
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Compañerismo
              </h3>
              <p className="text-gray-600">
                Valoramos las relaciones duraderas y significativas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Integridad
              </h3>
              <p className="text-gray-600">
                Actuamos con honestidad y transparencia en todo momento
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Diversidad
              </h3>
              <p className="text-gray-600">
                Celebramos y valoramos las diferencias entre las personas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;