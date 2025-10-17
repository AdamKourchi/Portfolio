import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-5 my-5">
      <p className="text-center dark:text-white text-black">
        © {year} Adam Kourchi. All rights reserved.
      </p>
      
      <Image
        src="/images/logo-white.png"
        alt="My Logo"
        width={70}
        height={70}
      />
    </footer>
  );
}
