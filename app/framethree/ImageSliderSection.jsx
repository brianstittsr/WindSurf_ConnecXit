import { Img, Slider } from "../../components";
import React from "react";

export default function ImageSliderSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      {/* image slider section */}
      <div className="mx-auto w-full">
        <div className="mx-[11px] flex w-full gap-[22px] md:mx-0 md:flex-col">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 4 } }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            items={[...Array(12)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="px-[11px]">
                  <Img
                    src="images/img_rectangle_321.png"
                    alt="Slider Image 1"
                    className="h-[326px] rounded-[14px] object-contain md:w-full"
                  />
                </div>
              </React.Fragment>
            ))}
          />
        </div>
      </div>
    </>
  );
}
