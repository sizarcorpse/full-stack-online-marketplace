"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title="button"
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg w-full transition ${
        outline
          ? "bg-white border-black text-back"
          : "bg-rose-500 border-rose-500 text-white"
      } ${
        small
          ? "py-1 px-2 text-sm font-light border-[1px]"
          : "py-2 px-4 text-base font-semibold border-2"
      } flex flex-row items-center justify-center gap-2`}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
