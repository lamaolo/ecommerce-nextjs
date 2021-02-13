import { CartContextProvider } from "../GlobalState";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}

export default MyApp;
