"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-4 sm:px-2 md:px-10 xl:px-20 mx-auto max-w-screen-2xl">
      {children}
    </div>
  );
};

export default Container;
