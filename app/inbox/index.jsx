import { Helmet } from "react-helmet";
import { Button, Img, Text, SelectBox } from "../../components";
import Footer2 from "../../components/Footer2";
import Header5 from "../../components/Header5";
import InboxSection from "./InboxSection";
import RecommendationsSection from "./RecommendationsSection";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function InboxPage() {
  return (
    <>
      <Helmet>
        <title>Your Personal Inbox - Stay Connected on the Go</title>
        <meta
          name="description"
          content="Keep your Thumbtack conversations and project reminders at your fingertips. Download the app for seamless communication and never miss an update."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="mb-1 flex flex-col items-center">
          <div className="flex flex-col items-center self-stretch">
            <div className="relative z-[1] h-[160px] content-center self-stretch lg:h-auto md:h-auto">
              <div className="mx-auto flex flex-1 flex-col items-center">
                <div className="flex h-[100px] items-end justify-center self-stretch bg-[url(/public/images/img_group_7482.png)] bg-cover bg-no-repeat py-2 lg:h-auto md:h-auto">
                  <div className="container-6xl mt-2 flex justify-center px-2 lg:px-5 md:px-5">
                    <div className="flex w-full items-center justify-center px-14 md:flex-col md:px-5 sm:px-4">
                      <div className="flex w-[12%] flex-wrap justify-between gap-5 self-end md:w-full md:self-auto">
                        <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                          Home
                        </Text>
                        <Text as="p" className="mr-8 text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                          Other Info
                        </Text>
                      </div>
                      <div className="flex w-[78%] items-start justify-center md:w-full md:flex-col">
                        <Text
                          as="p"
                          className="self-end text-[15px] font-normal tracking-[-0.60px] text-gray-700_01 md:self-auto"
                        >
                          Events and more
                        </Text>
                        <Header5 />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-6xl relative z-[2] mt-[-40px] flex flex-col items-end px-1 lg:px-5 md:px-5">
                  <div className="flex w-[10%] flex-col items-start justify-center gap-3 bg-white-a700 py-2.5 shadow-sm lg:w-full md:w-full">
                    <div className="flex flex-col items-start gap-3.5 self-stretch">
                      <Text
                        as="p"
                        className="ml-4 text-[15px] font-normal tracking-[-0.60px] text-black-900_01 md:ml-0"
                      >
                        Profile
                      </Text>
                      <div className="h-px w-full self-stretch bg-gray-200" />
                    </div>
                    <a href="#" className="ml-4 md:ml-0">
                      <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                        Log out
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 right-0 top-[37%] z-[3] m-auto flex flex-1 flex-col items-center">
                <div className="container-6xl flex flex-col items-end pl-14 pr-[168px] lg:px-5 md:px-5">
                  <div className="h-[3px] w-[6%] bg-green-900" />
                </div>
                <div className="h-px w-full self-stretch bg-blue_gray-100" />
              </div>
            </div>
            <div className="container-6xl relative mt-[-22px] flex flex-col items-center px-14 lg:px-5 md:px-5">
              <div className="flex w-[36%] justify-center rounded-[22px] border border-solid border-gray-300_01 lg:w-full md:w-full sm:flex-col">
                <div className="flex flex-1 items-center justify-center gap-5 px-5 sm:self-stretch">
                  <SelectBox
                    shape="square"
                    indicator={
                      <Img src="images/img_arrowdown_black_900_02.svg" alt="Arrow Down" className="h-[6px] w-[8px]" />
                    }
                    name="Schedule Dropdown"
                    placeholder={`When?`}
                    options={dropDownOptions}
                    className="w-[38%] gap-2.5 !border-b tracking-[-0.60px]"
                  />
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                    What’s on your to do list?
                  </Text>
                </div>
                <div className="flex w-[40%] items-center justify-center sm:w-full">
                  <div className="flex flex-1 items-center gap-[11px] px-8 sm:px-4">
                    <div className="h-[46px] w-px bg-gray-300_01" />
                    <Img src="images/img_linkedin.svg" alt="Linkedin Image" className="h-[20px] w-[20px]" />
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                      Zip code
                    </Text>
                  </div>
                  <Button color="green_900" size="xl" shape="circle" className="w-[40px] rounded-[20px] px-2.5">
                    <Img src="images/img_search.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* inbox section */}
          <InboxSection />

          {/* recommendations section */}
          <RecommendationsSection />
          <Footer2 className="mt-[190px]" />
        </div>
      </div>
    </>
  );
}
