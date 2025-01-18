import { Helmet } from "react-helmet";
import { Text, Switch, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header3 from "../../components/Header3";
import React from "react";

export default function AccountOnePage() {
  return (
    <>
      <Helmet>
        <title>Manage Your Account Settings - Account Settings</title>
        <meta
          name="description"
          content="Access your account settings to manage notifications, privacy, and project preferences. Stay updated with messages, promotions, and tips for a seamless experience."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[92px] bg-gray-100 lg:gap-[92px] md:gap-[69px] sm:gap-[46px]">
        <div className="h-[100px] self-stretch bg-[url(/public/images/img_group_7482.png)] bg-cover bg-no-repeat py-2 lg:h-auto md:h-auto">
          <div className="mt-2">
            <div className="flex flex-col items-center gap-1">
              <Header3 />
              <div className="container-6xl flex flex-col items-center px-14 lg:px-5 md:px-5">
                <div className="flex w-[88%] lg:w-full md:w-full">
                  <div className="flex w-[14%] flex-wrap justify-between gap-5">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Home
                    </Text>
                    <Text as="p" className="mr-16 text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                      Other Info
                    </Text>
                  </div>
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_01">
                    Events and more
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-6xl mb-1 flex flex-col gap-[490px] lg:gap-[367px] lg:px-5 md:gap-[367px] md:px-5 sm:gap-[245px]">
          <div className="mx-[166px] flex items-start md:mx-0 md:flex-col">
            <div className="mt-5 flex flex-col items-start gap-[22px]">
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
            </div>
            <div className="w-[62%] self-center rounded bg-white-a700 p-[30px] shadow-md md:w-full sm:p-4">
              <div className="mb-[38px] mr-1 flex flex-col items-start md:mr-0">
                <Heading
                  size="heading2xl"
                  as="h1"
                  className="text-[20px] font-semibold tracking-[-0.80px] text-black-900_01 lg:text-[17px]"
                >
                  Notifications
                </Heading>
                <Text as="p" className="mt-7 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                  Get push notifications about...
                </Text>
                <div className="relative mt-3.5 h-[292px] self-stretch lg:h-auto md:h-auto">
                  <div className="mx-4 mt-3.5 flex flex-1 flex-col items-start gap-1 lg:mx-0 md:mx-0">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                      Messages
                    </Text>
                    <Text size="textmd" as="p" className="text-[13px] font-normal tracking-[-0.52px] text-gray-700_03">
                      Pros send you messages.
                    </Text>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[5px] border border-solid border-blue_gray-100_02 py-3">
                    <div className="mt-2.5 flex flex-col items-center">
                      <Switch value={true} className="mr-3.5 self-end md:mr-0" />
                      <div className="mt-[26px] self-stretch">
                        <div className="flex flex-col items-start">
                          <div className="h-px w-full self-stretch bg-blue_gray-100_02" />
                          <div className="relative z-[1] mx-3.5 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                            <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                              Project reminders and updates
                            </Text>
                            <Switch value={true} className="self-end" />
                          </div>
                          <Text
                            size="textmd"
                            as="p"
                            className="relative ml-3.5 mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                          >
                            You’ve got upcoming projects or there are other updates about your projects.
                          </Text>
                          <div className="mt-2.5 h-px w-full self-stretch bg-blue_gray-100_02" />
                        </div>
                      </div>
                      <div className="relative z-[2] mx-3.5 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                        <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                          Promotions and tips
                        </Text>
                        <Switch value={true} className="self-end" />
                      </div>
                      <Text
                        size="textmd"
                        as="p"
                        className="relative ml-3.5 mt-[-4px] self-start text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                      >
                        There are coupons, promotions, surveys, and project ideas you might like.
                      </Text>
                      <div className="mt-2.5 self-stretch">
                        <div className="flex flex-col gap-2.5">
                          <div className="h-px bg-blue_gray-100_02" />
                          <div className="ml-4 mr-3 flex items-start justify-center md:mx-0 sm:flex-col">
                            <div className="flex flex-1 flex-col items-start gap-1 self-center sm:self-stretch">
                              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                                Account support
                              </Text>
                              <Text
                                size="textmd"
                                as="p"
                                className="text-[13px] font-normal tracking-[-0.52px] text-gray-700_03"
                              >
                                We have updates about your account, projects, and security/privacy matters.
                              </Text>
                            </div>
                            <Switch value={true} className="mt-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-9 flex flex-col items-start gap-4 self-stretch">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                    Tell me about...
                  </Text>
                  <div className="relative h-[80px] content-center self-stretch lg:h-auto md:h-auto">
                    <Text
                      as="p"
                      className="ml-3.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03 lg:ml-0 md:ml-0"
                    >
                      All Text Notifications
                    </Text>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-end rounded-[5px] border border-solid border-blue_gray-100_02 px-[18px] py-7 sm:py-4">
                      <Switch value={false} />
                    </div>
                  </div>
                </div>
                <Text as="p" className="mt-9 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                  Email me about...
                </Text>
                <div className="relative mt-4 h-[432px] self-stretch lg:h-auto md:h-auto">
                  <div className="mx-4 mt-3.5 flex flex-1 flex-col items-start gap-1.5 lg:mx-0 md:mx-0">
                    <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                      Helpful tips and inspiration
                    </Text>
                    <Text size="textmd" as="p" className="text-[13px] font-normal tracking-[-0.52px] text-gray-700_03">
                      Cost guides, project checklists, and tips from Thumbtack pros
                    </Text>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 rounded-[5px] border border-solid border-blue_gray-100_02 py-1.5">
                    <div className="mt-4 flex flex-col items-center">
                      <Switch value={true} className="mr-3.5 self-end md:mr-0" />
                      <div className="mt-[26px] self-stretch">
                        <div className="flex flex-col items-start">
                          <div className="h-px w-full self-stretch bg-blue_gray-100_02" />
                          <div className="relative z-[3] mx-3.5 mt-2 flex items-start justify-between gap-5 self-stretch md:mx-0">
                            <Text as="p" className="mb-3 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                              Recommendations
                            </Text>
                            <Switch value={true} className="self-end" />
                          </div>
                          <Text
                            size="textmd"
                            as="p"
                            className="relative ml-3.5 mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                          >
                            Personalized suggestions for projects, pros, and more
                          </Text>
                          <div className="mt-2.5 h-px w-full self-stretch bg-blue_gray-100_02" />
                        </div>
                      </div>
                      <div className="relative z-[6] mx-4 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                        <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                          Special Offers
                        </Text>
                        <Switch value={true} className="self-end" />
                      </div>
                      <Text
                        size="textmd"
                        as="p"
                        className="relative ml-3.5 mt-[-4px] self-start text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                      >
                        Discounts, rewards, and promotions
                      </Text>
                      <div className="mt-2.5 self-stretch">
                        <div className="flex flex-col items-start">
                          <div className="h-px w-full self-stretch bg-blue_gray-100_02" />
                          <div className="relative z-[4] ml-4 mr-3.5 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                            <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                              Invitations to give feedback
                            </Text>
                            <Switch value={true} className="self-end" />
                          </div>
                          <Text
                            size="textmd"
                            as="p"
                            className="relative ml-4 mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                          >
                            Quick surveys to get your ideas for improving Thumbtack
                          </Text>
                          <div className="mt-2.5 h-px w-full self-stretch bg-blue_gray-100_02" />
                        </div>
                      </div>
                      <div className="relative z-[7] ml-[18px] mr-3 mt-2 flex items-start justify-between gap-5 self-stretch md:mx-0">
                        <Text as="p" className="mb-3 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                          Reminders
                        </Text>
                        <Switch value={false} className="self-end" />
                      </div>
                      <Text
                        size="textmd"
                        as="p"
                        className="relative ml-[18px] mt-[-4px] self-start text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                      >
                        Incomplete request reminders, recurring project reminders, and more
                      </Text>
                      <div className="mt-2.5 self-stretch">
                        <div className="flex flex-col items-start">
                          <div className="h-px w-full self-stretch bg-blue_gray-100_02" />
                          <div className="relative z-[5] mx-3.5 mt-2.5 flex items-start justify-between gap-5 self-stretch md:mx-0">
                            <Text as="p" className="mb-2.5 text-[15px] font-normal tracking-[-0.60px] text-gray-700_03">
                              Other
                            </Text>
                            <Switch value={true} className="self-end" />
                          </div>
                          <Text
                            size="textmd"
                            as="p"
                            className="relative ml-4 mt-[-4px] text-[13px] font-normal tracking-[-0.52px] text-gray-700_03 md:ml-0"
                          >
                            Feature updates and product announcements
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
