import "../styles/globals.css";
import { BasketProvider } from "../Contexts/basket-context";

function MyApp({ Component, pageProps }) {
  return (
    <BasketProvider>
      <Component {...pageProps} />
    </BasketProvider>
  );
}

export default MyApp;
