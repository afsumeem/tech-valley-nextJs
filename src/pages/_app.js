import { store } from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <ToastContainer />
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </SessionProvider>
    </>
  );
}
