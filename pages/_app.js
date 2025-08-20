import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const yourName = "Fong Jia Xin";

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header name={yourName} />
        <Component {...pageProps} />
        <Footer name={yourName} />
      </div>
    </ThemeProvider>
  );
}
