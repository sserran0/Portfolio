type Props = { title: string; blurb: string; href?: string};

export default function ProjectCard({title, blurb, href}: Props){
    return (
        <article className= "bg-[#111319]/60 border border-[#242736] rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,.25)] p-5">
            <h2 className="text-m font-semibold  mb-1">{title}</h2>
            <p className = "text-s  text-[#9ca3af] mb-1">{blurb}</p>

            {href && (
                <a className="font-semibold hover:underline" href={href} target= "_blank" rel="noreferrer">
                Visit →
                </a> 
         )}
        </article>
    );
}