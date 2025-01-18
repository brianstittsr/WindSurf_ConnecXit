import InboxColumnrecommend from "../../components/InboxColumnrecommend";
import React from "react";

export default function RecommendationsSection() {
  return (
    <>
      {/* recommendations section */}
      <div className="mt-9 flex flex-col gap-[70px] self-stretch px-[356px] lg:px-8 md:px-5 sm:px-4">
        <InboxColumnrecommend className="ml-2" />
        <InboxColumnrecommend className="ml-3" />
      </div>
    </>
  );
}
