"use client";
// import Button from "@/app/components/Button";
// import { H2, Text } from "@/app/components/Typography/Heading";
// import { useElementHeight } from "@/hooks/useElementHeight";
// import { type CSSProperties, useEffect, useState } from "react";
// import TasteOfSorrelRepeated from "./TasteOfSorrelRepeated";
const dishes = [
  {
    name: "Butter Chicken",
    image: "/images/1.png",
  },
  {
    name: "Paneer Tikka",
    image: "/images/2.png",
  },
  {
    name: "Dal Makhani",
    image: "/images/3.png",
  },
  {
    name: "Biryani",
    image: "/images/gallery.png",
  },
];
// const TasteOfSorrel = () => {
//   const [activeDish, setActiveDish] = useState(dishes[0].name);
//   // Dishes stick below the fixed nav (86px) plus the pinned section header
//   const [headerRef, headerHeight] = useElementHeight<HTMLDivElement>();
//   useEffect(() => {
//     const dishNames =
//       document.querySelectorAll<HTMLElement>("[data-dish-name]");
//     const visibleDishes = new Set<string>();

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const element = entry.target as HTMLElement;
//           const dishName = element.dataset.dishName;
//           if (!dishName) return;

//           if (entry.isIntersecting) {
//             visibleDishes.add(dishName);
//           } else {
//             visibleDishes.delete(dishName);
//           }
//         });

//         // Images stack in order, so the last one in the band is on top
//         const topDish = dishes.findLast((dish) => visibleDishes.has(dish.name));

//         if (topDish) {
//           setActiveDish(topDish.name);
//         }
//       },
//       {
//         threshold: 0,
//         // Thin band at mid-viewport, below the pinned header
//         rootMargin: "-50% 0px -49% 0px",
//       },
//     );

//     dishNames.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);
//   return (
//     <section
//       className="relative bg-[#481904] "
//       style={{ "--dish-header-h": `${86 + headerHeight}px` } as CSSProperties}
//     >
//       {/* Sticky on the outer wrapper so the whole section is its scroll range */}
//       <div
//         ref={headerRef}
//         className="container-px px-8 bg-[#481904] sticky top-21.5 z-30"
//       >
//         <div>
//           <div className="flex w-full flex-col items-start justify-between gap-8 pb-8 md:flex-row lg:px-0">
//             <div className="md:w-1/2">
//               <H2 className="text-[36px]! text-[#DDB789] md:w-1/2">
//                 A Taste of Sukoon
//               </H2>
//             </div>

//             <div className="flex justify-end md:w-1/2">
//               <Text className="pt-8 text-[#EBD2B1] md:ml-30 md:pt-0">
//                 Rooted in the flavours of India and guided by a contemporary
//                 hand, our menu brings together comfort, character and thoughtful
//                 detail.
//               </Text>
//             </div>
//           </div>

//           <div className="lg:pb-15">
//             <div className="h-[0.75px] bg-[#DDB789]" />
//           </div>

//           <Text className="my-10 block text-[#EBD2B1] lg:hidden lg:max-w-162.5">
//             Good food tastes even better when it’s shared. Reserve your table at
//             Sukoon and settle in for soulful Indian flavours, warm hospitality
//             and moments made to be savoured.
//           </Text>
//         </div>
//       </div>
//       <div className="flex  container-px   ">
//         <div className="w-1/2 ">
//           <div className="sticky top-(--dish-header-h)">
//             <div className="pointer-events-auto flex flex-col justify-start lg:w-1/2 pl-8 lg:pl-0 ">
//               <H2 className="text-[#DDB789]">{activeDish}</H2>

//               <Text className=" text-[#EBD2B1] my-10 lg:max-w-162.5 hidden lg:block">
//                 Good food tastes even better when it’s shared. Reserve your
//                 table at Sukoon and settle in for soulful Indian flavours, warm
//                 hospitality and moments made to be savoured.
//               </Text>
//               <div className="hidden lg:block">
//                 <Button
//                   className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-[#481904] w-fit"
//                   color="#DDB789"
//                   label="VIEW MENU"
//                   href="/gallery"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-1/2 ">
//           {dishes.map((dish) => (
//             <div
//               key={dish.name}
//               className="bg-[#481904] pb-10 sticky top-(--dish-header-h) z-20"
//             >
//               <img
//                 src={dish.image}
//                 alt={dish.name}
//                 data-dish-name={dish.name}
//                 className="w-full h-full lg:h-162.5 object-cover mb-5"
//               />

//               <p className="text-[20px] md:text-fluid-20 font-instrument-regular text-[#DDB789] leading-6 mb-10">
//                 {dish.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="  lg:hidden flex justify-center">
//         <Button
//           className="text-[#DDB789] cursor-pointer mt-7.5 bg-transparent hover:bg-[#DDB789] hover:text-[#481904] w-fit  mx-auto"
//           color="#DDB789"
//           label="VIEW MENU"
//           href="/gallery"
//         />
//       </div>
//       {/* <TabsVertical /> */}
//       {/* <DishGallery
//         header={
//           <>
//             <div className="flex flex-col justify-between pt-20 pb-10 md:pt-0 md:flex-row md:items-center">
//               <H2 className="text-[#DDB789] md:w-1/2 text-[36px]!">
//                 A Taste of Sukoon
//               </H2>

