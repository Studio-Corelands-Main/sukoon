"use client";

import { useEffect, useRef, useState } from "react";

const EMBLEM_WIDTH = 390;
const EMBLEM_HEIGHT = 715;
const MIN_DURATION = 1500; // ms – keeps the loader from flashing on fast loads

function EmblemPaths({ fill }: { fill: string }) {
  return (
    <>
      <path
        d="M0 514.035V200.893C0 90.1192 87.3326 0 194.681 0C302.03 0 389.363 90.1192 389.363 200.893V514.035C389.363 624.809 302.03 714.928 194.681 714.928C87.3326 714.928 0 624.809 0 514.035ZM377.568 200.893C377.568 96.8197 295.537 12.1717 194.681 12.1717C93.826 12.1717 11.7953 96.8197 11.7953 200.893V514.035C11.7953 618.109 93.826 702.757 194.681 702.757C295.537 702.757 377.568 618.109 377.568 514.035V200.893Z"
        fill={fill}
      />
      <path
        d="M174.01 683.762C147.203 681.18 121.944 671.836 99.3662 656.345C62.8485 631.264 40.5686 593.335 33.9561 548.03C30.0839 521.781 31.2158 495.163 37.7687 469.529C41.2239 456.128 45.9896 443.772 53.1383 432.154C64.6357 413.466 80.4819 398.774 100.021 389.983C108.898 385.988 117.834 383.283 127.842 382.422L127.365 429.941C112.889 421.949 91.4431 431.662 78.8139 440.575C49.3257 461.476 38.3644 497.807 44.8578 533.891C50.815 567.086 72.0822 592.782 100.379 607.72C117.357 616.695 135.288 621.982 154.232 624.563C177.823 627.76 201.413 628.252 225.123 626.346C254.492 623.949 283.92 615.097 306.856 595.241C326.157 578.52 337.297 554.853 340.514 528.789C344.088 499.651 340.395 470.144 330.327 442.85C321.093 417.892 305.068 396.192 283.325 382.361C273.436 376.029 263.011 371.787 251.394 370.988C237.99 370.128 225.718 376.152 217.557 387.279C204.987 404.429 202.783 428.588 200.937 450.227C201.056 451.579 200.698 450.473 200.341 449.612C198.494 432.4 197.362 422.379 191.286 406.151C190.333 403.692 189.32 401.233 188.129 398.835C186.997 396.561 185.746 394.348 184.435 392.135C183.124 390.045 181.695 388.016 180.205 386.111C178.716 384.205 177.108 382.361 175.499 380.64C173.831 378.918 172.104 377.32 170.317 375.783C168.529 374.246 166.623 372.833 164.657 371.48C162.691 370.128 160.725 368.898 158.64 367.73C156.555 366.562 154.411 365.456 152.266 364.411C150.062 363.427 147.858 362.444 145.594 361.583C143.271 360.722 140.947 359.923 138.624 359.186C138.624 359.186 138.565 359.186 138.505 359.186C136.837 358.694 135.169 358.325 133.441 358.018C129.152 357.28 124.684 356.235 120.753 355.067C79.2904 342.711 53.8531 308.286 42.0579 263.903C36.5772 243.494 34.5518 222.839 34.6709 201.631C34.7901 166.899 38.3048 133.703 54.8659 102.967C64.8144 84.5251 78.6351 69.157 95.3749 57.2927C131.356 31.6586 172.938 27.0482 215.413 31.1054C242.22 33.6873 267.479 43.0311 290.056 58.5222C326.574 83.6031 348.854 121.532 355.466 166.837C359.339 193.086 358.207 219.704 351.654 245.338C348.199 258.739 343.433 271.095 336.284 282.713C324.787 301.401 308.941 316.093 289.401 324.884C280.525 328.879 271.589 331.584 261.581 332.445L262.057 284.926C276.533 292.918 297.979 283.205 310.609 274.292C340.097 253.391 351.058 217.06 344.565 180.976C338.608 147.781 317.34 122.085 289.044 107.147C272.066 98.1722 254.134 92.8854 235.19 90.3036C211.6 87.107 188.009 86.6153 164.3 88.521C134.931 90.9184 105.502 99.7705 82.5669 119.626C63.2655 136.347 52.1255 160.014 48.9087 186.078C45.3343 215.216 49.0278 244.723 59.0955 272.017C68.3291 296.975 84.354 318.675 106.098 332.506C115.987 338.838 126.412 343.08 138.028 343.879C151.432 344.739 163.704 338.715 171.865 327.588C184.435 310.438 186.639 286.279 188.486 264.64C188.367 263.288 188.724 264.395 189.082 265.255C190.928 282.468 192.06 292.487 198.137 308.716C208.026 335.273 228.638 349.411 253.42 356.419C254.611 356.788 255.862 357.095 257.113 357.403C258.543 357.772 259.972 358.079 261.462 358.448C271.47 360.599 281.299 363.919 290.295 369.021C319.187 385.434 337.774 414.941 347.365 450.964C352.845 471.373 354.871 492.028 354.752 513.236C354.632 547.968 351.118 581.164 334.557 611.9C324.608 630.342 310.787 645.71 294.048 657.574C258.066 683.208 216.485 687.819 174.01 683.762Z"
        fill={fill}
      />
    </>
  );
}

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);
  const target = useRef(0);

  // Track real page progress: images loaded so far, then 100% on window load
  useEffect(() => {
    const start = performance.now();
    const images = Array.from(document.images);
    let loaded = images.filter((img) => img.complete).length;

    const update = () => {
      const ratio = images.length ? loaded / images.length : 1;
      target.current = Math.max(target.current, Math.round(ratio * 90));
    };
    const onImage = () => {
      loaded += 1;
      update();
    };
    const pending = images.filter((img) => !img.complete);
    pending.forEach((img) => {
      img.addEventListener("load", onImage, { once: true });
      img.addEventListener("error", onImage, { once: true });
    });
    update();

    let finishTimer: ReturnType<typeof setTimeout>;
    const finish = () => {
      const wait = Math.max(0, MIN_DURATION - (performance.now() - start));
      finishTimer = setTimeout(() => (target.current = 100), wait);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(finishTimer);
      window.removeEventListener("load", finish);
      pending.forEach((img) => {
        img.removeEventListener("load", onImage);
        img.removeEventListener("error", onImage);
      });
      document.body.style.overflow = "";
    };
  }, []);

  // Ease the displayed percent toward the target
  useEffect(() => {
    let frame: number;
    const tick = () => {
      setPercent((p) => {
        if (p >= 100) return 100;
        const step = Math.max(0.4, (target.current - p) * 0.08);
        return Math.min(target.current, p + step);
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Once complete, slide the loader away and unmount it
  useEffect(() => {
    if (percent < 100) return;
    const hide = setTimeout(() => setHiding(true), 400);
    const remove = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 1400);
    return () => {
      clearTimeout(hide);
      clearTimeout(remove);
    };
  }, [percent]);

  if (done) return null;

  const fillHeight = (EMBLEM_HEIGHT * percent) / 100;

  return (
    <div
      aria-busy={!hiding}
      aria-label="Loading"
      className={`fixed inset-0 z-[200] flex flex-col justify-between overflow-hidden bg-[#252500] py-10 text-[#F4EDE2] transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]  px-7.5 md:px-container-25 md:py-15 ${
        hiding ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Emblem – fills from the bottom up as loading progresses */}
      <svg
        viewBox={`0 0 ${EMBLEM_WIDTH} ${EMBLEM_HEIGHT}`}
        fill="none"
        className="pointer-events-none absolute right-6 top-1/2 h-[60vh] w-auto -translate-y-1/2 md:right-[calc(var(--spacing)*15+max(0px,(100%-2560px)/2))] md:top-15 md:h-[80vh] md:translate-y-0"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="preloader-fill">
            <rect
              x="0"
              y={EMBLEM_HEIGHT - fillHeight}
              width={EMBLEM_WIDTH}
              height={fillHeight}
            />
          </clipPath>
        </defs>
        <g opacity="0.2">
          <EmblemPaths fill="#474806" />
        </g>
        <g clipPath="url(#preloader-fill)">
          <EmblemPaths fill="#F4EDE2" />
        </g>
      </svg>

      <img
        src="/logo/sukoon.svg"
        alt="Sukoon"
        className="relative h-auto w-[200px] md:w-76.25"
      />

      <div className="relative flex items-end justify-between font-instrument-regular">
        <p className="max-w-[250px] text-[16px] leading-[1.2] md:max-w-62.5 md:text-fluid-16 font-instrument-regular">
          Stay until the early hours with cocktails, craft beers, bar food &amp;
          London&apos;s finest hi-fi sound
        </p>
        <p className="font-charman-serif-light text-[22px] md:text-fluid-22 tabular-nums">
          {Math.round(percent)}%
        </p>
      </div>
    </div>
  );
}
