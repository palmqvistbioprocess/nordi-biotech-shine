import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import logoAsset from "@/assets/logo-transparent.png.asset.json";
import { assetUrl } from "@/lib/asset-url";

export function SiteNav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isContact = location.pathname === "/contact";

  const linkBase = "hover:text-foreground transition-colors";
  const activeClass = "text-foreground";

  const navLinks = [
    { to: "/", hash: "about" as const, label: "About" },
    { to: "/", hash: "services" as const, label: "Services" },
    { to: "/cv", label: "CV" },
    { to: "/publications", label: "Publications" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={assetUrl(logoAsset.url)} alt="PalmQvist" className="h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className={linkBase}
              activeProps={{ className: activeClass }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {!isContact && (
            <Link
              to="/contact"
              className="hidden md:inline-flex text-sm px-4 py-2 rounded-full border border-foreground/80 text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Get in touch
            </Link>
          )}

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-sm text-foreground hover:bg-secondary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:max-w-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Menu
                  </span>
                  <SheetClose asChild>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-sm text-foreground hover:bg-secondary transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-1 mt-6">
                  {navLinks.map((item) => {
                    const isActive =
                      location.pathname === item.to &&
                      (!item.hash || location.hash === `#${item.hash}`);
                    return (
                      <SheetClose asChild key={item.label}>
                        <Link
                          to={item.to}
                          hash={item.hash}
                          className={`px-3 py-3 text-lg rounded-sm ${
                            isActive
                              ? "text-foreground bg-secondary/50"
                              : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                          } transition-colors`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-foreground text-background text-sm uppercase tracking-[0.2em] hover:bg-accent transition-colors"
                    >
                      Get in touch
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
