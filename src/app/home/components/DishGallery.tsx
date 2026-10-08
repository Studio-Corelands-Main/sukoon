// "use client";

// import { useEffect, useState } from "react";

// const dishes = [
//   {
//     name: "Butter Chicken",
//     image: "/images/gallery.png",
//   },
//   {
//     name: "Paneer Tikka",
//     image: "/images/gallery.png",
//   },
//   {
//     name: "Dal Makhani",
//     image: "/images/gallery.png",
//   },
//   {
//     name: "Biryani",
//     image: "/images/gallery.png",
//   },
// ];

// const DishGallery = () => {
//   const [activeDish, setActiveDish] = useState(dishes[0].name);

//   useEffect(() => {
//     const dishElements = document.querySelectorAll<HTMLElement>("[data-dish]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           const element = entry.target as HTMLElement;
//           const dishName = element.dataset.dish;

//           if (dishName) {
//             setActiveDish(dishName);
//           }
//         });
//       },
//       {
//         threshold: 0,
//         rootMargin: "-40% 0px -40% 0px",
//       },
//     );

//     dishElements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="flex justify-between relative">
//       {/* LEFT CONTENT */}
//       <div className="w-1/2 sticky top-10 h-screen flex flex-col justify-start">
//         <h1 className="text-[64px] font-charman-serif-light text-[#DDB789] leading-none">
//           {activeDish}
//         </h1>

//         <p className="text-[20px] font-instrument-regular text-[#EBD2B1] leading-6 my-10 w-[650px]">
//           Good food tastes even better when it’s shared. Reserve your table at
//           Sukoon and settle in for soulful Indian flavours, warm hospitality and
//           moments made to be savoured.
//         </p>

//         <button className="border border-[#DDB789] rounded-full w-fit">
//           <p className="text-[16px] py-2.5 px-7.5 text-[#DDB789] font-instrument-regular">
//             VIEW MENU
//           </p>
//         </button>
//       </div>

//       {/* RIGHT DISHES */}
//       <div className="w-1/2">
//         {dishes.map((dish) => (
//           <div key={dish.name} data-dish={dish.name} className="mb-10">
//             <img
//               src={dish.image}
//               alt={dish.name}
//               className="w-full h-[650px] object-cover mb-5"
//             />

//             <p className="text-[20px] font-instrument-regular text-[#DDB789] leading-6 mb-10">
//               {dish.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DishGallery;

"use client";

import { useEffect, useState } from "react";

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

const DishGallery = () => {
  const [activeDish, setActiveDish] = useState(dishes[0].name);

  useEffect(() => {
    const dishNames =
      document.querySelectorAll<HTMLElement>("[data-dish-name]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          const dishName = element.dataset.dishName;

          if (dishName) {
            setActiveDish(dishName);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-10px 0px -90% 0px",
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
    <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between relative">
      {/* LEFT CONTENT */}
      <div className="lg:w-1/2 lg:sticky top-10 h-auto lg:h-screen flex flex-col justify-start">
        <h1 className=" text-[28px] lg:text-[64px] font-charman-serif-light text-[#DDB789] leading-none">
          {activeDish}
        </h1>

        <p className="text-[20px] font-instrument-regular text-[#EBD2B1] leading-6 my-10 lg:w-[650px]">
          Good food tastes even better when it’s shared. Reserve your table at
          Sukoon and settle in for soulful Indian flavours, warm hospitality and
          moments made to be savoured.
        </p>

        <button className="border border-[#DDB789] rounded-full w-fit">
          <p className="text-[16px] py-2.5 px-7.5 text-[#DDB789] font-instrument-regular">
            VIEW MENU
          </p>
        </button>
      </div>

      {/* RIGHT DISHES */}
      <div className="lg:w-1/2">
        {dishes.map((dish) => (
          <div key={dish.name} className="mb-10">
            <img
              src={dish.image}
              alt={dish.name}
              data-dish-name={dish.name}
              className="w-full h-[650px] object-cover mb-5"
            />

            <p className="text-[20px] font-instrument-regular text-[#DDB789] leading-6 mb-10">
              {dish.name}
            </p>
          </div>
        ))}
        <div className="hidden lg:block h-[180px]"></div>
      </div>
    </div>
  );
};

export default DishGallery;
