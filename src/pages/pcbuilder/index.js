import Link from "next/link";
import { useSelector } from "react-redux";

const PCBuilder = ({ categories }) => {
  const selectedProducts = useSelector((state) => state.pcBuilder.products);
  return (
    <div>
      {categories?.map((category) => (
        <>
          <h2>{category}</h2>
          <div>{selectedProducts && selectedProducts[category]}</div>

          {""}

          <div>
            {!selectedProducts ? (
              <Link href={`/selectProduct/${category}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Choose
                </button>
              </Link>
            ) : (
              <div>Component Selected</div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default PCBuilder;

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
