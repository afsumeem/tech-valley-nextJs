import React from "react";

const SelectProduct = ({ components }) => {
  // console.log(components.length);
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default SelectProduct;

//

export async function getServerSideProps({ params }) {
  const { category } = params;

  const res = await fetch(
    `http://localhost:5000/filteredProducts?category=${category}`
  );
  const data = await res.json();
  //   console.log(data);

  return { props: { components: data } };
}
