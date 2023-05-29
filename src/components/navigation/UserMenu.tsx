"use client";
import { Avatar } from "@/components";
import { MenuItem } from "@/components/navigation";
import { useRegisterModal } from "@/hooks";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();

  const handleToggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full cursor-pointer transition hover:bg-neutral-100 "
        >
          Become a host
        </div>
        <div
          onClick={handleToggleOpen}
          className="p-4 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer transition hover:shadow-md md:py-1 md:px-2 h"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] bg-white overflow-hidden right-0 top-12 text-sm md:w-3/4">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={registerModal.onOpen} label="Sign Up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
