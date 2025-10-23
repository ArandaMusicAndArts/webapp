import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Aranda Music and Arts Program", template: "%s | AMA" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <div className="grow"></div>
      <Footer />
    </div>
  );
}
