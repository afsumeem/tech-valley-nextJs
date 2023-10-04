import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";

const ProductDetails = ({ product }) => {
  const reviews = product.reviews;
  return (
    <div>
      <div className="card md:card-side mx-4 flex items-center justify-center">
        <figure className="mt-4">
          <Image src={product.image} height={200} width={350} alt="product" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-2xl">
            {product.productName}{" "}
            <div className="badge bg-black text-white font-normal h-6 rounded-sm">
              {product.category}
            </div>
          </h2>
          <hr />
          <div className="card-actions justify-end">
            <div className="badge text-white text-xl bg-green-800 badge-outline w-36 h-10 rounded-none">
              {product.status}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-bold uppercase">Description</h2>
            <h4>{product.description}</h4>
          </div>

          <div className="mt-4">
            <h2 className="font-bold uppercase">Key-Features</h2>
            <ol className="list-disc list-inside">
              <li>Brand: {product.keyFeatures.brand}</li>
              <li>Model: {product.keyFeatures.model}</li>
              <li>Specification: {product.keyFeatures.specification}</li>
            </ol>
          </div>
          <p className="text-3xl mt-4">${product.price}</p>
          <div className="card-actions justify-end items-center">
            <ReactStars
              count={5}
              value={product.individualRating}
              size={24}
              edit={false}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <h2>(Individual rating)</h2>
          </div>
          <div className="card-actions justify-end items-center">
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
            <h2>(Average rating)</h2>
          </div>
          <hr />
          <div>
            <h3 className="font-bold uppercase">Reviews</h3>
            <div className="mt-4">
              {reviews.map((review) => (
                <>
                  <p className="italic"> - {review.comment}</p>
                  <div className="card-actions justify-end items-center mb-4">
                    <h2 className="font-semibold">{review.username}</h2>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      size={24}
                      edit={false}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
        hr
      </div>
      <div></div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
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
