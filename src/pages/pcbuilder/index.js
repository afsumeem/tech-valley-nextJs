import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import ReactStars from "react-rating-stars-component";

//

const PCBuilder = ({ categories }) => {
  const selectedProducts = useSelector((state) => state.pcBuilder.products);
  const router = useRouter();

  const successAlert = () => {
    toast.success("PC Build Successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    router.push("/");
  };
  return (
    <div>
      <ToastContainer />
      <div className="text-center my-4">
        <h2 className="font-bold text-4xl uppercase">Build Your PC</h2>
        <h5 className="text-xl mt-2">Select Your Components</h5>
      </div>

      <hr />

      <div className="mx-20 my-8">
        {categories?.map((category, i) => (
          <div
            key={i}
            className="border-2 my-4 px-6 py-4 flex flex-col md:flex-row justify-between gap-5 items-center"
          >
            <div className=" bg-slate-300 rounded-md h-24 w-28 text-center items-center flex justify-center">
              <h3 className="font-bold p-4">{category}</h3>
            </div>
            <div>
              {selectedProducts &&
                selectedProducts[category]?.map((compo, i) => (
                  <div
                    key={i}
                    className="border border-slate-400 p-2 flex gap-4 justify-center items-center "
                  >
                    <div>
                      <Image
                        src={compo.image}
                        height={50}
                        width={50}
                        alt="product"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{compo.productName}</p>
                      <p>{compo.category}</p>
                      <p className="my-2 font-semibold">${compo.price}</p>
                      <ReactStars
                        count={5}
                        value={compo.averageRating}
                        size={18}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                ))}
            </div>

            <div>
              {!selectedProducts[category] ? (
                <Link href={`pcbuilder/selectproduct/${category}`}>
                  <button className="btn bg-black text-white hover:text-black  border-t-0  border-b-2 transition duration-500">
                    Choose
                  </button>
                </Link>
              ) : (
                <div className="btn text-black cursor-not-allowed border-0 border-black bg-slate-200">
                  Product Selected
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {Object.keys(selectedProducts).length >= 5 ? (
        <div onClick={successAlert} className="flex justify-center m-5">
          <button className=" btn bg-black text-white hover:text-black  border-t-0  border-b-2 transition duration-500 hover:border block m-auto">
            Complete Build
          </button>
        </div>
      ) : (
        <div className="flex justify-center m-5">
          <button className="btn bg-black text-white hover:text-black  border-t-0  border-b-2 transition duration-500 hover:border block m-auto cursor-not-allowed">
            Complete Build
          </button>
        </div>
      )}
    </div>
  );
};

export default PCBuilder;

//
PCBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
//

export const getServerSideProps = async () => {
  const res = await fetch("https://tech-vally-server.vercel.app/products");
  const data = await res.json();

  //categories
  const productCategories = data.map((product) => product.category);
  const uniqueCategories = productCategories.filter(
    (category, index, currentVal) => currentVal.indexOf(category) === index
  );

  return {
    props: {
      categories: uniqueCategories,
    },
  };
};
