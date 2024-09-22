import Posts from "@/app/components/community-post/Posts";
import SidebarDemo from "@/app/components/Sidebar";
import React from "react";

const CommunityPost = () => {
  return (
    <div className="bg-green-50 h-screen pt-20 ">
      <div className="float-left">
        <SidebarDemo />
      </div>
      <div className="">
        <Posts className="w-full" />
      </div>
    </div>
  );
};

export default CommunityPost;
