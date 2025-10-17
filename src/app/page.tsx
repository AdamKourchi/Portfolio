"use client"
import VantaRings from "@/app/components/VantaRings";
import AboutMe from "@/app/components/AboutMe";
import Projects from "@/app/components/Projects";
import "./globals.css";
import { Fira_Code } from 'next/font/google'
import Footer from "./components/Footer";

const fira = Fira_Code({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`${fira.className} dark:bg-black dark:text-white bg-white text-black`} >
      <VantaRings />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
}
