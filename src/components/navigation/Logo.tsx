"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "/public/images/logo.svg";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      src={logo}
      alt="Dominion Logo"
      width={36}
      height={36}
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
