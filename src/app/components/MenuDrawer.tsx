"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { URLS } from "../../../constants/routes/urls";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "OUR STORY", href: "/about" },
  { label: "MENU", href: "/menu" },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT", href: "/contact" },
];

const socialLinks = [
  { label: "INSTAGRAM", href: "#" },
  { label: "YOUTUBE", href: "#" },
  { label: "LINKEDIN", href: "#" },
];

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  const pathname = usePathname();

  // Lock page scroll and allow closing with Escape while the drawer is open
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute inset-y-0 left-0 flex h-[100dvh] w-full flex-col bg-[#1d2002] text-[#f3ead8] font-instrument-regular transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top bar */}
        <div className="flex shrink-0 items-center justify-between gap-4 px-4 pt-4 sm:px-8 md:px-25 md:pt-6">
          <Link
            href="/reserve"
            onClick={onClose}
            className="shrink-0 rounded-full border border-[#f3ead8]/70 px-7.5 py-2 text-[13px] md:px-7.5 md:py-2.5 md:text-fluid-16 transition-colors hover:bg-[#f3ead8] hover:text-[#1d2002]"
          >
            RESERVE
          </Link>
          <p className="hidden truncate text-[16px] md:text-fluid-16 underline md:block">
            205 Swan St, Richmond
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="shrink-0 p-2 transition-opacity hover:opacity-70 cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="md:size-4.5"
            >
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" />
            </svg>
          </button>
        </div>

        {/* Emblem + nav */}
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-8 overflow-y-auto py-8 md:gap-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="80"
            viewBox="0 0 44 80"
            fill="none"
            className="shrink-0 animate-logo-crazy h-14 w-auto md:h-20"
          >
            <path
              d="M0 57.192V22.3515C0 10.0267 9.71669 0 21.6604 0C33.6041 0 43.3208 10.0267 43.3208 22.3515V57.192C43.3208 69.5167 33.6041 79.5434 21.6604 79.5434C9.71669 79.5434 0 69.5167 0 57.192ZM42.0084 22.3515C42.0084 10.7722 32.8817 1.35423 21.6604 1.35423C10.4391 1.35423 1.31235 10.7722 1.31235 22.3515V57.192C1.31235 68.7712 10.4391 78.1892 21.6604 78.1892C32.8817 78.1892 42.0084 68.7712 42.0084 57.192V22.3515Z"
              fill="#F4EDE2"
            />
            <path
              d="M19.3605 76.0758C16.3779 75.7886 13.5676 74.749 11.0556 73.0254C6.99257 70.2349 4.51369 66.0149 3.77798 60.9742C3.34715 58.0537 3.47309 55.0922 4.20217 52.2401C4.5866 50.7491 5.11684 49.3744 5.9122 48.0817C7.19141 46.0025 8.95447 44.3679 11.1285 43.3898C12.116 42.9453 13.1102 42.6443 14.2238 42.5486L14.1707 47.8355C12.5601 46.9464 10.174 48.027 8.76889 49.0187C5.48801 51.3442 4.26845 55.3863 4.99091 59.4011C5.65371 63.0944 8.01992 65.9534 11.1682 67.6154C13.0572 68.6139 15.0523 69.2021 17.16 69.4894C19.7847 69.845 22.4094 69.8997 25.0473 69.6877C28.3149 69.421 31.5892 68.4361 34.141 66.2269C36.2885 64.3666 37.5279 61.7334 37.8858 58.8334C38.2835 55.5915 37.8726 52.3085 36.7524 49.2718C35.7251 46.495 33.9421 44.0806 31.5229 42.5417C30.4227 41.8373 29.2628 41.3653 27.9703 41.2764C26.479 41.1807 25.1136 41.8509 24.2056 43.0889C22.807 44.9971 22.5618 47.685 22.3563 50.0925C22.3696 50.243 22.3298 50.1199 22.2901 50.0242C22.0846 48.1091 21.9587 46.9942 21.2826 45.1886C21.1766 44.915 21.0639 44.6415 20.9313 44.3747C20.8054 44.1217 20.6662 43.8754 20.5204 43.6292C20.3746 43.3967 20.2155 43.171 20.0498 42.959C19.8841 42.7469 19.7051 42.5417 19.5262 42.3502C19.3406 42.1587 19.1484 41.9809 18.9495 41.8099C18.7507 41.6389 18.5386 41.4816 18.3199 41.3311C18.1011 41.1807 17.8824 41.0439 17.6504 40.9139C17.4185 40.784 17.1799 40.6609 16.9412 40.5446C16.696 40.4352 16.4508 40.3257 16.1989 40.23C15.9404 40.1342 15.6819 40.0453 15.4234 39.9632C15.4234 39.9632 15.4168 39.9632 15.4102 39.9632C15.2246 39.9085 15.039 39.8675 14.8468 39.8333C14.3696 39.7512 13.8725 39.6349 13.435 39.505C8.82191 38.1302 5.99174 34.3001 4.67939 29.362C4.06961 27.0913 3.84426 24.7932 3.85751 22.4336C3.87077 18.5693 4.26182 14.8759 6.10442 11.4562C7.2113 9.40432 8.749 7.69445 10.6115 6.37443C14.6148 3.52235 19.2412 3.00941 23.967 3.46081C26.9496 3.74807 29.7599 4.78767 32.2719 6.51123C36.3349 9.30174 38.8137 13.5217 39.5495 18.5624C39.9803 21.4829 39.8543 24.4444 39.1253 27.2965C38.7408 28.7875 38.2106 30.1622 37.4152 31.4549C36.136 33.5341 34.373 35.1687 32.199 36.1468C31.2114 36.5914 30.2172 36.8923 29.1037 36.9881L29.1567 31.7011C30.7673 32.5902 33.1534 31.5096 34.5585 30.5179C37.8394 28.1925 39.059 24.1503 38.3365 20.1355C37.6737 16.4422 35.3075 13.5833 32.1592 11.9213C30.2702 10.9227 28.2752 10.3345 26.1675 10.0472C23.5428 9.69158 20.9181 9.63688 18.2801 9.84891C15.0125 10.1156 11.7382 11.1005 9.18645 13.3097C7.03897 15.17 5.79953 17.8032 5.44161 20.7032C5.04393 23.9451 5.45487 27.2281 6.57501 30.2648C7.60235 33.0416 9.38529 35.456 11.8045 36.9949C12.9048 37.6994 14.0647 38.1713 15.3571 38.2602C16.8484 38.3559 18.2138 37.6857 19.1219 36.4477C20.5204 34.5395 20.7656 31.8516 20.9711 29.4441C20.9578 29.2936 20.9976 29.4167 21.0374 29.5125C21.2428 31.4275 21.3688 32.5424 22.0448 34.348C23.1451 37.3027 25.4384 38.8758 28.1956 39.6555C28.3282 39.6965 28.4674 39.7307 28.6066 39.7649C28.7657 39.8059 28.9247 39.8401 29.0904 39.8812C30.2039 40.1206 31.2976 40.4899 32.2984 41.0576C35.513 42.8837 37.5809 46.1667 38.648 50.1746C39.2578 52.4453 39.4832 54.7434 39.4699 57.103C39.4567 60.9674 39.0656 64.6607 37.223 68.0804C36.1161 70.1323 34.5784 71.8422 32.716 73.1622C28.7126 76.0143 24.0863 76.5272 19.3605 76.0758Z"
              fill="#F4EDE2"
            />
          </svg>

          <nav className="w-full max-w-[300px] px-4 md:max-w-85">
            <ul className="flex flex-col">
              {navLinks.map((link, i) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href} className="flex flex-col items-center">
                    {i > 0 && (
                      <span className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a96a]/70 to-transparent" />
                    )}
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`group my-1.5 flex items-center justify-center gap-4 rounded-full border px-8 py-1.5 font-charman-serif-light text-[22px] leading-tight sm:text-[26px] md:px-12 md:text-fluid-28 transition-colors duration-300 ${
                        active
                          ? "border-[#c9a96a]"
                          : "border-transparent hover:border-[#c9a96a]/60"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`transition-all duration-300 ${
                          active
                            ? "w-auto opacity-100"
                            : "w-0 -translate-x-2 overflow-hidden opacity-0 group-hover:w-auto group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        &rarr;
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="grid shrink-0 grid-cols-2 items-center gap-y-4 bg-[#24280a] px-4 py-5 sm:grid-cols-3 sm:px-8 md:px-25 md:py-6">
          <ul className="flex flex-col text-[11px] md:text-fluid-11 leading-tight">
            {socialLinks.map((s, i) => (
              <li key={s.label}>
                <a href={s.href} className="hover:underline">
                  {s.label}
                  {i === 0 && " ↗"}
                </a>
              </li>
            ))}
          </ul>
          <Link
            href={URLS.HOME}
            className="order-first col-span-2 cursor-pointer justify-self-center sm:order-none sm:col-span-1"
            onClick={onClose}
          >
            <img
              src="/logo/sukoon.svg"
              alt="Sukoon"
              className="h-4 w-auto md:h-5"
            />
          </Link>
          <div className="flex flex-col items-end text-[11px] md:text-fluid-11 leading-tight">
            <a href="tel:0400000000" className="hover:underline">
              04 0000 000
            </a>
            <a href="mailto:email@domain.com.au" className="hover:underline">
              email@domain.com.au
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
