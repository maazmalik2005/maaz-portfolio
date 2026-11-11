"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export type NavigationLink = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  links: NavigationLink[];
  activeSection: string;
  contactHref: string;
  onClose: () => void;
};

export function MobileMenu({
  isOpen,
  links,
  activeSection,
  contactHref,
  onClose,
}: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex min-h-full flex-col px-6 py-5 sm:px-8">
        <div className="flex items-center justify-between">
          <span className="font-heading text-lg font-semibold text-foreground">
            Menu
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-accent/50 hover:text-foreground"
            aria-label="Close navigation menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 items-center" aria-label="Mobile navigation">
          <ul className="w-full space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  aria-current={
                    activeSection === link.href.replace("/#", "")
                      ? "location"
                      : undefined
                  }
                  className={`block rounded-xl px-4 py-3 font-heading text-2xl font-medium transition-colors hover:bg-white/[0.04] hover:text-foreground focus-visible:text-foreground sm:text-3xl ${
                    activeSection === link.href.replace("/#", "")
                      ? "bg-accent/10 text-foreground"
                      : "text-text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href={contactHref} onClick={onClose} className="w-full">
          Hire Me
        </Button>
      </div>
    </div>
  );
}
