import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className=" text-left ml-[40px] mb-[-10px] ">
      <div className=" justify-between gap-10 "></div>
      <strong className="font-heading tracking-tight text-5xl">
        {" "}
        Santiago Serrano-Guillen
      </strong>
    </header>
  );
}
