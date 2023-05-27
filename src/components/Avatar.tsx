"use client";
import Image from "next/image";
import avatar from "/public/images/avatar-male.png";

const Avatar = () => {
  return <Image src={avatar} width={36} height={36} alt="Avatar" />;
};

export default Avatar;
