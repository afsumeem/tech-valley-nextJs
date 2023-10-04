import Link from "next/link";
import React from "react";

const FeaturedCategories = ({ categories }) => {
  // console.log(categories);
  return (
    <>
      <h2 className="text-2xl uppercase ml-8 mt-8 mb-4 font-bold">
        featured Categories
      </h2>
      <hr />
      <div className=" col-span-9 px-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center w-full  my-12">
        {categories.map((category, index) => (
          <Link key={index} href={`/products/${category}`}>
            <div className=" bg-slate-300 hover:bg-slate-500 transition duration-700 rounded-md shadow-2xl hover:text-white h-40 w-40 text-center items-center flex justify-center ">
              <h3 className="font-bold text-xl p-4">{category}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FeaturedCategories;

//
