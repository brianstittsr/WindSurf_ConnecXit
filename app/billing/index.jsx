import { Helmet } from "react-helmet";
import { Text } from "../../components";
import Footer5 from "../../components/Footer5";
import Header6 from "../../components/Header6";
import BillingSection from "./BillingSection";
import React from "react";

export default function CXTBillingPage() {
  return (
    <>
      <Helmet>
        <title>Billing FAQ - ConnecXit User Support</title>
        <meta
          name="description"
          content="Find answers to your billing questions, learn about transaction summaries, and get support for disputes and refunds on ConnecXit. Contact us for more billing information."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="flex flex-col gap-[62px] sm:gap-[31px]">
          <Header6 />
          <div className="relative h-[1304px]">
            <div className="absolute right-[8%] top-0 m-auto flex w-[70%] flex-col items-end gap-[54px] rounded bg-white-a700 py-8 shadow-md sm:gap-[27px] sm:py-5">
              {/* billing section */}
              <BillingSection />
              <div className="mb-[352px] mr-[62px] h-[16px] w-[16px] rounded-lg bg-white-a700 md:mr-0" />
            </div>
            <div className="container-xl absolute left-0 right-0 top-[21.76px] z-[4] mx-[120px] my-auto flex flex-1 flex-col items-start gap-5 md:mx-0 md:px-5">
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Account Settings
              </Text>
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-green-800">
                Notification Settings
              </Text>
              <a href="Logout" target="_blank" rel="noreferrer">
                <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                  Logout
                </Text>
              </a>
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Search
              </Text>
              <Text as="p" className="text-[15px] font-medium tracking-[-0.60px] text-blue_gray-900_01">
                Billing
              </Text>
            </div>
            <Footer5 className="absolute bottom-0 left-0 right-0 m-auto flex-1" />
          </div>
        </div>
      </div>
    </>
  );
}
