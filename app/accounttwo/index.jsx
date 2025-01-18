import { Helmet } from "react-helmet";
import { Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import NavigationSection from "./NavigationSection";
import React from "react";

export default function AccountTwoPage() {
  return (
    <>
      <Helmet>
        <title>Your Personal To-Do List - Account Management</title>
        <meta
          name="description"
          content="Keep track of your projects and professional engagements with a personalized to-do list. Organize your tasks and stay ahead with our comprehensive support resources."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[76px] bg-gray-100 py-[18px] lg:gap-[76px] md:gap-[57px] sm:gap-[38px]">
        <header className="self-stretch bg-white-a700">
          <div className="flex flex-col items-center gap-1">
            {/* navigation section */}
            <NavigationSection />
            <div className="container-6xl flex flex-col items-start pl-[148px] pr-14 lg:px-5 md:px-5">
              <ul className="flex flex-wrap gap-[58px] lg:gap-5 md:gap-5">
                <li>
                  <a href="#">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Home
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Other Info
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Events and more
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="container-6xl mb-1 flex flex-col items-start gap-[1628px] lg:gap-[1221px] lg:px-5 md:gap-[1221px] md:px-5 sm:gap-[814px]">
          <Heading
            size="heading3xl"
            as="h1"
            className="ml-[296px] text-[30px] font-semibold tracking-[-1.20px] text-black-900_01 lg:text-[25px] md:ml-0 md:text-[24px] sm:text-[22px]"
          >
            Your to-do list
          </Heading>
          <Footer className="self-stretch" />
        </div>
      </div>
    </>
  );
}
