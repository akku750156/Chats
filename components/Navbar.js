import React from "react";
import Image from "next/image";
import { MessageFilled, BellOutlined } from "@ant-design/icons";
function Navbar() {
  return (
    <div className="border-b py-8 flex justify-between items-center">
      <div className="flex items-center">
        <MessageFilled style={{ color: "purple" }} className="mr-2" />
        <div>Chats</div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 rounded-xl p-1 px-2"
        />
        <BellOutlined style={{ fontSize: "20px" }} className="ml-2" />
        <div className="ml-2">
          <Image
            height="30"
            width="30"
            className="rounded-full"
            src="/avatar.png"
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
