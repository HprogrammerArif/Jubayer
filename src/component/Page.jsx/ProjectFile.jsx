"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const categories = [
  "All Project",
  "Website Design",
  "Mobile App",
  "Live Projects",
  "Case Study",
  "Graphic Design",
];

export default function ProjectFile() {
  const [activeCategory, setActiveCategory] = useState("All Project");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(
          "https://ahmadjubayerr.pythonanywhere.com/api/projects/"
        );
        setProjects(res.data || []);
        console.log("API Projects:", res.data);
      } catch (error) {
        console.error("Projects API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const normalizeCategory = (cat) => {
    if (!cat) return "";
    return cat
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All Project") return true;

    const projectCategory = normalizeCategory(project.category);

    if (activeCategory === "Case Study") {
      return projectCategory === "Case Study";
    }

    return projectCategory === activeCategory;
  });

  const baseURL = "https://ahmadjubayerr.pythonanywhere.com";

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#081228]">
        <p className="text-white text-xl">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-wrap gap-3 justify-center mt-10 bg-[#00184C] py-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-transparent text-gray-300 border border-gray-600 hover:border-blue-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-400 py-20 text-xl">
            No projects found in this category yet
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project_details/${project.id}`)}
                className="rounded-2xl overflow-hidden bg-gray-900/40 group"
              >
                <div className="h-[330px] flex items-center justify-center bg-black/40 overflow-hidden">
                  {" "}
                  {project.canvas_image ? (
                    <img
                      src={`${baseURL}${project.canvas_image}`}
                      alt={project.title || "Project image"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="text-gray-500 text-center p-6">
                      No preview image available
                    </div>
                  )}
                </div>

                <div className="p-6">
                  {project?.tag?.split(",")?.map((tag, index) => (
                    <button
                      key={index}
                      className="px-5 py-1.5 mb-4 mr-2 rounded-full border border-gray-600 text-gray-300 text-sm font-medium uppercase tracking-wider"
                    >
                      {normalizeCategory(tag.trim())}
                    </button>
                  ))}

                  <h3 className="text-white text-2xl font-semibold mb-3">
                    {project.title || "Untitled Project"}
                  </h3>

                  <p className="text-gray-300 text-base leading-relaxed line-clamp-4">
                    {project.body || "No description available..."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
