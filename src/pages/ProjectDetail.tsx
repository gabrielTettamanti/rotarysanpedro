// src/pages/ProjectDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { slug, id } = useParams(); // Extrae los parámetros de la URL
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

      if (slug === "paseo_rotario" && id) {
        setProjectData({
          title: "Paseo Rotario",
          description: id,
        });
      } else {
        setError("Proyecto no encontrado.");
      }
      setLoading(false);
  }, [slug, id]);

  if (loading) {
    return (
      <div className="text-center p-8">Cargando detalles del proyecto...</div>
    );
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  if (!projectData) {
    return (
      <div className="text-center p-8">
        No se encontraron datos para este proyecto.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900 leading-tight">
        {projectData.title}
      </h1>
      <p className="text-9xl mb-8 text-gray-700 max-w-3xl">
        {projectData.description}
      </p>
    </div>
  );
}

export default ProjectDetail;
