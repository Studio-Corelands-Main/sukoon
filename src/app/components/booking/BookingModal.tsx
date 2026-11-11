"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// Any element with this attribute opens the booking modal when clicked
export const BOOKING_ATTR = "data-booking";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  // Open from any [data-booking] element, anywhere on the site
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as Element | null)?.closest(`[${BOOKING_ATTR}]`);
      if (!trigger) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Lock page scroll and close with Escape while open
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* The widget script expects jQuery and loads it over http (blocked on
          https), so provide it first. The widget div stays mounted so the
          script finds it on load and the iframe is ready before opening. */}
      <Script
        src="https://code.jquery.com/jquery-1.12.4.min.js"
        strategy="afterInteractive"
      />
      <Script src="https://ecbookings.com/iframe.js" strategy="lazyOnload" />

      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60"
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a table"
          className="relative flex max-h-[90dvh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-[#F4EDE2]"
        >
          <div className="flex shrink-0 items-center justify-between px-5 py-4 text-[#481904] font-instrument-regular">
            <p className="text-sm md:text-base">RESERVE A TABLE</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close booking"
              className="cursor-pointer p-2 transition-opacity hover:opacity-70"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" />
              </svg>
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div
              className="eatclub-widget"
              {...{
                account: "sukoonindianrestaurant.com.au",
                "hide-header": "false",
                "min-height": "450",
                "add-height": "50",
                scrolltop: "true",
                "widget-type": "booking",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
