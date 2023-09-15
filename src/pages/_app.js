import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { ContextAPiProvider  } from "./context/ContextAPi";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.css");
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <ContextAPiProvider >
      <Component {...pageProps} />
    </ContextAPiProvider>
  );
}
