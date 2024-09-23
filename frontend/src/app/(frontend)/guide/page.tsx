import ExpandableCardDemo from "../../components/guide/Card";
import SidebarDemo from "@/app/components/Sidebar";
import React from "react";

const Guide = () => {
  return (
    <div>
      <SidebarDemo />
      <div className="pt-12">
        <ExpandableCardDemo />
      </div>
    </div>
  );
};

export default Guide;
