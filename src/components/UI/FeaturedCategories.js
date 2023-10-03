import React from "react";

const FeaturedCategories = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedCategories;
