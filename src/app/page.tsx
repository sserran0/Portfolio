import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

import { projects } from "@/data/projects";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <>
      <Header />
      <h2 className="text-xl text-left font-semibold font-heading leading-tight mb-2 ml-10 mt-15">
        About
      </h2>
      <main className="bg-[#111319]/90 border border-[#242736] rounded-4xl shadow-[0_10px_25px_rgba(0,0,0,.25)] p-6 w-220 mx-auto">
        <p className="font-body text-[#9ca3af] ">
          3rd Year Computer Science @ Colorado State University
        </p>
        <p className="font-body text-[#9ca3af] ">
          Studying Abroad Fall '25 @ Korea University
        </p>
        <p className="font body text-[#9ca3af] mt-2">
          Aspring software engineer designing intimate and purposeful software
          for a variety of applications.
        </p>
        <p className="font-body text-[#9ca3af] mt-2">
          Currently Located In:{" "}
          <a
            href="https://maps.apple.com/?address=145%20Anam-ro%0ASeongbuk-gu%0ASeoul%2002854%0ASouth%20Korea&auid=3940087605630917629&ll=37.589483,127.032316&lsp=9902&q=Korea%20University"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 underline decoration-gray-800 underline-offset-3 hover:decoration-blue-300 hover:text-blue-300 transition-colors duration-colors"
          >
            Seoul, South Korea
          </a>{" "}
        </p>
      </main>

      <section id="skills" className="mt-2">
        <h2 className="text-xl text-left font-semibold font-heading mb-2 ml-10 mt-15">
          Skills
        </h2>
        <main className="bg-[#111319]/90 border border-[#242736] rounded-4xl shadow-[0_10px_25px_rgba(0,0,0,.25)] p-6 w-220 mx-auto">
          <p className="border border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
            Python
          </p>
          <p className="ml-3 border border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
            Java
          </p>
          <p className="ml-3 border border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
            React
          </p>
          <p className="ml-3 border border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
            Next.js
          </p>
          <p className="ml-3 border border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
            HTML
          </p>
          <p className="ml-3 border border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
            C
          </p>
          <p className="ml-3 border border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
            TailwindCSS
          </p>
        </main>
      </section>

      <section id="projects" className="mt-2">
        <h2 className="text-xl text-left font-semibold font-heading mb-2 ml-10 mt-15">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grib-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <h2 className="text-xl text-left font-semibold font-heading leading-tight mb-2 mt-10 ml-10">
        Contact
      </h2>
      <section
        id="contact"
        className="mt-3 bg-[#111319]/60 border border-[#242736] rounded-2xl p-5  w-220 mx-auto"
      >
        <p>
          <a
            className="text-[#9ca3af] group inline-flex items-center underline decoration-gray-800 underline-offset-3 hover:decoration-gray-100 hover:text-gray-100 transition-colors transition duration-300"
            href="mailto:santiagoserrano192@gmail.com"
            target="_blank"
            rel="noopener no referrer"
          >
            <span>Email: santiagoserrano192@gmail.com</span>
            <ChevronRight className="ml-2 h-4 w-4 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </p>
        <p>
          <a
            className="text-[#9ca3af] group inline-flex items-center underline decoration-gray-800 underline-offset-3 hover:decoration-gray-100 hover:text-gray-100 transition-colors transition duration-300 ease-in-out"
            href="https://github.com/sserran0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>GitHub: https://github.com/sserran0 </span>
            <ChevronRight className="font-bold ml-2 h-4 w-4 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </p>
        <p>
          <a
            className="text-[#9ca3af] group inline-flex items-center underline decoration-gray-800 underline-offset-3 hover:decoration-gray-100 hover:text-gray-100 transition-colors transition duration-300 ease-in-out"
            href="https://www.linkedin.com/in/santiago-serrano-guillen-a8188a22b/"
            target="_blank"
            rel="noopener norefferer"
          >
            <span>LinkedIn: SantiagoSGuillen</span>
            <ChevronRight className="ml-2 h-4 w-4 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </p>
        <p>
          <a
            className="text-[#9ca3af] group inline-flex underline decoration-gray-800 underline-offset-3 items-center hover:decoration-gray-100 hover:text-gray-100 transition-colors transition duration-300 ease-in-out"
            href="https://www.instagram.com/its.s_nti/"
            target="_blank"
            rel="noopener norefferer"
          >
            <span>Instagram: its.s_nti</span>
            <ChevronRight className="ml-2 h-4 w-4 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </p>
      </section>
      <Footer />
    </>
  );
}
