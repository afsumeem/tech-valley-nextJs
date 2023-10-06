import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import errorImg from "../assets/images/vecteezy_404-error-vector_23261973.jpg";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div>
      <Image
        src={errorImg}
        height={500}
        width={900}
        className="block m-auto"
        alt="page not found"
      />
    </div>
  );
};

export default ErrorPage;
