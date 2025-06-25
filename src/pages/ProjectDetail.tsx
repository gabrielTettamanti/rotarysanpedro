// src/pages/ProjectDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { slug, id } = useParams(); // Extrae los parámetros de la URL
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Aquí puedes hacer una llamada a una API o buscar en tus datos locales
    // para obtener la información del proyecto usando 'slug' y 'id'.
    // Por ejemplo: fetch(`/api/projects?slug=${slug}&id=${id}`);

    setLoading(true);
    setError(null);

    // Simulación de una carga de datos
    setTimeout(() => {
      if (slug === "paseo_rotario" && id) {
        setProjectData({
          title: "Paseo Rotario",
          description: id,
        });
      } else {
        setError("Proyecto no encontrado.");
      }
      setLoading(false);
    }, 1000); // Simula un retraso de red
  }, [slug, id]); // Este efecto se ejecuta cada vez que 'slug' o 'id' cambian

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
    <div className="container mx-auto p-52">
      <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
      <p className="text-lg mb-4">{projectData.description}</p>
    </div>
  );
}

export default ProjectDetail;
