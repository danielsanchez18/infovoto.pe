import React from "react";
import { NewDetails } from "./components/new-details/NewDetails";
import { NewsRelated } from "./components/news-related/NewsRelated";

export default function NoticiaIdPage() {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-x-10 py-10">
      <NewDetails />
      <NewsRelated />
    </div>
  );
}
