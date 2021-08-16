import "../scss/index.scss";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { CLIENT_ID } from "../lib/paypal";

export default function MyApp({ Component, pageProps }) {
  const initialOptions = {
    "client-id": CLIENT_ID,
    currency: "USD",
    intent: "capture",
    // "data-client-token": "abc123xyz==",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Component {...pageProps} />
    </PayPalScriptProvider>
  );
}
