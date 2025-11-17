import content from "../../data/content.json";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa6";

export default function Achievements() {
  const iconMap = {
    Innovation: FaTrophy,
    Entrepreneurship: FaAward,
    "Technical Competition": FaMedal,
  };

  return (
    <section id="achievements" className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-neutral-100">
        Awards & Achievements
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {content.achievements.map((achievement) => {
          const Icon = iconMap[achievement.category as keyof typeof iconMap];
          return (
            <div
              key={achievement.id}
              className={`p-6 rounded-lg border ${
                achievement.featured
                  ? "border-yellow-500 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-900/10"
                  : "border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                {Icon && (
                  <Icon className="text-2xl text-yellow-600 dark:text-yellow-500 mt-1" />
                )}
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {achievement.title}
                  </h3>
                  <span className="text-xs text-neutral-600 dark:text-neutral-400">
                    {achievement.date}
                  </span>
                </div>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {achievement.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
