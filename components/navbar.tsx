"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";
import { NavbarAuth } from "./navbar-auth";
import { DialogTitle } from "./ui/dialog";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/tutors", label: "Our Tutors" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="mx-auto flex h-16 container items-center justify-left px-4 sm:px-6 lg:px-8 gap-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-foreground">
          AMA
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                pathname === link.href && "font-bold text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="grow"></div>

        <div className="flex items-center gap-4">
          {/* Login Button Slot */}
          <NavbarAuth />

          <Drawer open={open} onOpenChange={setOpen} direction="right">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <div className="flex flex-col gap-4 p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg text-muted-foreground transition-colors hover:text-foreground",
                      pathname === link.href && "font-bold text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
