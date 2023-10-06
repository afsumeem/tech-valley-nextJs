import { addProduct } from "@/redux/features/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import RootLayout from "@/components/Layouts/RootLayout";

const SelectProduct = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addProduct({ category: product.category, product }));
    router.push("/pcbuilder");
  };
  return (
    <div className="bg-slate-200 ">
      <h2 className="py-8 text-center font-bold text-4xl uppercase">
        All products
      </h2>

      <div className="col-span-9 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center w-full pb-8">
        {products.map((product, i) => (
          <div key={i}>
            <div key={product._id} className="flex justify-center ">
              <div className="card md:card-side w-full bg-base-100 shadow-xl px-4  ">
                <figure className=" flex flex-col mt-4">
                  <Image
                    src={product.image}
                    height={800}
                    width={200}
                    alt="product"
                  />
                  <div className="badge text-white bg-green-800 w-24 h-10 rounded-none mt-8">
                    {product.status}
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="font-bold ">{product.productName}</h2>
                  <p className="text-2xl">${product.price}</p>
                  <h5 className="mt-2 ">
                    <span className="font-bold uppercase">Category</span> -{" "}
                    {product.category}
                  </h5>

                  <div className="card-actions justify-end">
                    <ReactStars
                      count={5}
                      value={product.averageRating}
                      size={24}
                      edit={false}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </div>
                  <button
                    className=" hover:bg-black hover:text-white text-black bg-slate-300 border-t-0 border-x-0 border-black rounded-md h-8 border-b-2 transition duration-500"
                    onClick={() => handleAddProduct(product)}
                  >
                    Add to builder
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectProduct;

//
SelectProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
//

export async function getServerSideProps(context) {
  const { params } = context;
  const { category: category } = params;

  const res = await fetch(
    `https://tech-vally-server.vercel.app/filteredProducts?category=${category}`
  );
  const data = await res.json();
  console.log(data);

  return { props: { products: data } };
}
