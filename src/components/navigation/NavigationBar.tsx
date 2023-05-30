"use client";
import { Container } from "@/components/";
import { Logo, Search, UserMenu } from "@/components/navigation";
import { User } from "@prisma/client";

interface NavigationBarProps {
  currentUser: User | null;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row justify-between items-center gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavigationBar;
