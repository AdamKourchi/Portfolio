import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="w-full">
      <article className="px-32">
        <h2 className="py-10 text-2xl">About Me :</h2>
        <p className="text-center">
          I'm Adam Kourchi, a full-stack developer with a fervent
          enthusiasm for embracing new challenges and technologies.My true
          growth is driven by my passion for self-directed learning and hands-on
          experience.
        </p>
      </article>
      <div className="mx-50  flex justify-center gap-8">
        {/* Github */}
        <a
          href="https://github.com/AdamKourchi"
          target="_blank"
          className="cursor-none group flex flex-col items-center hover:translate-y-1 transition-all duration-300"
        >
          <Image
            className="block dark:hiddden m-4 p-0 "
            src="/svgs/github.svg"
            alt="Github Logo"
            width={40}
            height={50}
          />
          <Image
            className="hidden dark:block m-4 p-0"
            src="/svgs/light/github.svg"
            alt="Github Logo"
            width={40}
            height={50}
          />
          <p className="opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Github
          </p>
        </a>
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/adam-kourchi-34a3381b7/"
          target="_blank"
          className="cursor-none group flex flex-col items-center hover:translate-y-1 transition-all duration-300"
        >
          <Image
            className="block dark:hiddden m-4 p-0 "
            src="/svgs/linkedin.svg"
            alt="Linkedin Logo"
            width={40}
            height={50}
          />
          <Image
            className="hidden dark:block m-4 p-0"
            src="/svgs/light/linkedin.svg"
            alt="Linkedin Logo"
            width={40}
            height={50}
          />
          <p className="opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Linkedin
          </p>
        </a>
        {/* Gmail */}
        <a
          href="mailto:9orachiadam@gmail.com"
          target="_blank"
          className=" cursor-none group flex flex-col items-center hover:translate-y-1 transition-all duration-300"
        >
          <Image
            className="block dark:hiddden m-4 p-0 "
            src="/svgs/gmail.svg"
            alt="Gmail Logo"
            width={40}
            height={50}
          />
          <Image
            className="hidden dark:block m-4 p-0"
            src="/svgs/light/gmail.svg"
            alt="Gmail Logo"
            width={40}
            height={50}
          />
          <p className="opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Gmail
          </p>
        </a>
      </div>

      <div className="mx-50 my-5">
        <Separator className="dark:bg-white bg-black" />
      </div>
    </section>
  );
}
