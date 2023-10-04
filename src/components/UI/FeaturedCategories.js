import Link from "next/link";
import React from "react";

const FeaturedCategories = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      {categories.map((category, index) => (
        <Link key={index} href={`/products/${category}`}>
          <div>
            <h3>{category}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedCategories;

//
