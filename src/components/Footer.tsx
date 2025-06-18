import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/rotary_logo_2.png"
                alt="Rotary Club Logo"
                className="h-16 object-contain"
              />
            </div>
            <p className="text-blue-200 leading-relaxed">
              Servimos para cambiar vidas en nuestra comunidad y en todo el
              mundo. Únete a nosotros en nuestra misión de crear un cambio
              duradero.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-200">
                  Av. San Martín 1234, San Pedro, Buenos Aires
                </span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-200">+54 9 3329 38-9626</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-blue-200">
                  rotarysanpedro10@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Media & Meeting Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Síguenos</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/share/14Gqy7AKC6f/?mibextid=wwXIfr"
                target="_blank"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rotaryclubsanpedro?igsh=Zm4zaDl5NzN5cGVs"
                target="_blank"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
            <div className="bg-blue-800 rounded-lg p-4">
              <h5 className="font-semibold mb-2">Reuniones</h5>
              <p className="text-blue-200 text-sm">
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

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 Rotary Club San Pedro. Todos los derechos reservados.
          </p>
          <p className="text-blue-300 text-sm mt-2">
            "La magia del Rotary" - Lema Presidencial 2024-2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;