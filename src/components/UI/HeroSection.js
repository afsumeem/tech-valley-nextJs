import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          height={500}
          width={500}
          src=""
          className="max-w-sm rounded-lg"
          alt="banner"
        />
        <div className="md:text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Feast Your Eyes on <br /> A Good Book!
          </h1>
          <p className="py-6">
            Books play a quintessential role in every student life by
            introducing them to a world of imagination, providing knowledge of
            the outside world, improving their reading, writing and speaking
            skills as well as boosting memory and intelligence.
          </p>
          <Link href="books">
            <button className="btn text-black hover:bg-black bg-slate-400 hover:text-white transition duration-1000 font-bold">
              Build Your Own PC!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
