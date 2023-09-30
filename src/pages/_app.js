import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </SessionProvider>
  );
}
