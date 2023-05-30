import { getCurrentUser } from "@/actions/";
import { LoginModal, RegisterModal } from "@/components/modals";
import { NavigationBar } from "@/components/navigation";
import { ToasterProvider } from "@/providers";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Dominion",
  description: "Full Stack Online Marketplace",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <NavigationBar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
