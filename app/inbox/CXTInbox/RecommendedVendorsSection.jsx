import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const vendorCategoryList = [
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
  { profileImage: "images/img_rectangle_276.png", userName: "Susan Von Firstenburg" },
];

export default function RecommendedVendorsSection() {
  return (
    <>
      {/* recommended vendors section */}
      <div className="flex flex-col items-center">
        <div className="container-6xl flex flex-col items-start gap-[58px] pl-[296px] pr-14 lg:px-5 md:px-5 sm:gap-[29px]">
          <Heading
            size="heading2xl"
            as="h2"
            className="ml-[30px] text-[20px] font-semibold tracking-[-0.80px] text-green-800 lg:text-[17px] md:ml-0"
          >
            <span className="text-deep_orange-500">Recommended</span>
            <span className="text-black-900_01">&nbsp;</span>
            <span className="text-deep_orange-500">Vendors</span>
            <span className="text-black-900_01">&nbsp;Based on Your Interests&nbsp;</span>
          </Heading>
          <div className="mr-5 flex w-[84%] gap-12 px-6 py-3 md:mr-0 md:w-full md:flex-col sm:px-4">
            <Suspense fallback={<div>Loading feed...</div>}>
              {vendorCategoryList.map((d, index) => (
                <UserProfile {...d} key={"vendorList" + index} className="lg:gap-2" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
