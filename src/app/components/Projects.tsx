import Project from "@/app/components/Project";
import { projects } from "@/app/data";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  return (
    <section>
      <article className="pl-32">
        <h2 className="py-10 text-2xl">My Work :</h2>
      </article>
      <div className="flex flex-col items-center">
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pb-20">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </article>
      </div>
      <p className="dark:text-white text-black text-center mb-5">
        You can find the rest of my work at my {" "}
        <a
          target="_blank"
          href="https://github.com/AdamKourchi"
          className="cursor-none text-blue-600 hover:underline"
        >
          Github
        </a>
        .
      </p>
      <div >
        <Separator className="dark:bg-white bg-black" />
      </div>
    </section>
  );
}
