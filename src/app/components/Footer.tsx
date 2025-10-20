import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect } from "react";



export default function Footer() {
  const year = new Date().getFullYear();
    const { theme } = useTheme();

  
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-5 my-5">
      <p className="text-center dark:text-white text-black">
        © {year} Adam Kourchi. All rights reserved.
      </p>

      {
        theme == "dark" && 
      <Image
        src="/images/logo-dark.png"
        alt="My Logo"
        width={70}
        height={70}
      />
      }

           {
        theme == "light" && 
      <Image
        src="/images/logo-light.png"
        alt="My Logo"
        width={70}
        height={70}
      />
      }
      
    </footer>
  );
}
