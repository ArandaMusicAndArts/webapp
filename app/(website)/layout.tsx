import { Navbar1 } from "@/components/navbar1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar1 />
      {children}
    </>
  );
}
