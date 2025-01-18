import { Helmet } from "react-helmet";
import Header41 from "../../components/Header41";
import React from "react";

export default function FrameOnePage() {
  return (
    <>
      <Helmet>
        <title>Event Services - Find Top Event Planners, Photographers, and Caterers</title>
        <meta
          name="description"
          content="Discover premier event services including planners, photographers, and caterers to make your event memorable. Expertise for every occasion."
        />
      </Helmet>
      <div className="flex w-full flex-col overflow-auto">
        <Header41 />
      </div>
    </>
  );
}
