import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
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
          <div key={i} className="border-2 my-4 px-6 py-4">
            <h2>{category}</h2>
            <div>
              {selectedProducts &&
                selectedProducts[category]?.map((compo, i) => (
                  <>
                    <p>{compo.productName}</p>
                  </>
                ))}
            </div>

            <div>
              {!selectedProducts[category] ? (
                <Link href={`pcbuilder/selectproduct/${category}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Choose
                  </button>
                </Link>
              ) : (
                <div>Component Selected</div>
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
  const res = await fetch("http://localhost:5000/products");
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
