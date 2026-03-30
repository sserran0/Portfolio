import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

import { projects } from "@/data/projects";
import { ArrowRight, ChevronRight, MapPin, GraduationCap, PlaneTakeoff, Lightbulb} from "lucide-react";

export default function Page() {
  return (
    <>
      <Header />
      <h2 className="text-2xl font-semibold font-heading mb-2 mt-10 ml-10">
        About
      </h2>
      <main className="w-full max-w-[900px] mx-auto bg-[#111319]/40 border border-dashed border-[#242736] rounded-2xl shadow-md p-6">
        <p className="font-body text-[#9ca3af] mt-2 flex items-center">
          <GraduationCap className = "h-5 w-5 mr-3 text-[#9ca3af]"/>
                3rd Year Computer Science @ Colorado State University
        </p>
        <p className="font-body text-[#9ca3af]  mt-2 flex items-center">
          <PlaneTakeoff className = "h-5 w-5 mr-3 text-[#9ca3af]"/>
          Studied Abroad Fall '25 @ Korea University
        </p>
        <p className="font-body text-[#9ca3af] mt-2 flex items-center">
          <Lightbulb className = "h-5 w-5 mr-3 text-[#9ca3af]"/>
          Aspiring software engineer designing intimate and purposeful software
          for a variety of applications.
        </p>
        <p className="font-body text-[#9ca3af] mt-2 flex items-center">
          <MapPin className = "h-5 w-5 mr-3 text-[#9ca3af]" />
          Currently Located In: {"  "}
          <a
            href="https://earth.google.com/web/@40.57364074,-105.07487185,1520.7741588a,15826.96130505d,35y,0h,0t,0r/data=CkMaPRI3CiUweDg3Njk0YTMzZWNkNjliYTk6MHg0NWQyNTI1MDBhM2UyZjExKg5Db2xvcmFkbyBTdGF0ZRgCIAFCAggBOgMKATBCAggASg0I____________ARAA://earth.google.com/web/search/coloro+state+university/@40.5729432,-105.0848391,1531.91823568a,623.51682505d,35y,0h,0t,0r/data=CogBGloSVAolMHg4NzY5NGEzM2VjZDY5YmE5OjB4NDVkMjUyNTAwYTNlMmYxMRmYO-kzVklEQCED-_kAbkVawCoZY29sb3JhZG8gc3RhdGUgdW5pdmVyc2l0eRgCIAEiJgokCQWTR4Z2OkRAEUUbk4uCOURAGStt9wNnbw3AISjSXkculA3AQgIIAToDCgEwQgIIAEoNCP___________wEQAA"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-gray-400 underline decoration-gray-800 underline-offset-3 hover:decoration-blue-300 hover:text-blue-300 transition-colors duration-colors"
          >
              Fort Collins, Colorado
          </a>
        </p>
      </main>

      <section id="skills" className="mt-2">
        <h2 className="text-2xl font-semibold font-heading mb-2 mt-10 ml-10">
          Skills
        </h2>
        <main className="w-full max-w-[900px] mx-auto bg-[#111319]/40 border border-dashed border-[#242736] rounded-2xl shadow-md p-6">
          <p className="border border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
            Python
          </p>
          <p className="ml-3 border border-style-dashed border-[#242736] font-alt text-[#9ca3af] px-2 rounded-md inline-block">
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
        <h2 className="text-2xl font-semibold font-heading mb-2 mt-10 ml-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grib-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <h2 className="text-2xl font-semibold font-heading mb-2 mt-10 ml-10">
        Contact
      </h2>
      <section
        id="contact"
        className="w-full font-body max-w-[900px] mx-auto bg-[#111319]/40 border border-dashed border-[#242736] rounded-2xl shadow-md p-6"
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
      </section>
      <Footer />
    </>
  );
}
