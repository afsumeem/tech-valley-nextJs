import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/PMqXyjJ/intro-1654286079.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-1/2">
          <h1 className="mb-5 text-6xl uppercase font-bold">Tech Valley</h1>
          <p className="mb-5">
            Introducing Tech Valley, Your Ultimate Destination for Custom PC
            Building!
            <br />
            Are you ready to elevate your gaming, design, or work experience to
            unprecedented heights? Look no further than Tech Valley – the
            premier online destination for enthusiasts and professionals alike
            who crave power, performance, and precision in their computing
            devices.
          </p>
          <Link href="/pcbuilder">
            <button className="btn bg-black text-white hover:text-black  border-t-0  border-b-2 transition duration-500">
              Build your own PC
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
