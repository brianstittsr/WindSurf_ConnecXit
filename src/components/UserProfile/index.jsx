import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  profileImage = "images/img_rectangle_276.png",
  userName = "Susan Von Firstenburg",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[24%] md:w-full gap-2`}>
      <Img src={profileImage} alt="Profile Image" className="h-[326px] w-full rounded-[14px] object-cover" />
      <div className="text-center">
        <h6 className="font-poppins text-[18px] sm:text-[15px] font-semibold tracking-[-0.72px] text-black">
          {userName}
        </h6>
      </div>
    </div>
  );
}
