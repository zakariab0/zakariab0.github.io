import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

type SocialLinkProps = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  hoverClass?: string; // brand hover color
};

function SocialLink({ href, label, Icon, hoverClass }: SocialLinkProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
          hoverClass ?? ""
        }`}
        title={label}
      >
        <Icon className="text-[18px] opacity-90 transition-colors" />
        <span className="font-medium">{label}</span>
      </a>
    </li>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-wrap gap-3">
        <SocialLink
          href="https://github.com/zakariab0"
          label="GitHub"
          Icon={FaGithub}
          hoverClass="hover:text-neutral-900 dark:hover:text-white"
        />
        <SocialLink
          href="https://linkedin.com/in/zakariabounou"
          label="LinkedIn"
          Icon={FaLinkedin}
          hoverClass="hover:text-[#0A66C2]"
        />
      </ul>

      <p className="mt-8 cursor-default text-left text-neutral-600 dark:text-neutral-300">
        © {year} Zakaria Bounou. Built with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
