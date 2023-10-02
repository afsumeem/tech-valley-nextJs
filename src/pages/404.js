import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 2000);
  return (
    <div>
      <h2>page not found</h2>
    </div>
  );
};

export default ErrorPage;
