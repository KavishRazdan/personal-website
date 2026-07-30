import { personalInfo, socialMedia } from "../config/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#484848] bg-neutral-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]">
          {personalInfo.copyright}
        </p>
        <div className="flex gap-4 items-center">
          {socialMedia.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target={social.name !== "Phone" ? "_blank" : undefined}
                rel={
                  social.name !== "Phone"
                    ? "noopener noreferrer"
                    : undefined
                }
                title={social.name || "Social link"}
                aria-label={social.name || "Social link"}
                className="hover:opacity-80 transition-opacity p-1 flex items-center justify-center"
              >
                <Icon className="w-5 h-5 text-[#d3e97a]" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
