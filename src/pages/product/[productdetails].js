import React from "react";

const ProductDetails = ({ product }) => {
  // console.log({ product });
  return (
    <div>
      <h2>{product.productName}</h2>
    </div>
  );
};

export default ProductDetails;

//

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products?.map((product) => ({
    params: { productdetails: product._id },
  }));
  console.log(paths);
  return { paths, fallback: false };
};

//

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:5000/products/${params.productdetails}`
  );
  const product = await res.json();

  return { props: { product } };
}
