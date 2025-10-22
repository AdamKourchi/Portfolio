"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min.js";
import Image from "next/image";
import ModeToggle from "@/app/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { CircleAlert } from "lucide-react";

function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function VantaRings() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const { theme } = useTheme();
  const webGLSupported = isWebGLAvailable();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!vantaRef.current) return;

    // If WebGL isn’t supported :
    if (!isWebGLAvailable()) {
      vantaRef.current.classList.add("fallback-gradient");
      return;
    }

    try {
      if (vantaEffect) vantaEffect.destroy();

      const isDark = theme === "dark";
      const effect = RINGS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x202428,
        color: 0xff3f81,
        backgroundAlpha: isDark ? 1.0 : 0.4,
      });

      setVantaEffect(effect);
      return () => effect.destroy();
    } catch (err) {
      console.error("Vanta failed:", err);
    }
  }, [theme]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-[500px] transition-all duration-300 relative"
    >
      <div className="flex justify-between items-center h-1/6 p-5">
        <ModeToggle />

        <Image
          src="/images/logo-dark.png"
          alt="My Logo"
          width={40}
          height={50}
        />
      </div>

      <div className="flex-col justify-start text-white h-5/6 items-start ml-10 lg:ml-32 mt-20 gap-6">
        <h1 className="text-4xl lg:text-6xl font-semibold z-10">
          Adam Kourchi
        </h1>
        <p className="text-lg lg:text-xl mt-5 z-10">
          A Full-Stack Web Developer.
        </p>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="mt-5 cursor-none" asChild>
            <Button className="dark:text-white text-black" variant="outline">
              <Download />
              CV
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <a href="cv-english.pdf" download>
              <DropdownMenuItem>English</DropdownMenuItem>
            </a>
            <a href="cv-french.pdf" download>
              <DropdownMenuItem>Français</DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {!webGLSupported && (
        <div className="absolute bottom-0 text-center w-full mb-5">
          <p className="font-semibold flex justify-center items-center gap-2 ">
            <CircleAlert /> WebGL is disabled or unsupported.
          </p>
          <p>
            Activate WebGL in your browser settings to see the full 3D
            animation.
          </p>
        </div>
      )}
    </div>
  );
}
