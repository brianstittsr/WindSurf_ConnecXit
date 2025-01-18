import { Helmet } from "react-helmet";
import { Button, Heading, Text, Input, Img } from "../../components";
import Footer4 from "../../components/Footer4";
import React from "react";

export default function CXTSignUpWizardPage() {
  return (
    <>
      <Helmet>
        <title>Registration Wizard - Start Your Journey</title>
        <meta
          name="description"
          content="Begin your journey with our easy step-by-step registration wizard. Join as an Event Pro or Vendor and connect with a vibrant community."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[90px] bg-white-a700 md:gap-[67px] sm:gap-[45px]">
        <header className="flex items-center justify-center self-stretch bg-white-a700">
          <div className="flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col md:px-5">
            <Img
              src="images/img_connecxit_logo.png"
              alt="Brand Logo"
              className="h-[90px] w-[18%] object-contain md:w-full"
            />
            <div className="flex w-[50%] items-center justify-center md:w-full md:flex-col">
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  color="gray_500"
                  size="xs"
                  className="min-w-[194px] rounded-lg !bg-deep_orange-500 px-[26px] font-medium tracking-[-0.60px] text-white-a700 sm:px-5"
                >
                  Join As An Event Pro
                </Button>
              </a>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  color="gray_500"
                  size="xs"
                  className="ml-2 min-w-[172px] rounded-lg !bg-red-a700 px-[26px] font-medium tracking-[-0.60px] text-white-a700 md:ml-0 sm:px-5"
                >
                  Join As A Vendor
                </Button>
              </a>
              <div className="relative ml-5 h-[40px] flex-1 md:ml-0 md:w-full md:flex-none md:self-stretch">
                <ul className="absolute bottom-[7.18px] left-0 right-0 !m-auto flex flex-wrap gap-14 md:gap-5">
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                        Explore
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                        Sign up
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                        Log in
                      </Text>
                    </a>
                  </li>
                </ul>
                <a href="#">
                  <Img
                    src="images/img_image_2.png"
                    alt="Profile Image"
                    className="absolute bottom-0 right-1/4 top-0 my-auto h-[40px] w-[40px] rounded-[20px] object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="flex w-[40%] flex-col items-center gap-3 md:w-full md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[30px] font-semibold tracking-[-1.20px] text-black-900_02 md:text-[28px] sm:text-[26px]"
          >
            <span className="text-black-900_02">Create your&nbsp;</span>
            <span className="text-deep_orange-500">account</span>
          </Heading>
          <div className="self-stretch rounded-[10px] border border-solid border-gray-600_01 bg-white-a700 px-[22px] py-[42px] md:py-5 sm:p-5">
            <div className="mb-48 flex flex-col items-start">
              <div className="flex gap-2 self-stretch sm:flex-col">
                <div className="flex w-full flex-col items-start gap-0.5 sm:w-full">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                    First Name
                  </Text>
                  <Input shape="square" name="First Name Input" className="self-stretch !border px-3.5" />
                </div>
                <div className="flex w-full flex-col items-start gap-0.5 sm:w-full">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                    Last Name
                  </Text>
                  <Input shape="square" name="Last Name Input" className="self-stretch !border px-3.5" />
                </div>
              </div>
              <div className="mt-6 flex flex-col items-start gap-1 self-stretch">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  Email
                </Text>
                <Input shape="square" name="Email Input" className="self-stretch !border px-3.5" />
              </div>
              <Text
                size="textlg"
                as="p"
                className="mt-[102px] text-[14px] font-normal tracking-[-0.56px] text-gray-500_03"
              >
                Your password must:
              </Text>
              <div className="mt-1 flex items-center gap-[11px] self-stretch">
                <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-600" />
                <Text size="textlg" as="p" className="text-[14px] font-normal tracking-[-0.56px] text-gray-500_03">
                  be 8 to 71 characters long
                </Text>
              </div>
              <div className="mt-1 flex items-center gap-[11px] self-stretch">
                <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-600" />
                <Text size="textlg" as="p" className="text-[14px] font-normal tracking-[-0.56px] text-gray-500_03">
                  not contain your name or email
                </Text>
              </div>
              <div className="relative mt-1 h-[106px] self-stretch">
                <Text
                  size="textlg"
                  as="p"
                  className="absolute left-0 right-0 top-0 m-auto w-[96%] text-[14px] font-normal leading-[144.7%] tracking-[-0.56px] text-gray-500_03"
                >
                  not be commonly used, easily guessed or contain any variation of the word “Thumbtak”
                </Text>
                <Text
                  size="textlg"
                  as="p"
                  className="absolute bottom-[-1.19px] left-0 right-0 m-auto w-[96%] text-[14px] font-normal leading-[144.7%] tracking-[-0.56px] text-gray-800"
                >
                  <span className="text-gray-800">By clicking Create Account, you agree to the</span>
                  <span className="text-green-800">&nbsp;</span>
                  <span className="text-deep_orange-500">Terms of Use</span>
                  <span className="text-gray-800">&nbsp;and&nbsp;</span>
                  <span className="text-deep_orange-500">Privacy Policy.</span>
                </Text>
                <div className="absolute left-0 top-[7.90px] m-auto h-[6px] w-[6px] rounded-[3px] bg-gray-600" />
              </div>
              <div className="relative ml-1 mt-3.5 h-[34px] content-end self-stretch md:ml-0 md:h-auto">
                <a href="#" className="mx-auto">
                  <Heading
                    size="headings"
                    as="h2"
                    className="text-[14px] font-semibold tracking-[-0.56px] text-white-a700"
                  >
                    Create Account
                  </Heading>
                </a>
                <Button
                  size="lg"
                  shape="round"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 rounded-lg px-[34px] font-semibold tracking-[-0.56px] sm:px-5"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer4 />
      </div>
    </>
  );
}
