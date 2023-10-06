// import Head from "next/head";
import { signIn } from "next-auth/react";

import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";

const LoginPage = () => {
  //

  return (
    <div className=" min-h-screen flex  items-center border-t-2 border-b-2">
      <div className="sm:w-3/4 md:w-2/5 bg-black bg-opacity-60 mx-auto p-10 rounded-xl ">
        <h5 className="text-center text-white font-bold text-3xl mb-8">
          Login to Continue
        </h5>

        <div className=" flex flex-col items-center justify-center w-full">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "https://tech-valley.vercel.app/",
              })
            }
            className="w-1/2 bg-green-800 px-4 py-2 flex gap-2 justify-center text-white items-center font-bold text-xl rounded"
          >
            Google
            <BiLogoGoogle />
          </button>

          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://tech-valley.vercel.app/",
              })
            }
            className="w-1/2 bg-black px-4 py-2 flex gap-2 justify-center text-white items-center font-bold text-xl rounded mt-2"
          >
            Github
            <BiLogoGithub />
          </button>
        </div>

        <h5 className="text-center text-normal mt-4 text-white">
          Back to{" "}
          <span className="text-blue-300 underline font-bold">
            {" "}
            <Link href="/">Home</Link>
          </span>
        </h5>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
