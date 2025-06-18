import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Contact form data:', formData);
    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Estamos aquí para responder tus preguntas y ayudarte a conocer más
              sobre el Rotary Club San Pedro
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envíanos un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre Completo
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
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

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Seleccionar asunto...</option>
                    <option value="membership">
                      Información sobre membresía
                    </option>
                    <option value="projects">Consulta sobre proyectos</option>
                    <option value="volunteer">Voluntariado</option>
                    <option value="partnerships">
                      Alianzas y colaboraciones
                    </option>
                    <option value="general">Consulta general</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-bold text-lg group"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h2>

              <div className="space-y-6 mb-8">
                {/* <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Av. San Martín 1234<br />
                      San Pedro, Buenos Aires<br />
                      Argentina (B2930)
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Teléfono
                    </h3>
                    <p className="text-gray-600">
                      +54 9 3329 38-9626
                      <br />
                      WhatsApp: +54 9 3329 38-9626
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      rotarysanpedro10@gmail.com
                      {/* <br />
                      presidente@rotarysanpedro.org.ar */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Horarios de Reunión
                    </h3>
                    <p className="text-gray-600">
                      <strong>1.er miércoles de cada mes</strong> – Virtual por{" "}
                      <a target="_blank" rel="noopener noreferrer">
                        Google Meet
                      </a>
                      <br />
                      <strong>3.er miércoles de cada mes</strong> – Presencial
                      en Bar Butti
                      <br />
                      Bartolomé Mitre y Rafael Obligado
                      <br />
                      <strong>Horario:</strong> 21:00 h
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Síguenos
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/14Gqy7AKC6f/?mibextid=wwXIfr"
                    target="_blank"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/rotaryclubsanpedro?igsh=Zm4zaDl5NzN5cGVs"
                    className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  {/* <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-200"
                  >
                    <Twitter className="w-6 h-6" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Encontramos Aquí
            </h2>
            <p className="text-xl text-gray-600">
              Visita nuestras reuniones semanales en el Hotel San Pedro
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">
                    Mapa de Google Maps
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Av. San Martín 1234, San Pedro, Buenos Aires
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enlaces Útiles
            </h2>
            <p className="text-xl text-gray-600">
              Acceso rápido a información importante
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://rotary4895.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 border border-blue-200 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-200 group"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-800">
                Distrito 4895
              </h3>
              <p className="text-blue-700">
                Información sobre nuestro distrito rotario y otros clubs de la
                región
              </p>
            </a>

            <a
              href="https://my.rotary.org/es"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 hover:bg-yellow-100 transition-colors duration-200 group"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-2 group-hover:text-yellow-700">
                My Rotary
              </h3>
              <p className="text-yellow-700">
                Portal oficial de Rotary International para socios y clubs
              </p>
            </a>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-2">
                Reuniones Semanales
              </h3>
              <p className="text-green-700">
                <strong>1.er miércoles de cada mes</strong> – Virtual por{" "}
                <a rel="noopener noreferrer">Google Meet</a>
                <br />
                <strong>3.er miércoles de cada mes</strong> – Presencial en Bar
                Butti
                <br />
                Bartolomé Mitre y Rafael Obligado
                <br />
                <strong>Horario:</strong> 21:00 h
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;