import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-violet-300 to-blue-200 p-8 dark:from-[#160f2a9e] dark:to-[#00496870]">
      <Head>
        <title>Chats</title>
        <meta name="description" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="h-full p-6 rounded-2xl bg-white dark:bg-black shadow-[0px_0px_100px_5px_rgba(0,0,1,0.5)]">
        <Navbar />
      </div>
    </div>
  );
}