//               <Text className="pt-8 text-[#EBD2B1] md:pt-0  md:ml-30 md:w-1/2">
//                 Rooted in the flavours of India and guided by a contemporary
//                 hand, our menu brings together comfort, character and thoughtful
//                 detail.
//               </Text>
//             </div>

//             <div className="mb-10 h-px bg-[#DDB789]" />
//           </>
//         }
//       /> */}

//       <TasteOfSorrelRepeated content="Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured.Good food tastes even better when it’s shared. Reserve your table at Sukoon and settle in for soulful Indian flavours, warm hospitality and moments made to be savoured." />
//     </section>
//   );
// };

// export default TasteOfSorrel;

import Button from "@/app/components/Button";
import { H2, Text } from "@/app/components/Typography/Heading";
import { useElementHeight } from "@/hooks/useElementHeight";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

// Matches the outer sticky offset (top-21.5 = 86px)
const NAV_OFFSET = 86;

export function TasteOfSukoon() {
  const [headerRef, headerHeight] = useElementHeight<HTMLDivElement>();
  const [activeDish, setActiveDish] = useState(dishes[0]?.name ?? "");
  const columnRef = useRef<HTMLDivElement>(null);
  const dishRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const stickyOffset = NAV_OFFSET + headerHeight;
  const stickyOffsetMobile = NAV_OFFSET + headerHeight + 80;

  // Active dish = the last card that has slid at least halfway over the previous one
  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      let current = dishes[0]?.name ?? "";
      for (const dish of dishes) {
        const node = dishRefs.current.get(dish.name);
        if (!node) continue;
        const { top, height } = node.getBoundingClientRect();
        if (top <= stickyOffset + height / 2) current = dish.name;
      }
      setActiveDish(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [stickyOffset]);

  const setDishRef = useCallback(
    (name: string) => (node: HTMLDivElement | null) => {
      if (node) dishRefs.current.set(name, node);
      else dishRefs.current.delete(name);
    },
    [],
  );

  return (
    <>
      <section
        className="relative bg-[#481904]"
        style={{ "--dish-header-h": `${stickyOffset}px` } as CSSProperties}
      >
        {/* Cover strip: hides content scrolling above the sticky header */}
        <div
          aria-hidden
          className="pointer-events-none sticky top-0 z-40 h-21.5 bg-[#481904]"
        />

        {/* Header */}
        <div
          ref={headerRef}
          className="container-px sticky top-21.5 z-30 bg-[#481904] px-8"
        >
          <div className="flex w-full flex-col items-start justify-between gap-8 pb-8 lg:flex-row lg:px-0">
            <div className="lg:w-1/2">
              <H2 className="text-[36px]! text-[#DDB789] lg:w-1/2">
                A Taste of Sukoon
              </H2>
            </div>
            <div className="flex justify-end lg:w-1/2">
              <Text className="  text-[#EBD2B1] lg:ml-30 lg:pt-0">
                Rooted in the flavours of India and guided by a contemporary
                hand, our menu brings together comfort, character and thoughtful
                detail.
              </Text>
            </div>
          </div>

          <div className="lg:pb-15">
            <div className="h-[0.75px] bg-[#DDB789]" />
          </div>

          <Text className="my-10 block text-[#EBD2B1] lg:hidden">
            Good food tastes even better when it’s shared. Reserve your table at
            Sukoon and settle in for soulful Indian flavours, warm hospitality
            and moments made to be savoured.
          </Text>
        </div>

        {/* Body */}
        <div className="container-px flex items-start lg:gap-8 gap-3">
          {/* LEFT: sticky */}
          <div className="sticky top-(--dish-header-h) z-10 w-[30%] lg:w-1/2 self-start pl-8 pt-8 md:pl-0 lg:pt-0">
            <div className="flex flex-col justify-start ">
              <H2
                key={activeDish}
                className="text-[#DDB789] animate-in fade-in duration-300"
              >
                {activeDish}
              </H2>

              <Text className="my-10 hidden text-[#EBD2B1] lg:block lg:max-w-162.5">
                Good food tastes even better when it’s shared. Reserve your
                table at Sukoon and settle in for soulful Indian flavours, warm
                hospitality and moments made to be savoured.
              </Text>

              <div className="hidden lg:block">
                <Button
                  className="mt-7.5 w-fit cursor-pointer bg-transparent text-[#DDB789] hover:bg-[#DDB789] hover:text-[#481904]"
                  color="#DDB789"
                  label="VIEW MENU"
                  href="/gallery"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: stacking cards */}
          <div ref={columnRef} className="w-[70%] lg:w-1/2 min-w-0">
            {dishes.map((dish, index) => (
              <div
                key={dish.name}
                ref={setDishRef(dish.name)}
                data-dish-name={dish.name}
                className="sticky top-(--dish-header-h) bg-[#481904] pt-8 lg:pt-0"
                style={{ zIndex: 20 + index }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="mb-5 w-full object-cover h-[calc(100svh-var(--dish-header-h)-100px)] lg:max-h-162.5"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-start lg:hidden bg-[#481904] container-px px-8 md:px-0">
        <Button
          className="  mt-7.5 w-fit cursor-pointer bg-transparent text-[#DDB789] hover:bg-[#DDB789] hover:text-[#481904]"
          color="#DDB789"
          label="VIEW MENU"
          href="/gallery"
        />
      </div>
    </>
  );
}
