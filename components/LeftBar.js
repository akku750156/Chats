import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import IndividualChat from "../components/IndividualChat";

function LeftBar() {
  return (
    <div className="w-[25%] border-r dark:border-gray-900 border-gray-200 h-full py-8 px-2">
      <div className="flex justify-between items-center text-sm pb-12">
        <div>Chat</div>
        <SearchOutlined className="text-gray-500 dark:text-gray-300" />
      </div>
      <div className="">
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
        <IndividualChat />
      </div>
    </div>
  );
}

export default LeftBar;
