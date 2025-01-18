import { Button, Text, Heading, Input, Img, SelectBox } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CXTInboxSection() {
  return (
    <>
      {/* c x t inbox section */}
      <div className="flex flex-col items-center">
        <div className="container-6xl flex flex-col items-center gap-[38px] px-14 lg:px-5 md:px-5">
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
              <Button size="xl" shape="circle" className="w-[40px] rounded-[20px] px-2.5">
                <Img src="images/img_search.svg" />
              </Button>
            </div>
          </div>
          <div className="ml-1.5 flex w-[70%] flex-col gap-[50px] lg:w-full md:ml-0 md:w-full">
            <div className="flex flex-col items-start">
              <Heading
                size="heading2xl"
                as="h1"
                className="text-[20px] font-semibold tracking-[-0.80px] text-black-900_01 lg:text-[17px]"
              >
                Inbox
              </Heading>
              <div className="mt-2.5 flex flex-col items-start gap-2.5 self-stretch border border-solid border-blue_gray-100_01 px-[22px] py-4 sm:px-4">
                <Text
                  size="text2xl"
                  as="p"
                  className="text-[18px] font-normal tracking-[-0.72px] text-deep_orange-500 lg:text-[15px]"
                >
                  Bring ConnecXit you
                </Text>
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                  Get the app to keep your conversations going - on the go.
                </Text>
                <div className="relative h-[34px] content-center self-stretch lg:h-auto md:h-auto">
                  <Input
                    color="gray_300_01"
                    size="sm"
                    shape="round"
                    name="Phone Input"
                    placeholder={`(555) 555-5555`}
                    className="w-[40%] rounded-[16px] !border px-3.5 tracking-[-0.52px]"
                  />
                  <Button
                    size="xs"
                    className="absolute bottom-0 left-[32%] top-0 my-auto min-w-[90px] rounded-[14px] px-4 font-medium tracking-[-0.52px]"
                  >
                    Send Link
                  </Button>
                </div>
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-deep_orange-500">
                  Terms apply
                </Text>
              </div>
              <div className="mt-[38px] flex flex-col items-start gap-1.5 self-stretch">
                <Heading
                  as="h2"
                  className="text-[18px] font-normal tracking-[-0.72px] text-black-900_01 lg:text-[15px]"
                >
                  <span className="text-deep_orange-500">No Conversations</span>
                  <span className="text-black-900_01">&nbsp;yet</span>
                </Heading>
                <Text
                  as="p"
                  className="w-[42%] text-[15px] font-normal leading-[146.7%] tracking-[-0.60px] text-gray-700_03 lg:w-full md:w-full"
                >
                  Once you create a project, you will see your messages and booking reminders-all right here
                </Text>
                <Button className="min-w-[128px] rounded-[5px] px-5 font-semibold tracking-[-0.60px]">
                  New project
                </Button>
              </div>
            </div>
            <div className="ml-1.5 h-px bg-blue_gray-100_01 md:ml-0" />
          </div>
        </div>
      </div>
    </>
  );
}
