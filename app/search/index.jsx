import { Helmet } from "react-helmet";
import { Input, Text } from "../../components";
import React from "react";

export default function SearchPage() {
  return (
    <>
      <Helmet>
        <title>Search Page - Find What You Need</title>
        <meta
          name="description"
          content="Explore our search page to quickly find the information or services you're looking for. Efficient and user-friendly search to enhance your experience."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center justify-center gap-1 bg-gray-300 px-14 py-[774px] md:p-5">
        <Text
          size="text3xl"
          as="p"
          className="font-inter text-[40px] font-normal text-black-900_02 md:text-[38px] sm:text-[36px]"
        >
          test
        </Text>
        <Input
          color="white_A700"
          size="lg"
          variant="fill"
          shape="square"
          name="Text Input"
          className="mb-1 w-[42%] px-3"
        />
      </div>
    </>
  );
}
