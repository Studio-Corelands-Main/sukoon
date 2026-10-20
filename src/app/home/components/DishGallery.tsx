"use client";

import { H2, Text } from "@/app/components/Typography/Heading";
import { useElementHeight } from "@/hooks/useElementHeight";
import { type CSSProperties, type ReactNode, useEffect, useState } from "react";

const dishes = [
  {
    name: "Butter Chicken",
    image: "/images/gallery.png",
  },
  {
    name: "Paneer Tikka",
    image: "/images/gallery.png",
  },
  {
    name: "Dal Makhani",
    image: "/images/gallery.png",
  },
  {
    name: "Biryani",
    image: "/images/gallery.png",
  },
];

const DishGallery = ({ header }: { header: ReactNode }) => {
  const [activeDish, setActiveDish] = useState(dishes[0].name);
  // Images start below the pinned header, so track its height
  const [headerRef, headerHeight] = useElementHeight<HTMLDivElement>();

  useEffect(() => {
    const dishNames =
      document.querySelectorAll<HTMLElement>("[data-dish-name]");
    const visibleDishes = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const dishName = element.dataset.dishName;
          if (!dishName) return;

          if (entry.isIntersecting) {
            visibleDishes.add(dishName);
          } else {
            visibleDishes.delete(dishName);
          }
        });

        // Images stack in order, so the last one in the band is on top
        const topDish = dishes.findLast((dish) => visibleDishes.has(dish.name));

        if (topDish) {
          setActiveDish(topDish.name);
        }
      },
      {
        threshold: 0,
        // Thin band at mid-viewport, below the pinned header
        rootMargin: "-50% 0px -49% 0px",
      },
    );

    dishNames.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="relative"
      style={{ "--dish-header-h": `${headerHeight}px` } as CSSProperties}
    >
      {/* PINNED FRAME — pulled up into the previous section's bottom padding so
          its background can cover the area behind the fixed site header */}
      <div className="lg:pointer-events-none lg:sticky lg:top-0 lg:z-10 lg:-mt-30 lg:h-screen">
        <div
          ref={headerRef}
          className="pointer-events-auto flow-root bg-[#481904] md:pt-30"
        >
          {header}
        </div>

        {/* LEFT CONTENT */}
        <div className="pointer-events-auto flex flex-col justify-start lg:w-1/2">
          <H2 className="text-[#DDB789]  ">{activeDish}</H2>

          <Text className=" text-[#EBD2B1] my-10 md:max-w-162.5 md:w-162.5">
            Good food tastes even better when it’s shared. Reserve your table at
            Sukoon and settle in for soulful Indian flavours, warm hospitality
            and moments made to be savoured.
          </Text>

          <button className="border border-[#DDB789] rounded-full w-fit">
            <p className="text-[16px] md:text-fluid-16 py-2.5 px-7.5 text-[#DDB789] font-instrument-regular">
              VIEW MENU
            </p>
          </button>
        </div>
      </div>

      {/* RIGHT DISHES — each sticks below the pinned frame so the next one stacks over it */}
      <div className="mt-20 lg:mt-[-100vh] md:ml-auto lg:w-1/2 lg:pt-(--dish-header-h)">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="bg-[#481904] pb-10 md:sticky md:top-(--dish-header-h)"
          >
            <img
              src={dish.image}
              alt={dish.name}
              data-dish-name={dish.name}
              className="w-full h-[650px] md:h-162.5 object-cover mb-5"
            />

            <p className="text-[20px] md:text-fluid-20 font-instrument-regular text-[#DDB789] leading-6 mb-10">
              {dish.name}
            </p>
          </div>
        ))}
        <div className="hidden md:block h-[180px] md:h-45"></div>
      </div>
    </div>
  );
};

export default DishGallery;
