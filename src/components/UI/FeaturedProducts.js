import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";

const FeaturedProducts = ({ products }) => {
  // console.log(products.length);
  return (
    <div>
      <h2 className="text-2xl uppercase ml-8 mt-8 mb-4 font-bold">
        featured products
      </h2>
      <hr />
      <div className="col-span-9 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center w-full ">
        {products.map((product, i) => (
          <div key={i}>
            <Link href={`/product/${product._id}`}>
              <div key={product._id} className="flex justify-center ">
                <div className="card md:card-side w-full bg-base-100 shadow-xl px-4  ">
                  <figure className=" flex flex-col ">
                    <Image
                      src={product.image}
                      height={100}
                      width={250}
                      alt="product"
                    />
                    <div className="badge text-white bg-green-800 w-24 h-7 rounded-none mt-8">
                      {product.status}
                    </div>
                  </figure>
                  <div className="card-body">
                    <h2 className="font-bold ">{product.productName}</h2>
                    <p className="text-2xl my-2">${product.price}</p>
                    <h5 className="mt-4 ">
                      {" "}
                      <span className="font-bold uppercase">
                        {" "}
                        Category
                      </span> - {product.category}
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

export default FeaturedProducts;
