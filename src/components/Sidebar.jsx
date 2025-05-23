import React from "react";
import EventButton from "./EventButton";
import SmallCalender from "./SmallCalender";

const Sidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <EventButton />
      <SmallCalender />
    </aside>
  );
};

export default Sidebar;
