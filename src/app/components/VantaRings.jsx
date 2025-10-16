"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import RINGS from "vanta/dist/vanta.rings.min.js";
import Image from "next/image";
import ModeToggle from "@/app/components/ModeToggle.tsx";

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

        <ModeToggle></ModeToggle >

        <Image
          src="/images/logo-white.png"
          alt="My Logo"
          width={40}
          height={50}
        />
      </div>

      <div className="flex-col justify-start text-white h-5/6  items-start ml-32 mt-20 gap-6">
        <h1 className="text-6xl font-semibold z-10">Adam Kourchi</h1>
        <p className="text-xl mt-5 z-10">A Full-Stack Web Developer.</p>
      </div>
    </div>
  );
}
