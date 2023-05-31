"use client";
import Image from "next/image";
import avatar from "/public/images/avatar-male.png";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || avatar}
      width={36}
      height={36}
      alt="Avatar"
      className="rounded-full"
    />
  );
};

export default Avatar;
