import { Button, Text, Heading, Input } from "../../components";
import React from "react";

export default function InboxSection() {
  return (
    <>
      {/* inbox section */}
      <div className="mt-[38px] flex flex-col items-center self-stretch">
        <div className="container-6xl flex flex-col items-center gap-[50px] px-14 lg:px-5 md:px-5">
          <div className="ml-1.5 flex w-[70%] flex-col items-start lg:w-full md:ml-0 md:w-full">
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
                className="text-[18px] font-normal tracking-[-0.72px] text-green-800 lg:text-[15px]"
              >
                Bring Thumbtack you
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
                  color="green_900"
                  size="xs"
                  className="absolute bottom-0 left-[32%] top-0 my-auto min-w-[90px] rounded-[14px] px-4 font-medium tracking-[-0.52px]"
                >
                  Send Link
                </Button>
              </div>
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-green-800">
                Terms apply
              </Text>
            </div>
            <div className="mt-[38px] flex flex-col items-start gap-1.5 self-stretch">
              <Heading as="h2" className="text-[18px] font-normal tracking-[-0.72px] text-black-900_01 lg:text-[15px]">
                <span className="text-green-800">No Conversations</span>
                <span className="text-black-900_01">&nbsp;yet</span>
              </Heading>
              <Text
                as="p"
                className="w-[42%] text-[15px] font-normal leading-[146.7%] tracking-[-0.60px] text-gray-700_03 lg:w-full md:w-full"
              >
                Once you create a project, you will see your messages and booking reminders-all right here
              </Text>
              <Button
                color="green_900"
                size="xs"
                className="min-w-[128px] rounded-[5px] px-5 font-semibold tracking-[-0.60px]"
              >
                New project
              </Button>
            </div>
          </div>
          <div className="ml-3 h-px w-[70%] bg-blue_gray-100_01 md:ml-0" />
        </div>
      </div>
    </>
  );
}
