import Project from "@/app/components/Project";
import { projects } from "@/app/data";

export default function Projects() {
  return (
    <section>
      <article className="pl-32">
        <h2 className="py-10 text-2xl">My Work :</h2>
      </article>
      <article className="grid grid-cols-3   gap-10 px-10 pb-20">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </article>
      <p className="dark:text-white text-white text-center pb-20">
        You can find the rest of my work at my {" "}
        <a
          target="_blank"
          href="https://github.com/AdamKourchi"
          className="cursor-none text-grey hover:underline"
        >
           Github
        </a>
        .
      </p>
    </section>
  );
}
