import content from "../../data/content.json";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
        Experience
      </h2>
      <div className="space-y-8">
        {content.experience.map((exp) => {
          const startDate = new Date(exp.startDate + "-01");
          const endDate = exp.endDate ? new Date(exp.endDate + "-01") : new Date();
          const startStr = startDate.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          });
          const endStr = exp.current
            ? "Present"
            : endDate.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              });

          return (
            <div
              key={exp.id}
              className="border-l-2 border-neutral-300 dark:border-neutral-700 pl-6 relative"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-neutral-900 dark:bg-neutral-100 rounded-full border-2 border-white dark:border-neutral-900" />
              <div className="mb-1">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {exp.position}
                </h3>
                <p className="text-base text-neutral-700 dark:text-neutral-300">
                  {exp.company} • {exp.location}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {startStr} - {endStr}
                </p>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                {exp.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
