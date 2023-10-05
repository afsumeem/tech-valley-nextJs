import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;

//
// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/products");
//   const data = await res.json();
//   console.log("data", data);
//   //categories
//   const productCategories = data.map((product) => product.category);
//   const uniqueCategories = productCategories.filter(
//     (category, index, currentVal) => currentVal.indexOf(category) === index
//   );
//   console.log("the categories are", uniqueCategories);

//   return {
//     props: {
//       categories: uniqueCategories,
//     },
//     revalidate: 10,
//   };
// };
