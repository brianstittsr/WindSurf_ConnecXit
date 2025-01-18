import { Switch, Text, Heading } from "../../components";
import React from "react";

export default function BillingSection() {
  return (
    <>
      {/* billing section */}
      <div className="flex flex-col items-end gap-[104px] self-stretch px-10 md:gap-[78px] sm:gap-[52px] sm:px-5">
        <div className="mr-1 self-stretch md:mr-0">
          <div className="flex flex-col items-start">
            <Heading
              size="heading2xl"
              as="h1"
              className="text-[20px] font-semibold tracking-[-0.80px] text-black-900_01"
            >
              Billing
            </Heading>
            <Text as="p" className="mt-[26px] text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
              Top ConnecXit Billing Topics
            </Text>
            <div className="relative mt-3.5 h-[292px] self-stretch md:h-auto">
              <div className="container-sm mx-4 mt-3.5 flex flex-1 flex-col items-start gap-1.5 md:mx-0 md:px-5">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                  Billing Messages
                </Text>
                <Text size="textmd" as="p" className="text-[13px] font-normal tracking-[-0.52px] text-gray-700_03">
                  Pros billing transaction summary.
                </Text>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[5px] border border-solid border-blue_gray-100_02 py-3">
                <div className="mt-3 flex flex-col items-center">
                  <Switch value={true} className="mr-3.5 self-end md:mr-0" />
                  <div className="mt-[26px] self-stretch">
                    <div className="flex flex-col items-start">
                      <div className="h-px w-full self-stretch bg-blue_gray-100_02" />
                      <div className="container-md relative z-[1] mt-2.5 flex items-start justify-between gap-5 self-stretch md:px-5">
                        <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                          Billing Questions
                        </Text>
                        <Switch value={true} className="self-end" />
                      </div>
                      <Text
                        size="textmd"
                        as="p"
                        className="relative ml-3.5 mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                      >
                        Submit a request regarding billing.
                      </Text>
                      <div className="mt-2.5 h-px w-full self-stretch bg-blue_gray-100_02" />
                    </div>
                  </div>
                  <div className="container-md relative z-[3] mt-2.5 flex items-start justify-between gap-5 self-stretch md:px-5">
                    <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                      Disputes
                    </Text>
                    <Switch value={true} className="self-end" />
                  </div>
                  <Text
                    size="textmd"
                    as="p"
                    className="relative ml-3.5 mt-[-4px] self-start text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                  >
                    Submit a dispute with an event planner or vendor
                  </Text>
                  <div className="mt-2.5 self-stretch">
                    <div className="flex flex-col items-start">
                      <div className="h-px w-full self-stretch bg-blue_gray-100_02" />
                      <div className="container-md relative z-[2] mt-2 flex items-start justify-between gap-5 self-stretch md:px-5">
                        <Text as="p" className="mb-3 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                          Refunds
                        </Text>
                        <Switch value={true} className="self-end" />
                      </div>
                      <Text
                        size="textmd"
                        as="p"
                        className="relative ml-4 mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                      >
                        Submit a request for a refund.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[38px] self-stretch">
              <div className="flex flex-col items-start gap-3.5">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                  Billing Information
                </Text>
                <div className="relative h-[80px] content-center self-stretch md:h-auto">
                  <Text as="p" className="ml-3.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03 md:ml-0">
                    Add your credit card information
                  </Text>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-end rounded-[5px] border border-solid border-blue_gray-100_02 px-[18px] py-7 sm:py-5">
                    <Switch value={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mr-[22px] h-[16px] w-[16px] rounded-lg bg-white-a700 md:mr-0" />
      </div>
    </>
  );
}
