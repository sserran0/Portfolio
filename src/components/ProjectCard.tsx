import { ArrowRight, ChevronRight } from "lucide-react";
type Props = { title: string; blurb: string; href?: string; tags?: string[] };

export default function ProjectCard({ title, blurb, href, tags }: Props) {
  return (
    <article className="w-full font-body max-w-[900px] mx-auto bg-[#111319]/40 border border-dashed border-[#242736] rounded-2xl shadow-md p-6">
      <h2 className="text-m font-extralight underline font-bold mb-3">
        {title}
      </h2>
      <p className="text-s text-[#9ca3af] mb-2">{blurb}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="border border-dashed border-[#242736] font-alt text-[#9ca3af] px-2 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      {href && (
        <a
          className=" text-xs text-[#9ca3af] underline decoration-gray-800 underline-offset-3  group inline-flex items-center  hover:decoration-gray-50 hover:text-gray-100 underline-offset-3  transition-colors transition duration-300 ease-in-out"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub Repo
          <ChevronRight className="ml-2 h-4 w-4 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </a>
      )}
    </article>
  );
}
