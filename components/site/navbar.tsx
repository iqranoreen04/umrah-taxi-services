"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass shadow-sm border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <nav className="container-mx container-px">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center shadow-lg shadow-emerald/20 transition-transform group-hover:scale-105">
                  <span className="text-white font-display font-bold text-lg">
                    S
                  </span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-gold border-2 border-background" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className={cn(
                    "font-display font-bold text-lg tracking-tight transition-colors",
                    scrolled ? "text-foreground" : "text-white"
                  )}
                >
                  Safwa Rihla
                </span>
                <span
                  className={cn(
                    "text-[10px] uppercase tracking-[0.15em] transition-colors",
                    scrolled ? "text-muted-foreground" : "text-white/70"
                  )}
                >
                  Umrah Transport
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                      scrolled
                        ? active
                          ? "text-emerald"
                          : "text-foreground/70 hover:text-foreground"
                        : active
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-emerald/10 -z-10"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className={cn(
                  "hidden sm:flex items-center justify-center w-10 h-10 rounded-full border transition-colors",
                  scrolled
                    ? "border-border text-foreground hover:bg-muted"
                    : "border-white/20 text-white hover:bg-white/10"
                )}
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden sm:flex items-center justify-center w-10 h-10 rounded-full transition-colors",
                  "bg-[#25D366] text-white hover:bg-[#1faa4f]"
                )}
                aria-label="WhatsApp us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <Link
                href="/booking"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald to-emerald-dark text-white text-sm font-semibold shadow-lg shadow-emerald/20 hover:shadow-xl hover:shadow-emerald/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Now
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
                  scrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-background shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald to-emerald-dark flex items-center justify-center">
                    <span className="text-white font-display font-bold">S</span>
                  </div>
                  <span className="font-display font-bold text-lg">Safwa Rihla</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col gap-1 px-3">
                  {siteConfig.nav.map((item, i) => {
                    const active = pathname === item.href;
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors",
                            active
                              ? "bg-emerald/10 text-emerald"
                              : "text-foreground/80 hover:bg-muted"
                          )}
                        >
                          {item.label}
                          <ChevronRight className="w-4 h-4 opacity-50" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <div className="p-5 border-t border-border space-y-3">
                <div className="flex gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white text-sm font-medium hover:bg-[#1faa4f] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
                <Link
                  href="/booking"
                  className="flex items-center justify-center px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald to-emerald-dark text-white text-sm font-semibold shadow-lg shadow-emerald/20"
                >
                  Book Your Ride
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
