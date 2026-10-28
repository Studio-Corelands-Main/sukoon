import { H1, Text } from "@/app/components/Typography/Heading";
import { LegalSectionI } from "@/app/types/LegalSectionTypes";

interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSectionI[];
}

const LegalPage = ({ title, intro, lastUpdated, sections }: LegalPageProps) => {
  return (
    <div>
      {/* Dark band keeps the transparent white header readable at the top */}
      <section className="bg-[#481904] px-7.5 sm:px-13 container-px pt-45 pb-20 md:pt-55 md:pb-25">
        <H1 className="text-[#DDB789]">{title}</H1>
        <Text className="pt-8 text-[#EBD2B1] md:max-w-175">{intro}</Text>
       
      </section>

      <section className="flex flex-col lg:flex-row gap-25 bg-[#F4EDE2] px-7.5 sm:px-13 container-px py-20 md:py-30">
        <nav aria-label="On this page" className="hidden lg:block lg:w-[30%]">
          <div className="sticky top-30">
            <p className="mb-6 text-sm font-instrument-regular uppercase text-[#777A35]">
              On this page
            </p>
            <ol className="space-y-3">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="font-instrument-regular text-[#474806] transition-opacity hover:opacity-70"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="lg:w-[70%] md:max-w-225">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-30 border-t border-black/20 pt-10 pb-12 first:border-t-0 first:pt-0"
            >
              <h2 className="mb-6 font-charman-serif-light text-[22px] md:text-[28px] 2xl:text-[32px] leading-tight text-[#474806]">
                {index + 1}. {section.title}
              </h2>
              {/* Matches the Text variant; content is plain p/ul/a from the constants */}
              <div className="font-instrument-regular text-sm md:text-[16px] 2xl:text-[20px] leading-6 md:leading-7 text-[#0B0B0B] [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2 [&_a]:underline [&_strong]:font-semibold">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
