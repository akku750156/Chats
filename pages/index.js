import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import Navbar from "../components/Navbar";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Head>
        <title>Chats</title>
        <meta name="description" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className="h-screen m-6 p-6 rounded-[40px] shadow-[0px_0px_150px_5px_rgba(75,0,130,1)] ">
        <Navbar />
        <h1>Hello,World !</h1>
        <button
          className="text-blue-500 bg-blue-300 p-1 px-4 rounded-xl"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          Sun
        </button>
      </div>
    </div>
  );
}
