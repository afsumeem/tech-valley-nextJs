import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const FilteredProducts = ({ products }) => {
  console.log(products.length);
  return (
    <div>
      <h2>filtered products </h2>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.productName}</h2>
          <Link href={`/product/${product._id}`}>Product Details</Link>
        </div>
      ))}
    </div>
  );
};

export default FilteredProducts;

//

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products?.map((product) => ({
    params: { filteredproduct: product.category },
  }));

  return { paths, fallback: false };
};

//

export async function getStaticProps(context) {
  const { params } = context;
  const { filteredproduct: category } = params;
  const res = await fetch(
    `http://localhost:5000/filteredProducts?category=${category}`
  );
  const products = await res.json();

  console.log(products.length);

  return { props: { products } };
}
