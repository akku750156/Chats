import React from "react";
import Image from "next/image";
import { Switch } from "antd";
import { MessageFilled, BellOutlined, SearchOutlined } from "@ant-design/icons";
import { useTheme } from "next-themes";

function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border-b border-gray-700 py-8 flex justify-between items-center">
      <div className="flex items-center">
        <MessageFilled style={{ color: "#873AE3" }} className="mr-2" />
        <div>Chats</div>
      </div>
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-200 rounded-md p-1 px-2 focus:outline-none focus:ring focus:ring-violet-300 dark:bg-gray-700"
        />
        <SearchOutlined className="absolute right-2 text-gray-500 dark:text-gray-300" />
      </div>
      <div className="flex items-center justify-center">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? (
            <Image src="/dark.png" alt="dark" height="30" width="30" />
          ) : (
            <Image src="/light.png" alt="light" height="30" width="30" />
          )}
        </button>
        <BellOutlined
          style={{ fontSize: "20px", marginBottom: "6px" }}
          className="ml-6"
        />
        <div className="ml-6">
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
