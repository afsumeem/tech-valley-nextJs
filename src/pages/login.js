// import Head from "next/head";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import auth from "@/firebase/firebase.auth";
import RootLayout from "@/components/Layouts/RootLayout";

const LoginPage = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // console.log(user);

  //

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div className="bg-bgGradient min-h-screen flex  items-center">
      <div className="sm:w-3/4 md:w-2/5 bg-slate-100 mx-auto p-10 rounded-xl ">
        <h2 className="text-center font-bold text-3xl ">Welcome Back!</h2>
        <h5 className="text-center text-normal mb-8">Login to Continue</h5>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          {/* email */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your Email</span>
            </label>
            <input
              id="email"
              placeholder="Your Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          {/* password */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your Password</span>
            </label>
            <input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button className="btn text-white bg-blue-950 mt-4 w-full max-w-xs">
            Login
          </button>
        </form>

        <div>
          <BiLogoGoogle
            onClick={() =>
              signIn("google", { callbackUrl: "http://localhost:3000/" })
            }
          />

          <BiLogoGithub
            onClick={() =>
              signIn("github", { callbackUrl: "http://localhost:3000/" })
            }
          />
        </div>

        <h5 className="text-center text-normal mt-8">
          Dont have an account?
          <span className="text-blue-800 underline font-bold">
            {" "}
            <a to="/signup">Sign Up</a>
          </span>
        </h5>
        <h5 className="text-center text-normal mt-4">
          Back to{" "}
          <span className="text-blue-800 underline font-bold">
            {" "}
            <a to="/">Home</a>
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
