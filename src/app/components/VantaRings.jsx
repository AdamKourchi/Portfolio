"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min.js";
import Image from "next/image";
import ModeToggle from "@/app/components/ModeToggle.tsx";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function VantaRings() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
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
          backgroundAlpha: 1.0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="w-full h-[500px]">
      <div className="flex justify-between items-center h-1/6 p-5">
        <ModeToggle></ModeToggle>

        <Image
          src="/images/logo-white.png"
          alt="My Logo"
          width={40}
          height={50}
        />
      </div>

      <div className="flex-col justify-start text-white h-5/6  items-start ml-10 lg:ml-32 mt-20 gap-6">
        <h1 className="text-4xl lg:text-6xl font-semibold z-10">Adam Kourchi</h1>
        <p className="text-lg lg:text-xl mt-5 z-10">A Full-Stack Web Developer.</p>

        <DropdownMenu modal={false}>
          <DropdownMenu>
            <DropdownMenuTrigger className="mt-5 cursor-none"  asChild>
              <Button variant="outline">
                <Download />
                CV
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="cursor-none">
                <a className="cursor-none" href="cv-english.pdf" download>
                  English
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-none"> 
                <a className="cursor-none" href="cv-french.pdf" download>
                  Français
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DropdownMenu>
      </div>
    </div>
  );
}
