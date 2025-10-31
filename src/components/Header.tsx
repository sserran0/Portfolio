import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className=" text-center mb-[-15px]">
      <div className="flex items-center justify-between gap-10"></div>
      <strong className="font-heading  tracking-tight">
        {" "}
        Santiago Serrano-Guillen
      </strong>

      <nav aria-label="Main" className="italic space-x-16 mt-2 mb-5 text-center">
        <Link className="font-heading hover:underline" href="#skills">
          Skills
        </Link>
        <Link className="font-heading hover:underline" href="#projects">
          Projects
        </Link>
        <Link className="font-heading hover:underline" href="#contact">
          Contact
        </Link>
      </nav>
      <div className="flex justify-center mb-10">
        <Image
          src="/Profile.JPG"
          alt="Santiago-Serrano-Guillen"
          width={300}
          height={300}
          className="w-[300px] h-[300px] rounded-xl object-cover border-1 border-gray-900 shadow-lg transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>
    </header>
  );
}
