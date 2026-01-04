"use client";

import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import image from "../../image/Element.png";
import image1 from "../../image/Project hero video 1.mp4";
import image2 from "../../image/Frame 1000004068.png";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseURL = "https://ahmadjubayerr.pythonanywhere.com";

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `${baseURL}/api/projects/${id}/detail/`
        );

        setProject(response.data);
      } catch (err) {
        console.error("Error fetching project details:", err);
        setError("Failed to load project details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchProject();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#081228]">
        <div className="text-white text-xl animate-pulse">
          Loading project details...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#081228] text-white">
        <p className="text-red-400 text-2xl mb-6">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#081228] text-white">
        <p className="text-xl mb-6">Project not found</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#081228] text-white pb-16">
      <video src={image1} autoPlay loop muted playsInline className=""></video>
      <div className="">
        <div className="absolute top-10 left-2/12">
          <img src={image} alt="" className="mx-auto h-[47vh] " />
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute  top-8">
            <div className="relative text-center px-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-7">
                <img
                  src={image2}
                  alt="JJ Logo"
                  className="h-11 md:h-16 lg:h-18 drop-shadow-2xl"
                />
              </div>
              <div className="inline-flex items-center px-4 py-2 mb-3 bg-[#334155]/80 backdrop-blur-sm rounded-md border border-gray-600/50 shadow-lg">
                <NavLink to="/">
                  <span className="text-gray-400 text-sm font-medium">
                    Home
                  </span>
                </NavLink>
                <span className="mx-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <NavLink className="cursor-pointer" to="/project">
                  <span className="text-gray-400 text-sm font-medium">
                    Projects
                  </span>
                </NavLink>
                <span className="mx-2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-200 text-sm font-medium">
                  Projects Details
                </span>
              </div>

              {/* Main Headline - Rozha-like font (use Google Fonts or custom) */}
              <h1 className="text-white max-w-3xl text-4xl md:text-5xl lg:text-[48px] rozha font-bold leading-tight tracking-wide drop-shadow-2xl">
                {project.title}
              </h1>
            </div>
            <div className="relative max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left px-6 py-5">
              {/* Duration */}
              <div>
                <p className="text-gray-400 text-[24px] tracking-wide mb-2 text-center">
                  Duration
                </p>
                <h1 className="text-white text-3xl md:text-[30px] font-semibold text-center">
                  {project.duration}
                </h1>
              </div>

              {/* Category */}
              <div>
                <p className="text-gray-400 text-[24px] tracking-wide mb-2 text-center">
                  Category
                </p>
                <h1 className="text-white text-3xl md:text-[30px] font-semibold text-center">
                  {project.category}
                </h1>
              </div>

              {/* Responsibility */}
              <div>
                <p className="text-gray-400 text-[24px] tracking-wide mb-2 text-center">
                  Responsibility
                </p>
                <h1 className="text-white text-3xl md:text-[30px] font-semibold text-center">
                  UX & UI Design
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 text-gray-500 hover:text-gray-400 cursor-pointer transition-colors text-lg bg-[#00184C] w-full py-8 px-50  mt-14"
        ></button>

        <div className="max-w-7xl mx-auto flex flex-col items-center -mt-20">
          <div className="w-full pb-16 lg:pb-24">
            {project.overview_video_link && (
              <div className="w-full max-w-[80vh] mx-auto overflow-hidden border-32 border-gray-800 bg-black rounded-3xl shadow-2xl">
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "16/9" }}
                >
                  {getYouTubeId(project.overview_video_link) ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(
                        project.overview_video_link
                      )}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
                      title="Project Overview Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full "
                      poster={`${baseURL}${project.canvas_image || ""}`}
                    />
                  ) : (
                    <video
                      src={`${baseURL}${project.overview_video_link}`}
                      controls
                      autoPlay
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover "
                      poster={`${baseURL}${project.canvas_image || ""}`}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Main Canvas Image */}
          {project.svg_file && (
            <div className="w-full max-w-[1400px] mx-auto mb-16 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src={`${baseURL}${project.svg_file}`}
                alt={project.title || "Project preview"}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
