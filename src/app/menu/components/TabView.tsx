"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { menulist } from "../../../../constants/menu/list";
interface MenuI {
  id: number;
  tag: string;
  title: string;
  iteme?: Menu[];
}
interface Menu {
  id: number;
  item: string;
  detail?: string;
  price: string;
}

const TabView = () => {
  return (
    <Tabs defaultValue="veg" className="w-full">
      <div className="sticky top-0 z-40 bg-[#515227] overflow-x-scroll md:overflow-x-hidden">
        <TabsList className=" mx-auto flex justify-center gap-2 px-2 pt-10 pb-6 sm:gap-5 sm:pb-10  ">
          {menulist.map((item) => (
            <TabsTrigger key={item.id} value={item.tag}>
              <div className="text-[#FFF9F0] cursor-pointer bg-[#481904] hover:bg-[#FFF9F0] hover:text-[#481904] px-5 py-1.5 text-[12px] lg:px-7.5 lg:py-2.5 lg:text-[14px] border rounded-full border-[#481904] hover:border-transparent font-instrument-regular">
                {item.title}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {menulist.map((record) => (
        <TabsContent
          key={record.id}
          value={record.tag}
          className=" sm:mb-25 p-2 md:px-container-2 bg-[#481904] z-0"
        >
          <div className="min-h-[50vh] sm:min-h-[80vh] border border-[#EBD2B1] p-5 md:p-30">
            {/* Render menu records for this category here */}
            <div className=" m-1.5">
              <div className="font-charman-serif-light text-[32px] md:text-fluid-32 text-[#DDB789] pb-14.5">
                {record.title}
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-x-7.5 gap-y-14.5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                    },
                  },
                }}
              >
                {record.items.map((item, index) => (
                  <motion.div
                    key={`${record.tag}-${item.id}-${index}`}
                    className="flex flex-col gap-2.5"
                    variants={{
                      hidden: {},
                      visible: {},
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <motion.p
                        variants={{
                          hidden: {
                            opacity: 0,
                            // rem so the offset scales with the root font size (-25px at 1920)
                            x: "-1.5625rem",
                            clipPath: "inset(0 100% 0 0)",
                          },
                          visible: {
                            opacity: 1,
                            x: "0rem",
                            clipPath: "inset(0 0% 0 0)",
                            transition: {
                              duration: 2,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          },
                        }}
                        className="text-2xl text-[#DDB789] font-charman-serif-light"
                      >
                        {item.name}
                      </motion.p>

                      <motion.p
                        variants={{
                          hidden: { opacity: 0, x: "-0.9375rem" },
                          visible: {
                            opacity: 1,
                            x: "0rem",
                            transition: { duration: 0.7, delay: 0.1 },
                          },
                        }}
                        className="text-2xl text-[#DDB789] font-charman-serif-light"
                      >
                        {item.price}
                      </motion.p>
                    </div>

                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: "-1.25rem" },
                        visible: {
                          opacity: 1,
                          x: "0rem",
                          transition: { duration: 0.7, delay: 0.15 },
                        },
                      }}
                      className="font-instrument-regular text-sm text-[#DDB789]"
                    >
                      {item.detail}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabView;
