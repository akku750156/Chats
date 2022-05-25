import React from "react";
import Image from "next/image";

function IndividualChat() {
  return (
    <div className="hover:bg-gradient-to-r from-gray-200 to-white dark:hover:bg-gradient-to-r dark:hover:from-gray-800 dark:hover:to-black  w-full py-4 px-2 flex justify-start items-center mb-4 rounded-xl">
      <Image
        height="40"
        width="40"
        className="rounded-lg object-cover "
        src="/avatar.png"
        alt="Avatar"
      />
      <div className="ml-6">
        <div className="text-md">Akash Tiwari</div>
        <div className="text-sm">You : How r u ?</div>
      </div>
    </div>
  );
}

export default IndividualChat;
