import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa6";
import ExperienceTimeline from "./components/sections/experience-timeline";
import SkillsGrid from "./components/sections/skills-grid";
import ProjectsShowcase from "./components/sections/projects-showcase";
import Achievements from "./components/sections/achievements";
import content from "./data/content.json";

export const revalidate = 86400;

function getExperience(startDate: string) {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months };
}

function formatExperience(exp: { years: number; months: number }) {
  const y = exp.years;
  const m = exp.months;
  const parts: string[] = [];
  if (y > 0) parts.push(`${y} year${y > 1 ? "s" : ""}`);
  if (m > 0) parts.push(`${m} month${m > 1 ? "s" : ""}`);
  return parts.length ? parts.join(" & ") : "0 months";
}

export default function Page() {
  const exp = getExperience("2021-02-01");
  const expStr = formatExperience(exp);

  return (
    <section className="pt-20 md:pt-24">
      {/* Hero Section */}
      <header className="mb-12 md:mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="block text-neutral-900 dark:text-neutral-100">
            Zakaria Bounou
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-3">
          {content.personal.title}
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6">
          {content.personal.tagline} • {content.personal.location}
        </p>

        <p className="text-lg text-neutral-800 dark:text-neutral-200 mb-8 max-w-3xl leading-relaxed">
          {content.about.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <a
            href={`mailto:${content.personal.email}?subject=Let's%20Connect`}
            className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Contact Zakaria"
          >
            <FaEnvelope className="text-base" />
            Get in Touch
          </a>

          <a
            href={content.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FaGithub className="text-base" />
            GitHub
          </a>

          <a
            href={content.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FaLinkedin className="text-base" />
            LinkedIn
          </a>

          <a
            href="/en.pdf"
            download="Zakaria_Bounou_Resume_EN.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FaFileDownload className="text-base" />
            Resume (EN)
          </a>

          <a
            href="/fr.pdf"
            download="Zakaria_Bounou_CV_FR.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <FaFileDownload className="text-base" />
            CV (FR)
          </a>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              {expStr}
            </span>{" "}
            of experience
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              {content.achievements.length}
            </span>{" "}
            awards won
          </div>
          <div>
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              {content.languages.length}
            </span>{" "}
            languages spoken
          </div>
        </div>
      </header>

      {/* Achievements */}
      <div className="my-16">
        <Achievements />
      </div>

      {/* Experience Timeline */}
      <div className="my-16">
        <ExperienceTimeline />
      </div>

      {/* Skills Grid */}
      <div className="my-16">
        <SkillsGrid />
      </div>

      {/* Projects Showcase */}
      <div className="my-16">
        <ProjectsShowcase />
      </div>
    </section>
  );
}
