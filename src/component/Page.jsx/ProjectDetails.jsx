"use client";

import { useParams, useNavigate } from "react-router-dom"; // or next/navigation if Next.js App Router
import { useEffect, useState } from "react";
import axios from "axios";

const ProjectDetails = () => {
  const { id } = useParams(); // /project_details/:id → id pabo
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProject = async () => {
    try {

      const res = await axios.get("https://ahmadjubayerr.pythonanywhere.com/api/projects/");
      const foundProject = res.data.find(
        (p) => p.title.toLowerCase() === projectTitle.toLowerCase()
      );
      if (foundProject) {
        setProject(foundProject);
      } else {
        setError("Project not found");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load project");
    } finally {
      setLoading(false);
    }
  };
  fetchProject();
}, [projectTitle]);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#00184C]">
        <div className="text-white text-xl">Loading project...</div>
      </div>
    );
  }
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#00184C]">
        <div className="text-white text-xl">Project not found</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#00184C] text-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        >
          ← Back to Projects
        </button>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-6 py-2 rounded-full border border-gray-600 text-gray-300 text-lg mb-6">
              {project.category?.replace("_", " ") || "Case Study"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            {project.duration && (
              <p className="text-gray-400 text-lg">Duration: {project.duration}</p>
            )}
          </div>

          {/* Main Canvas Image */}
          {project.canvas_image && (
            <div className="mb-16 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src={`https://ahmadjubayerr.pythonanywhere.com${project.canvas_image}`}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Video + SVG side by side */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Video Section */}
            {project.overview_video_link && (
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black">
                <div className="aspect-video">
                  <video
                    src={project.overview_video_link}
                    controls
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="p-4 text-gray-400">Project Overview Video</p>
              </div>
            )}

            {/* SVG Section */}
            {project.svg_file && (
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-black/40">
                <div className="aspect-video flex items-center justify-center p-6">
                  <img
                    src={`https://ahmadjubayerr.pythonanywhere.com${project.svg_file}`}
                    alt="Project SVG"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="p-4 text-gray-400">Project SVG / Wireframe</p>
              </div>
            )}
          </div>

          {/* Description / Body */}
          {project.body && (
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Project Details</h2>
              <div dangerouslySetInnerHTML={{ __html: project.body }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;