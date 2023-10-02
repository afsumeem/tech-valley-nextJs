import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = () => {
  const router = useRouter();
  return (
    <div>
      <h2>Product details {router.query.productdetail}</h2>
    </div>
  );
};

export default ProductDetailsPage;
