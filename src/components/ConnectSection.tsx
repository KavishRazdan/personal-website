import { forwardRef } from "react";
import { personalInfo, socialMedia } from "../config/portfolio";
import ContactForm from "./ContactForm";

interface ConnectSectionProps {
  navigate?: (path: string) => void;
}

const ConnectSection = forwardRef<HTMLElement, ConnectSectionProps>(
  ({ navigate }, ref) => {
    return (
      <section className="py-20 px-6" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-[64px] lg:text-[76px] text-white leading-[0.9]">
                  LET'S CONNECT
                </h2>
                <div className="space-y-2">
                  {/* <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                    Say hello at{" "}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#d3e97a] hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </p> */}
                </div>

                {/* My Resume Button */}
                <button
                  onClick={() => navigate && navigate("/resume")}
                  className="bg-[#d3e97a] rounded-full px-8 py-3 font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors inline-block"
                >
                  My Resume
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
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
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Icon className="w-4 h-4 text-[#d3e97a]" />
                    </a>
                  );
                })}
              </div>

              <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px] pt-8">
                {personalInfo.copyright}
              </p>
            </div>

            {/* Right - Contact Form */}
            <div className="space-y-6">
              <ContactForm
                labelSize="text-[14px]"
                inputSize="text-[16px]"
                textareaRows={4}
                buttonPadding="px-10 py-3"
                buttonTextSize="text-[14px]"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ConnectSection.displayName = "ConnectSection";

export default ConnectSection;
