import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SITE_NAME = "Fong Jia Xin";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header name={SITE_NAME} />
      <Component {...pageProps} />
      <Footer name={SITE_NAME} />
    </>
  );
}
