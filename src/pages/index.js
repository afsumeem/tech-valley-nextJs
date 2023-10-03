import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import HeroSection from "@/components/UI/HeroSection";
import Head from "next/head";

export default function Home({ products, categories }) {
  return (
    <>
      <Head>
        <title>Tech Valley</title>
        <meta
          name="description"
          content="A PC Builder website made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <FeaturedProducts products={products} />
      <FeaturedCategories categories={categories} />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

//fetch products from db

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  //random products
  const shuffledProducts = data.sort(() => Math.random() - 0.5);
  const randomProducts = shuffledProducts.slice(0, 8);

  //categories
  const productCategories = data.map((product) => product.category);
  const uniqueCategories = productCategories.filter(
    (category, index, currentVal) => currentVal.indexOf(category) === index
  );

  return {
    props: {
      products: randomProducts,
      categories: uniqueCategories,
    },
    revalidate: 10,
  };
};
