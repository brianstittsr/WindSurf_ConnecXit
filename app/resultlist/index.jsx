import { Helmet } from "react-helmet";
import React from "react";

export default function ResultListPage() {
  return (
    <>
      <Helmet>
        <title>Results - Your Search Queries Answered</title>
        <meta
          name="description"
          content="Discover the results you need with our comprehensive list. Find relevant information and summaries tailored to your search."
        />
      </Helmet>
      <div className="h-[1754px] w-full bg-gray-300" />
    </>
  );
}
