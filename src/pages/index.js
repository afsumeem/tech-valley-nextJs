import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import HeroSection from "@/components/UI/HeroSection";
import Head from "next/head";

export default function Home() {
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
      <FeaturedProducts />
      <FeaturedCategories />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
