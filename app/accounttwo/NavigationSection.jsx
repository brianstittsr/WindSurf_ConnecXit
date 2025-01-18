import { SelectBox, Img, Heading, Text } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function NavigationSection() {
  return (
    <>
      {/* navigation section */}
      <div className="flex flex-col items-center self-stretch">
        <div className="container-6xl flex flex-col items-end px-2 lg:px-5 md:px-5">
          <div className="flex w-[28%] items-start justify-end lg:w-full md:w-full sm:flex-col">
            <ul className="flex items-start gap-16 self-center">
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                    Sign up as a pro
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                    Projects
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="flex flex-col items-center gap-4">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                      Inbox
                    </Text>
                    <div className="h-[3px] w-full bg-green-900" />
                  </div>
                </a>
              </li>
            </ul>
            <Heading
              size="headingxs"
              as="p"
              className="ml-[22px] h-[26px] w-[26px] rounded-[12px] bg-green-100 p-1 text-[12px] font-semibold tracking-[-0.48px] text-green-900 sm:ml-0"
            >
              UN
            </Heading>
            <SelectBox
              size="xs"
              shape="square"
              indicator={
                <Img src="images/img_arrowdown_black_900_02.svg" alt="Arrow Down" className="h-[5px] w-[8px]" />
              }
              name="User Dropdown"
              placeholder={`User name`}
              options={dropDownOptions}
              className="ml-3 w-[20%] gap-3 tracking-[-0.60px] text-black-900_01 sm:ml-0 sm:w-full"
            />
          </div>
        </div>
        <div className="h-px w-full self-stretch bg-blue_gray-100" />
      </div>
    </>
  );
}
