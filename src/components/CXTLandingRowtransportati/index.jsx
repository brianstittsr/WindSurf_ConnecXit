import { Heading, Img } from "../../components";
import React, { Suspense } from "react";

const cardList = [
  { transportationImage: "images/img_rectangle_276_3.png", transportationTitle: "Transportation" },
  { transportationImage: "images/img_rectangle_276_4.png", transportationTitle: "Venues" },
  { transportationImage: "images/img_rectangle_276_5.png", transportationTitle: "Disc Jockeys (DJ’s)" },
  { transportationImage: "images/img_rectangle_276_6.png", transportationTitle: "Local Talent" },
];

export default function CXTLandingRowtransportati({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex justify-center items-center px-14 md:px-5`}>
      <div className="mx-auto flex w-full max-w-[1224px] gap-12 px-6 py-3.5 md:flex-col sm:px-5">
        <Suspense fallback={<div>Loading feed...</div>}>
          {cardList.map((d, index) => (
            <div key={"cardList1" + index} className="flex w-[24%] flex-col items-center gap-2 md:w-full">
              <Img
                src={d.transportationImage}
                alt="Transportation Image"
                className="h-[326px] w-full rounded-[14px] object-cover md:h-auto"
              />
              <Heading as="h6" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
                {d.transportationTitle}
              </Heading>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
