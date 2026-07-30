import imgPotrait from "../assets/kavish-profile.png";
import svgPaths from "../imports/svg-34il4djopb";
import Navbar from "./Navbar";
import idr from "../assets/idr.png";
import screenr from "../assets/screenr_long.png";
import mm from "../assets/mm.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { personalInfo, socialMedia, socialLinks, projects } from "../config/portfolio";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

interface PortfolioProps {
  navigate: (path: string) => void;
}

export default function Portfolio({ navigate }: PortfolioProps) {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const currentRef = heroRef.current;
    if (currentRef) {
      gsap.from(currentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: currentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    const projectsCurrentRef = projectsRef.current;
    if (projectsCurrentRef) {
      gsap.from(projectsCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    const aboutCurrentRef = aboutRef.current;
    if (aboutCurrentRef) {
      gsap.from(aboutCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }

    const contactCurrentRef = contactRef.current;
    if (contactCurrentRef) {
      gsap.from(contactCurrentRef, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCurrentRef,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Md Kavish | Junior Frontend Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Md Kavish is a Junior Frontend Software Engineer specializing in React.js, TypeScript, JavaScript, and Tailwind CSS. Explore frontend web applications, personal projects, and interactive UI engineering."
        />
        <meta
          name="keywords"
          content="Md Kavish, Junior Frontend Software Engineer, Junior Frontend Developer, React Developer, TypeScript, JavaScript, Web Developer Portfolio, Indore India"
        />
        <link rel="canonical" href="https://kavish.netlify.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kavish.netlify.app/" />
        <meta
          property="og:title"
          content="Md Kavish | Junior Frontend Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Md Kavish is a Junior Frontend Software Engineer specializing in React.js, TypeScript, JavaScript, and responsive web application development."
        />
        <meta property="og:image" content="https://kavish.netlify.app/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kavish.netlify.app/" />
        <meta
          name="twitter:title"
          content="Md Kavish | Junior Frontend Software Engineer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Md Kavish is a Junior Frontend Software Engineer specializing in React.js, TypeScript, JavaScript, and responsive web application development."
        />
        <meta
          name="twitter:image"
          content="https://kavish.netlify.app/og-image.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Md Kavish",
            givenName: "Md Kavish",
            jobTitle: "Junior Frontend Software Engineer",
            description:
              "Junior Frontend Software Engineer focused on building responsive, interactive, and user-centric web applications using React.js, TypeScript, and modern frontend technologies.",
            url: "https://kavish.netlify.app/",
            email: "mailto:razdankavish67@gmail.com",
            sameAs: [
              "https://www.linkedin.com/in/kavish-razdan/",
              "https://github.com/KavishRazdan/",
            ],
            alumniOf: {
              "@type": "EducationalOrganization",
              name: "Dr. A.P.J. Abdul Kalam University, Indore",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Indore",
              addressRegion: "Madhya Pradesh",
              addressCountry: "India",
            },
            knowsAbout: [
              "React.js",
              "TypeScript",
              "JavaScript (ES6+)",
              "Frontend Software Engineering",
              "Tailwind CSS",
              "HTML5 & CSS3",
              "State Management (Zustand, Context API)",
              "Web Performance Optimization",
            ],
          })}
        </script>
      </Helmet>
      <div className="bg-neutral-950 min-h-screen">
        {/* Navigation */}
        <Navbar navigate={navigate} currentPage="home" />

        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-[80px] lg:text-[101px] leading-[0.9] text-white">
                    HI, I AM
                    <br />
                    {personalInfo.name.toUpperCase()}.
                  </h1>
                  <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[540px]">
                    Junior Frontend Software Engineer / React.js & TypeScript Specialist
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 items-center flex-wrap">
                  <a
                    href="#contact"
                    className="bg-[#d3e97a] rounded-full flex items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors"
                  >
                    <span className="font-['Manrope',sans-serif] font-bold text-[16px] text-neutral-950 uppercase">
                      Let's Connect
                    </span>
                    <div className="size-[42px] bg-neutral-950 rounded-full flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path d={svgPaths.p23c4ec40} fill="white" />
                      </svg>
                    </div>
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222222] size-[42px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d={svgPaths.p282a2240} fill="#D3E97A" />
                      <path d={svgPaths.p31d7ad00} fill="#D3E97A" />
                    </svg>
                  </a>

                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#222222] size-[42px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors"
                  >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path
                        clipRule="evenodd"
                        d={svgPaths.p17e6c000}
                        fill="#D3E97A"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="bg-[#c7c7c7] rounded-[16px] w-full max-w-[600px] mx-auto aspect-[6/7] relative overflow-hidden">
                  <ImageWithFallback
                    src={imgPotrait}
                    alt="Md Kavish - Junior Frontend Software Engineer"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-[#484848]" />
        </div>

        {/* Featured Projects Section */}
        <section ref={projectsRef} id="work" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4 mb-16">
              <h2 className="text-[76px] text-white leading-none">
                Featured Projects
              </h2>
              <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]">
                Here are some of the selected projects that showcase my passion
                for front-end development.
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-20">
              {projects
                .filter((project) => project.type.includes("featured"))
                .map((project, index) => (
                  <div
                    key={project.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden">
                        <ImageWithFallback
                          src={project.src}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-contain p-12"
                        />
                        <div className="absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full">
                          <span className="font-['Manrope',sans-serif] text-white text-[14px]">
                            {project.type.includes("notable")
                              ? "Professional"
                              : "Personal Project"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`space-y-8 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="space-y-4">
                        <h3 className="font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]">
                          {project.title}
                        </h3>
                        <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <p className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase">
                          Project Info
                        </p>
                        <div className="border-t border-b border-[#484848] divide-y divide-[#484848]">
                          {project.client && (
                            <div className="flex justify-between py-4">
                              <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                                Client
                              </span>
                              <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                                {project.client}
                              </span>
                            </div>
                          )}
                          {project.year && (
                            <div className="flex justify-between py-4">
                              <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                                Year
                              </span>
                              <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                                {project.year}
                              </span>
                            </div>
                          )}
                          {project.role && (
                            <div className="flex justify-between py-4">
                              <span className="font-['Manrope',sans-serif] text-white text-[16px]">
                                Role
                              </span>
                              <span className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]">
                                {project.role}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {project.url && project.url !== "#" && (
                        <div className="flex gap-6 flex-wrap">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex flex-col gap-1"
                          >
                            <div className="flex items-center gap-1">
                              <span className="font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                                Live Demo
                              </span>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path d={svgPaths.p3589c00} fill="#D3E97A" />
                              </svg>
                            </div>
                            <div className="h-[2px] w-full bg-[#d3e97a]" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* All Projects Button */}
        <section className="py-12 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <button
              onClick={() => navigate("/projects")}
              className="inline-flex flex-col gap-1 cursor-pointer border-0 bg-transparent p-0"
            >
              <span className="font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                All Projects
              </span>
              <div className="h-[2px] w-full bg-[#d3e97a]" />
            </button>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-[#484848]" />
        </div>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-[76px] lg:text-[101px] text-white leading-[0.9] mb-8">
                  About me
                </h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]">
                    I am Frontend Developer, with deep expertise in React.js
                  </p>
                  <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]">
                    When I’m not coding, you’ll find me playing cricket,
                    practicing photography, or spending quality time with my
                    family. Always learning, always curious.
                  </p>
                </div>

                <button
                  onClick={() => navigate("/about")}
                  className="inline-flex flex-col gap-1 cursor-pointer border-0 bg-transparent p-0"
                >
                  <span className="font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase">
                    More about me
                  </span>
                  <div className="h-[2px] w-full bg-[#d3e97a]" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-[#484848]" />
        </div>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Contact Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[76px] text-white leading-none">
                    Let's connect
                  </h2>
                  <div className="space-y-2">
                    {/* <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px]">
                      Say hello at{" "}
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-white border-b border-[#d3e97a]"
                      >
                        {personalInfo.email}
                      </a>
                    </p> */}
                    <p className="font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px]">
                      For more info, here's my{" "}
                      <button
                        onClick={() => navigate("/resume")}
                        className="text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors cursor-pointer bg-transparent border-0 border-b-[1px] p-0 font-['Manrope',sans-serif] text-[18px]"
                      >
                        resume
                      </button>
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
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
                        <Icon className="w-8 h-8 text-[#d3e97a]" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="space-y-8">
                <ContactForm
                  labelSize="text-[16px]"
                  inputSize="text-[18px]"
                  textareaRows={5}
                  buttonPadding="px-10 py-4"
                  buttonTextSize="text-[16px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}