import content from "../../data/content.json";

export default function SkillsGrid() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
        Skills & Technologies
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Backend */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Backend Development
          </h3>
          <div className="space-y-3">
            {content.skills.backend.map((skill) => (
              <div key={skill.name} className="border-l-2 border-blue-500 pl-3">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  {skill.name}
                </p>
                {skill.frameworks.length > 0 && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {skill.frameworks.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Frontend Development
          </h3>
          <div className="space-y-3">
            {content.skills.frontend.map((skill) => (
              <div key={skill.name} className="border-l-2 border-green-500 pl-3">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            DevOps & Tools
          </h3>
          <div className="space-y-3">
            {content.skills.devops.map((skill) => (
              <div key={skill.name} className="border-l-2 border-purple-500 pl-3">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  {skill.name}
                </p>
                {skill.tools && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {skill.tools.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testing & Methodologies */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">
            Testing & Methodologies
          </h3>
          <div className="space-y-3">
            {content.skills.testing.map((skill) => (
              <div key={skill.name} className="border-l-2 border-orange-500 pl-3">
                <p className="font-medium text-neutral-900 dark:text-neutral-100">
                  {skill.name}
                </p>
              </div>
            ))}
            <div className="border-l-2 border-orange-500 pl-3 mt-3">
              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                Agile Methodologies
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {content.skills.methodologies.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* APIs */}
      <div className="mt-8 p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg">
        <h3 className="text-base font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
          API Design & Integration
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {content.skills.apis.join(" • ")}
        </p>
      </div>
    </section>
  );
}
