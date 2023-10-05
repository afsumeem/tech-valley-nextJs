import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const FilteredProducts = ({ products }) => {
  // console.log(products.length);
  return (
    <div className="bg-slate-200">
      <h2 className="py-8 text-center font-bold text-4xl uppercase">
        All products
      </h2>
      <div className="col-span-9 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center w-full pb-8">
        {products.map((product, i) => (
          <div key={i}>
            <Link href={`/product/${product._id}`}>
              <div
                key={product._id}
                className="flex justify-center "
                style={{ minHeight: "600px" }}
              >
                <div className="card w-full bg-base-100 shadow-xl px-4  ">
                  <figure className="mt-4">
                    <Image
                      src={product.image}
                      height={100}
                      width={250}
                      alt="product"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="font-bold text-xl">{product.productName}</h2>
                    <h5 className="mt-4 text-lg">
                      {" "}
                      Category: {product.category}
                    </h5>
                    <p className="text-3xl my-4">${product.price}</p>
                    <div className="card-actions justify-end">
                      <div className="badge text-white bg-green-800 badge-outline w-20 h-7 rounded-none">
                        {product.status}
                      </div>
                      <div className="badge badge-outline w-20 h-7 rounded-none">
                        {product.averageRating}*
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredProducts;

FilteredProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
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

  // console.log(products.length);

  return { props: { products } };
}
