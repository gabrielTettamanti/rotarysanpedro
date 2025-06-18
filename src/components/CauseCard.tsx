import React from 'react';
import * as Icons from 'lucide-react';
import { Cause } from '../types';

interface CauseCardProps {
  cause: Cause;
}

const CauseCard: React.FC<CauseCardProps> = ({ cause }) => {
  const IconComponent = Icons[cause.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${cause.color}20` }}
        >
          <IconComponent 
            className="w-8 h-8" 
            style={{ color: cause.color }}
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
          {cause.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {cause.description}
        </p>
      </div>
      <div 
        className="h-1 w-full transition-all duration-300 group-hover:h-2"
        style={{ backgroundColor: cause.color }}
      ></div>
    </div>
  );
};

export default CauseCard;