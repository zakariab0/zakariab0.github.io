"use client";

import { useState } from "react";
import projects from "../../data/projects.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState<string>("all");
  const categories = ["all", "Python", "Java", "PHP"];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
        Projects
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        A collection of projects I've built across different domains and technologies.
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-neutral-900"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded">
                {project.year}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <FaGithub className="text-base" />
                  <span>Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>Demo</span>
                </a>
              )}
              {project.private && (
                <span className="text-xs text-neutral-500 dark:text-neutral-500 italic">
                  Private
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
