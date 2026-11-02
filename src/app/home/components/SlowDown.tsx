"use client";

import Button from "@/app/components/Button";
import { H2, Text } from "@/app/components/Typography/Heading";
import { motion } from "framer-motion";
import { URLS } from "../../../../constants/routes/urls";

const SlowDown = () => {
  // const sectionRef = useRef<HTMLElement>(null);

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"],
  // });

  // const y = useTransform(scrollYProgress, [0, 0.5, 1], [450, 0, 100]);

  // const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-30.95, 0, -0]);

  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"],
  // });

  // const yRaw = useTransform(scrollYProgress, [0, 0.5, 1], [450, 0, 100]);

  // const rotateRaw = useTransform(scrollYProgress, [0, 0.5, 1], [-30.95, 0, -0]);

  // const ySpring = useSpring(yRaw, {
  //   stiffness: 120,
  //   damping: 25,
  //   mass: 0.5,
  // });

  // // Offsets above are 1920-design px; output them as rem so they scale with the fluid root font size
  // const y = useTransform(ySpring, (value) => `${value / 16}rem`);

  // const rotate = useSpring(rotateRaw, {
  //   stiffness: 120,
  //   damping: 25,
  //   mass: 0.5,
  // });
  return (
    <section
      // ref={sectionRef}
      className="bg-center bg-cover bg-no-repeat md:bg-fixed w-full h-full text-white flex flex-col justify-center items-center md:px-container-7.5  py-26 md:py-43 overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-image.png')" }}
    >
      <motion.div
        style={{
          // y,
          // rotate,
          transformOrigin: "center center",
        }}
        className="bg-[url('/images/mobile-slow.png')] md:bg-[url('/images/mobile-pop.png')] lg:bg-[url('/images/slow.png')] bg-top md:bg-center bg-no-repeat bg-cover md:bg-contain h-120 w-100 md:h-175 md:w-175 lg:h-175 lg:w-262.5 px-0 md:px-7.5 my-auto relative"
      >
        <div className="absolute top-0  bottom-0  left-0 right-0  my-auto flex items-center justify-center ">
          <div className="flex flex-col items-center justify-between md:py-20">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="75"
                viewBox="0 0 43 75"
                fill="none"
                className="md:w-10.75 md:h-18.75"
              >
                <path
                  d="M0 53.8304V21.0378C0 9.43739 9.43738 0 21.0378 0C32.6381 0 42.0755 9.43739 42.0755 21.0378V53.8304C42.0755 65.4308 32.6381 74.8682 21.0378 74.8682C9.43738 74.8682 0 65.4308 0 53.8304ZM40.8009 21.0378C40.8009 10.1391 31.9364 1.27463 21.0378 1.27463C10.1391 1.27463 1.27463 10.1391 1.27463 21.0378V53.8304C1.27463 64.7291 10.1391 73.5935 21.0378 73.5935C31.9364 73.5935 40.8009 64.7291 40.8009 53.8304V21.0378Z"
                  fill="#7A2F08"
                />
                <path
                  d="M18.8039 71.6044C15.9071 71.334 13.1776 70.3555 10.7378 68.7332C6.79157 66.1067 4.38394 62.1348 3.66938 57.3904C3.25094 54.6415 3.37326 51.8541 4.08138 49.1697C4.45476 47.7663 4.96975 46.4723 5.74225 45.2557C6.98469 43.2987 8.69707 41.7601 10.8086 40.8395C11.7678 40.4211 12.7334 40.1378 13.8149 40.0477L13.7634 45.0239C12.1991 44.187 9.88157 45.2042 8.51682 46.1376C5.33026 48.3263 4.14575 52.1309 4.84744 55.9097C5.49119 59.386 7.78938 62.0769 10.8472 63.6412C12.6819 64.581 14.6196 65.1347 16.6667 65.405C19.2159 65.7398 21.7652 65.7913 24.3273 65.5917C27.501 65.3407 30.6811 64.4137 33.1596 62.3344C35.2453 60.5834 36.4491 58.1049 36.7968 55.3754C37.183 52.324 36.7839 49.234 35.6959 46.3758C34.6981 43.7622 32.9664 41.4897 30.6168 40.0413C29.5481 39.3782 28.4216 38.934 27.1663 38.8503C25.7178 38.7602 24.3917 39.3911 23.5098 40.5563C22.1514 42.3523 21.9133 44.8823 21.7137 47.1483C21.7266 47.2899 21.6879 47.174 21.6493 47.0839C21.4498 45.2814 21.3274 44.2321 20.6708 42.5326C20.5678 42.2751 20.4584 42.0176 20.3296 41.7665C20.2073 41.5283 20.0721 41.2966 19.9305 41.0648C19.7889 40.846 19.6344 40.6335 19.4734 40.434C19.3125 40.2344 19.1387 40.0413 18.9649 39.861C18.7846 39.6808 18.5979 39.5134 18.4048 39.3525C18.2117 39.1915 18.0057 39.0435 17.7933 38.9018C17.5808 38.7602 17.3684 38.6315 17.1431 38.5092C16.9178 38.3868 16.686 38.271 16.4543 38.1615C16.2161 38.0585 15.9779 37.9555 15.7333 37.8654C15.4822 37.7753 15.2311 37.6916 14.9801 37.6143C14.9801 37.6143 14.9736 37.6143 14.9672 37.6143C14.7869 37.5628 14.6067 37.5242 14.42 37.492C13.9565 37.4148 13.4737 37.3053 13.0488 37.183C8.56832 35.8891 5.8195 32.2841 4.54488 27.6362C3.95263 25.499 3.73375 23.336 3.74663 21.115C3.7595 17.4778 4.13931 14.0016 5.92894 10.7828C7.004 8.85157 8.49751 7.2422 10.3064 5.99976C14.1947 3.31532 18.6881 2.83252 23.278 3.2574C26.1749 3.52777 28.9044 4.50627 31.3442 6.12852C35.2904 8.75502 37.698 12.727 38.4126 17.4714C38.831 20.2202 38.7087 23.0076 38.0006 25.6921C37.6272 27.0955 37.1122 28.3894 36.3397 29.6061C35.0973 31.5631 33.3849 33.1016 31.2734 34.0222C30.3142 34.4406 29.3486 34.7239 28.2671 34.814L28.3186 29.8378C29.8829 30.6747 32.2004 29.6576 33.5651 28.7242C36.7517 26.5354 37.9362 22.7308 37.2345 18.952C36.5908 15.4758 34.2926 12.7849 31.2348 11.2206C29.4001 10.2807 27.4624 9.72707 25.4153 9.4567C22.866 9.12195 20.3168 9.07046 17.7546 9.27002C14.5809 9.52109 11.4008 10.4481 8.92238 12.5274C6.83663 14.2784 5.63281 16.7568 5.28519 19.4863C4.89894 22.5377 5.29806 25.6277 6.386 28.486C7.38381 31.0996 9.1155 33.372 11.4652 34.8205C12.5338 35.4835 13.6604 35.9277 14.9157 36.0114C16.3641 36.1015 17.6903 35.4706 18.5722 34.3055C19.9305 32.5094 20.1687 29.9795 20.3683 27.7135C20.3554 27.5718 20.394 27.6877 20.4326 27.7778C20.6322 29.5803 20.7545 30.6296 21.4111 32.3291C22.4798 35.1101 24.7071 36.5908 27.3851 37.3246C27.5139 37.3633 27.6491 37.3955 27.7843 37.4277C27.9388 37.4663 28.0933 37.4985 28.2542 37.5371C29.3357 37.7624 30.3979 38.11 31.37 38.6444C34.4921 40.3632 36.5006 43.4532 37.5371 47.2255C38.1293 49.3628 38.3482 51.5258 38.3353 53.7467C38.3225 57.3839 37.9426 60.8602 36.153 64.0789C35.078 66.0102 33.5844 67.6195 31.7755 68.862C27.8873 71.5464 23.3939 72.0292 18.8039 71.6044Z"
                  fill="#7A2F08"
                />
              </svg>
            </div>
            <div className="pt-7.5">
              <H2 className="text-[#474806] md:w-137.5 text-center -mt-5">
                Slow Down and
              </H2>
              <H2 className="text-[#474806] md:w-150 text-center">
                Make Time for Sukoon
              </H2>
            </div>
            <div className="w-full lg:w-200 pt-5 flex flex-col items-center md:pb-0">
              <Text className="text-center text-black  px-10 md:px-30 xl:px-0">
                Good food tastes even better when it’s shared. Reserve your
                table at Sukoon and settle in for soulful Indian flavours, warm
                hospitality and an evening set aside just for you.
              </Text>
              <div>
                <Button
                  color="#474806"
                  label="ORDER ONLINE"
                  className="cursor-pointer mt-7.5 bg-transparent hover:bg-[#474806] text-[#474806] hover:text-white"
                  href="https://sukoonindianrestaurant.square.site"
                  target="_blank"
                />
                <Button
                  color="#474806"
                  label="BOOK NOW"
                  className="cursor-pointer mt-7.5 bg-transparent hover:bg-[#474806] text-[#474806] hover:text-white ml-3"
                  href="#"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SlowDown;
