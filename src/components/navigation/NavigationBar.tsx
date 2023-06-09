"use client";
import { Container } from "@/components/";
import { Categories, Logo, Search, UserMenu } from "@/components/navigation";
import { SafeUser } from "@/types/";

interface NavigationBarProps {
  currentUser: SafeUser | null;
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
      <Categories />
    </div>
  );
};

export default NavigationBar;
