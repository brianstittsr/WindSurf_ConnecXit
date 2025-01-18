import { Helmet } from "react-helmet";
import { Button, Img } from "../../components";
import ImageSliderSection from "./ImageSliderSection";
import React from "react";

export default function FrameThreePage() {
  return (
    <>
      <Helmet>
        <title>Frame Three - Your Gateway to Quality Content</title>
        <meta
          name="description"
          content="Explore Frame Three for a curated selection of content. Engage with our platform for a unique and enriching experience."
        />
      </Helmet>
      <div className="relative h-[326px] w-full content-center md:h-auto">
        {/* image slider section */}
        <ImageSliderSection />
        <Button
          color="white_A700"
          size="xl"
          className="absolute bottom-0 right-0 top-0 my-auto w-[38px] rounded-[18px] px-3"
        >
          <Img src="images/img_arrow_right.svg" />
        </Button>
      </div>
    </>
  );
}
