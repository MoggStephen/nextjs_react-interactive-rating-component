//IMPORT BUNDLED BOOTSTRAP SCSS
import 'bootstrap/scss/bootstrap.scss';
//IMPORT GLOBAL STYLES
import '@/styles/globals.scss';
//Import Hooks // Neeeded to import bootstraps js
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  
  //IMPORT BUNDLED BOOTSTRAP JS
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}
