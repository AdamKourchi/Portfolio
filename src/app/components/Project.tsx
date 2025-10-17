import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

type Technology = {
  name: string;
  svg: string;
  lightSvg: string;
};

type Hosting = {
  name: string;
  svg: string;
  lightSvg: string;
};

type ProjectProps = {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: Technology[];
  hosting: Hosting[];
  githubUrl: string;
  cardImage: string;
};

export default function Project({
  title,
  description,
  longDescription,
  images,
  technologies,
  hosting,
  githubUrl,
  cardImage
}: ProjectProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="max-w-sm dark:hover:border-white hover:border-black hover:scale-105 transition-all duration-300 group">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardAction>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Image
              src={cardImage}
              alt={`${title} Project Image`}
              width={500}
              height={500}
              className="w-full rounded"
            />
          </CardContent>
          <CardFooter><p className="opacity-0 transition-all duration-300 group-hover:opacity-100 text-center w-full animate-bounce">Click!</p></CardFooter>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-[500px] lg:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Carousel
            className="hidden lg:block lg:h-[300px] lg:w-[400px]"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <Image
                    src={img}
                    alt={`${title} Project Image ${idx + 1}`}
                    width={500}
                    height={500}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div>
            <p>{longDescription}</p>
            <Separator className="my-2" />
            Technologies used :
            <div className="flex gap-5 my-2">
              {technologies.map((tech) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger tabIndex={-1} className="cursor-none">
                    <Image
                      src={tech.lightSvg}
                      alt={`${tech.name} Logo`}
                      width={30}
                      height={30}
                      className="hidden dark:block"
                    />
                    <Image
                      src={tech.svg}
                      alt={`${tech.name} Logo`}
                      width={30}
                      height={30}
                      className="block dark:hidden"
                    />
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
            <Separator className="my-2" />
            Hosted in :
            <div className="flex gap-5 my-2">
              {hosting.map((host) => (
                <Tooltip key={host.name}>
                  <TooltipTrigger tabIndex={-1} className="cursor-none">
                    <Image
                      src={host.lightSvg}
                      alt={`${host.name} Logo`}
                      width={30}
                      height={30}
                      className="hidden dark:block"
                    />
                    <Image
                      src={host.svg}
                      alt={`${host.name} Logo`}
                      width={30}
                      height={30}
                      className="block dark:hidden"
                    />
                  </TooltipTrigger>
                  <TooltipContent>{host.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="cursor-none" variant="outline">
              Close
            </Button>
          </DialogClose>
          <Button
            className="cursor-none"
            type="button"
            rel="noopener noreferrer"
            asChild
          >
            <Link href={githubUrl} target="_blank">
              View it in Github
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
